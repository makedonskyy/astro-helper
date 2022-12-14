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
            <h2 style={{ color: 'whitesmoke' }}>{sign?.name}</h2>
          </div>
        </div>
        <h3 style={{ color: 'whitesmoke' }}>Основные черты знака</h3>
        <div className="row">
          <p style={{ color: 'whitesmoke' }}>{sign?.description}</p>
        </div>
        <h3 style={{ color: 'whitesmoke', textDecorationLine: 'underline overline', textDecorationColor: 'whitesmoke' }}>Плюсы</h3>
        <div className="row">
          <h2 style={{ color: 'whitesmoke' }}>{sign?.plus}</h2>
        </div>
        <h3 style={{ color: 'whitesmoke', textDecorationLine: 'underline overline', textDecorationColor: 'whitesmoke' }}>Минусы</h3>
        <div className="row">
          <h2 style={{ color: 'whitesmoke' }}>{sign?.plus}</h2>
        </div>
      </>
      )}
    </div>
  );
}
