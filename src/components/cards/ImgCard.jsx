import React from 'react';
import { Link } from 'react-router-dom';

export default function ImgCard({ user, setUser, zod }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={zod.photo} className="card-img-top" alt="sign" />
      <div className="card-body">
        <h5 className="card-title">{zod.name}</h5>
        <Link to={`/about/sign/${zod.id}`} className="btn btn-primary">Узнать больше</Link>
      </div>
    </div>
  );
}
