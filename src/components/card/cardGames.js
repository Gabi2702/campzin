import React from 'react'

import CardWithLink from './cardWithLink';

export default function CardGames({ InfoGames}) {
  
  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      {Array.from({ length: InfoGames.length }, (_, index) => (
        <CardWithLink key={index} className={"w-[300px] h-[300px] p-4 hover:cursor-pointer"} urlLink={`/tournaments/${InfoGames[index].link}`}>
          <img
            src={InfoGames[index].image || 'https://via.placeholder.com/150'}
            alt={`Image ${index + 1}`}
            className="w-full h-[90%] object-cover mb-2 rounded-md"
          />
          <p className='font-bold'>{InfoGames[index].title}</p>
        </CardWithLink>
      ))}
    </div>
  );
}
