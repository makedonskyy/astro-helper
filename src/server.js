import express from 'express';
import morgan from 'morgan';
import path from 'path';
import session from 'express-session';
import store from 'session-file-store';
import jsxRender from './components/utils/jsxRender';
import indexRouter from './routes/indexRouter';
import apiRouter from './routes/apiRouter';

const PORT = 3000;
const app = express();

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));
const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'test', // Секретное слово для шифрования, может быть любым
  resave: true, // Пересохранять ли куку при каждом запросе
  store: new FileStore(),
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};
app.use(session(sessionConfig));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(async (req, res, next) => {
  res.locals.path = req.originalUrl;
  // const allNumbers = await Number.findAll({ order: [['company', 'ASC']], include: User });
  // res.locals.allNumbers = allNumbers;
  // res.locals.userId = req.session?.userId;
  // res.locals.userEmail = req.session?.userEmail;
  // if (req.session?.userId) {
  //   const myNum = await Number.findAll({
  //     where: { user_id: res.locals.userId },
  //   });
  //   res.locals.myNum = myNum;
  // }

  next();
});

app.use('/', indexRouter);
app.use('/api/v1', apiRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
