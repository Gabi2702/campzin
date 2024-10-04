import React from 'react';

import CardWithLink from './cardWithLink';

export default function CardGames({ InfoGames, size = "lg" }) {

  const types = {
    "lg" : {
      container: "grid grid-cols-5 gap-4 p-4",
      card_link : "w-[300px] h-[300px] hover:cursor-pointer",
      img_size : "w-full h-[90%] p-2 object-cover rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-105", // Adicionado efeito de hover
      text_game_name : true
    },
    "sm" : {
      container: "flex flex-row gap-2 ",
      card_link : "w-18 h-18 hover:cursor-pointer -mt-4",
      img_size : "w-[80px] h-[80px] object-cover rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105", // Adicionado efeito de hover
      text_game_name : false
    }
  }

  return (
    <div className={types[size].container}>
      {Array.from({ length: InfoGames?.length }, (_, index) => (
        <CardWithLink key={index} className={types[size].card_link} urlLink={`/tournaments/game/${InfoGames[index].search_query}`}>
          <img
            src={InfoGames[index].image || "https://static-esports.ubisoft.com/esports-platform/r6s/championship/0079620d-4622-4443-9d8a-31cdc889309c.png"}
            alt={`Image ${index + 1}`}
            className={types[size].img_size}
          />
          { types[size].text_game_name && 
          (
            <p className='font-bold text-sm text-center text-white'>{InfoGames[index].name}</p>
          )}
        </CardWithLink>
      ))}
    </div>
  );
}
