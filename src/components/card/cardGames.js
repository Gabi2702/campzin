import React from 'react';

import CardWithLink from './cardWithLink';

export default function CardGames({ InfoGames, size = "lg" }) {

  const types = {
    "lg" : {
      container: "grid grid-cols-5 gap-4 p-4 mb-2",
      card_link : "w-[300px] h-[300px] hover:cursor-pointer",
      img_size : "w-full h-[92%] p-2 object-cover rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-105", 
      text_game_name : true
    },
    "sm" : {
      container: "flex flex-row gap-2 mb-2",
      card_link : "w-18 h-18 hover:cursor-pointer -mt-4",
      img_size : "w-[80px] h-[80px] object-cover rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105 p-2", 
      text_game_name : false
    }
  }

  return (
    <div className={types[size].container}>
      {InfoGames?.map((game, index) => (
        <CardWithLink key={index} className={types[size].card_link} urlLink={`/tournaments/game/${game.search_query}`}>
          <img
            src={game[`image_${size}`]} 
            alt={`Image ${index + 1}`}
            className={types[size].img_size}
          />
          {types[size].text_game_name && (
            <p className="text-center">{game.name}</p>
          )}
        </CardWithLink>
      ))}
    </div>
  );
}
