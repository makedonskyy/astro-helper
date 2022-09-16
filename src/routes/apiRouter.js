import express from 'express';
import bcrypt from 'bcrypt';
import { User, Zodiac } from '../db/models';

const router = express.Router();

router.get('/about', async (req, res) => {
  try {
    const allSign = await Zodiac.findAll();
    res.json(allSign);
  } catch (error) {
    console.error(error);
  }
});

router.get('/about/sign/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const oneSign = Zodiac.findOne({ where: { id } });
    res.json(oneSign);
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
