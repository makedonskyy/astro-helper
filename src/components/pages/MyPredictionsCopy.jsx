import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function mypredictionsCopy({ user, setUser }) {
  const [predictions, setPredictions] = useState('');
  const [translate, setTranslate] = useState('');
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
    const response = await fetch('/api/v1/mypredictionscopy', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((data) => setPredictions(data.description));
  };
  console.log(predictions);
  useEffect(() => {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '91f366fe2dmsh222ff350d50ebf8p1a5868jsnf71042f07107',
        'X-RapidAPI-Host': 'deepl-translator.p.rapidapi.com'
      },
      body: `{"text": ${predictions},"source":"en","target":"ru"}`,
    };
    fetch('https://deepl-translator.p.rapidapi.com/translate/', options)
      .then((response) => response.json())
      .then((response) => console.log(response.text))
      .catch((err) => console.error(err));
  }, [submitHandler]);
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
          <option value="Pisces">Рыбы</option>
        </select>
      </div>
      <button className="btn btn-success" type="submit">get</button>
      <h3>Ваше предсказание:</h3>
      <p>{translate}</p>
    </form>
  );
}
