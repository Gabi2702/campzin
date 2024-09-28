import React from 'react'
import CardBackgroundPage from '../../components/card/cardBackgroundPage'
import BentoGridItems from '../../components/bento/BentoGridItems'
import CardGames from '../../components/card/cardGames'

export default function GamesPage() {
  const InfoGames = [
    {
      image: "https://example.com/game1.jpg",
      title: "The Legend of Zelda: Breath of the Wild",
      link: "zelda-breath-of-the-wild"
    },
    {
      image: "https://example.com/game2.jpg",
      title: "Super Mario Odyssey",
      link: "super-mario-odyssey"
    },
    {
      image: "https://example.com/game3.jpg",
      title: "Red Dead Redemption 2",
      link: "red-dead-redemption-2"
    },
    {
      image: "https://example.com/game4.jpg",
      title: "God of War",
      link: "god-of-war"
    },
    {
      image: "https://example.com/game5.jpg",
      title: "The Witcher 3: Wild Hunt",
      link: "the-witcher-3"
    },
    {
      image: "https://example.com/game6.jpg",
      title: "Cyberpunk 2077",
      link: "cyberpunk-2077"
    },
    {
      image: "https://example.com/game7.jpg",
      title: "Horizon Zero Dawn",
      link: "horizon-zero-dawn"
    },
    {
      image: "https://example.com/game8.jpg",
      title: "Elden Ring",
      link: "elden-ring"
    },
    {
      image: "https://example.com/game9.jpg",
      title: "Ghost of Tsushima",
      link: "ghost-of-tsushima"
    },
    {
      image: "https://example.com/game10.jpg",
      title: "Final Fantasy VII Remake",
      link: "final-fantasy-vii-remake"
    }
  ];
  

  return (
    <div>
      <CardBackgroundPage>
            <CardGames InfoGames={InfoGames}/>
      </CardBackgroundPage>
    </div>
  )
}
