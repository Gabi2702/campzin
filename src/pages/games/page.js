import React from 'react'
import CardBackgroundPage from '../../components/card/cardBackgroundPage'
import CardGames from '../../components/card/cardGames'

export default function GamesPage() {
  const InfoGames = [
    {
      image: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1GUGTgi7diwlJlK2bQuD7d/8a1507a205db1a7416ec58881e43f8bf/r6-heroBanner.jpg",
      title: "Tom Clancy`s Rainbow Six Siege",
      link: "r6"
    },
   
  ];
  

  return (
    <div>
      <CardBackgroundPage>
            <CardGames InfoGames={InfoGames}/>
      </CardBackgroundPage>
    </div>
  )
}
