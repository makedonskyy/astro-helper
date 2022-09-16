import express from 'express';

const route = express.Router();

route.get('/', async (req, res) => {
  try {
    res.render('Layout');
  } catch (err) {
    console.error('Ошибка в формировании страницы', err);
  }
});

route.get('/login', async (req, res) => {
  try {
    res.render('Layout');
  } catch (err) {
    console.error('Ошибка входа', err);
  }
});

route.get('/signup', async (req, res) => {
  try {
    res.render('Layout');
  } catch (err) {
    console.error('Ошибка регистрации', err);
  }
});

route.get('/about', async (req, res) => {
  try {
    res.render('Layout');
  } catch (err) {
    console.error('Ошибка списка знаков', err);
  }
});

route.get('/about/sign/:id', async (req, res) => {
  try {
    res.render('Layout');
  } catch (err) {
    console.error('Ошибка знака', err);
  }
});

route.get('/mypredictions', async (req, res) => {
  try {
    res.render('Layout');
  } catch (err) {
    console.error('Ошибка добавления', err);
  }
});

export default route;
