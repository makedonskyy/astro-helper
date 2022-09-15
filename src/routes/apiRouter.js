import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // const allNumbers = await Number.findAll({ order: [['company', 'ASC']], include: User });
    // res.json(allNumbers);
  } catch (error) {
    console.error(error);
  }
});

router.post('/signup', async (req, res) => {
  try {
    const {
      name, login, password,
    } = req.body;
    const hashedPass = await bcrypt.hash(password, 9);
    const currUser = await User.create({
      name, login, password: hashedPass,
    });
    req.session.userId = currUser.id;
    res.json({ id: currUser.id });
    res.sendStatus(200);
  } catch (error) {
    console.log(error.message);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { login, password } = req.body;
    const currUser = await User.findOne({ where: { login } });
    const compare = await bcrypt.compare(password, currUser.password);
    if (compare) {
      req.session.userId = currUser.id;
      req.session.userEmail = currUser.email;
      res.json({ id: currUser.id });
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.log(error.message);
  }
});

router.get('/logout', (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie('user_sid');
    res.sendStatus(200);
  } catch (error) {
    console.log(error.message);
  }
});

export default router;
