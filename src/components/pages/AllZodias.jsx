import React, { useEffect, useState } from 'react';
import ImgCard from '../cards/ImgCard';

export default function AllZodias({ user, setUser, zodiac }) {
  const [allZodiac, setAllZodiac] = useState(zodiac || null);
  useEffect(() => {
    fetch('/api/v1/about')
      .then((res) => res.json())
      .then((data) => setAllZodiac(data));
  }, []);
  return (
    <>
      <div>Все знаки зодиака</div>
      <div className="row">
        {
        allZodiac && allZodiac?.map((el) => (
          <ImgCard
            zod={el}
            key={el.id}
            user={user}
            setUser={setUser}
          />
        ))
    }
      </div>
    </>
  );
}
