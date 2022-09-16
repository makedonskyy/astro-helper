import React from 'react';

export default function Main() {
  return (
    <div style={{
      backgroundImage: 'url(' + 'https://diariodigital.com.mx/wp-content/uploads/2017/12/lluvia3.gif' + ')', height: '720px', width: '1000px', textAlign: 'center',
    }}
    >
      <h1 style={{ color: 'whitesmoke' }}>
        Зарегистрируйтесь, чтобы получить уникальное предсказание по Вашему знаку зодиака!
      </h1>
      <h2 style={{ color: 'whitesmoke' }}>Хотите понимать коллег и без проблем чинить код?</h2>
      <p style={{ color: 'whitesmoke' }}>
        В этом Вам поможет наше уникальное описание знаков зодиака,
        где Вы можете узнать все достоинства и недостатки, которые в вас видят люди
      </p>
    </div>
  );
}
