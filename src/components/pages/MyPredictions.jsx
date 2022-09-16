import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MyPredictions() {
  const [predictions, setPredictions] = useState('');
  const getPredict = () => {
    fetch('/mypredictions').then((res) => res.json()).then((data) => setPredictions(data.description));
  };
  const [input, setInput] = useState({
    sign: '',
    day: '',
  });
  const navigate = useNavigate();
  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/v1/mypredictions', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((data) => setPredictions(data.description));
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="input-group">
        <select onChange={inputHandler} name="day" value={input.day} className="form-control" id="exampleFormControlSelect1">
          <option selected>Выберите день</option>
          <option value="today">Сегодня</option>
          <option value="tomorrow">Завтра</option>
          <option value="yesterday">Вчера</option>
        </select>
        <select onChange={inputHandler} name="sign" value={input.sign} className="form-control" id="exampleFormControlSelect1">
          <option selected>Выберите Ваш знак</option>
          <option value="Aries">Овен</option>
          <option value="Taurus">Телец</option>
          <option value="Gemini">Близнецы</option>
          <option value="Cancer">Рак</option>
          <option value="Leo">Лев</option>
          <option value="Virgo">Дева</option>
          <option value="Libra">Весы</option>
          <option value="Scorpio">Скорпион</option>
          <option value="Sagittarius">Стрелец</option>
          <option value="Capricorn">Козерог</option>
          <option value="Aquarius">Водолей</option>
          <option value="2Pisces">Рыбы</option>
        </select>
      </div>
      <button className="btn btn-success" type="submit">get</button>
      <h3>Ваше предсказание:</h3>
      <p>{predictions}</p>
    </form>
  );
}
