import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function OneSign({ oneSign, user, setUser }) {
  const [sign, setSign] = useState(oneSign || null);
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    fetch(`/api/v1/about/sign/${id}`)
      .then((res) => res.json())
      .then((data) => setSign(data));
  }, []);
  return (
    <div>
      {sign && (
      <>
        <div className="row">
          <div className="col-2">
            <h2>{sign?.name}</h2>
          </div>
        </div>
        <h3>Основные черты знака</h3>
        <div className="row">
          <p>{sign?.description}</p>
        </div>
        <h3>Плюсы</h3>
        <div className="row">
          <h2>{sign?.plus}</h2>
        </div>
        <h3>Минусы</h3>
        <div className="row">
          <h2>{sign?.plus}</h2>
        </div>
      </>
      )}
    </div>
  );
}
