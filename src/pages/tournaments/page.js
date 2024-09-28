import React from 'react'
import CardBackgroundPage from '../../components/card/cardBackgroundPage'
import GridItems from '../../components/bento/GridItems'
import FilterTournamentsByGame from '../../components/filter/filterTournamentsByGame';

export default function TournamentsPage() {
  const items = [
    {
      image: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ec1f32ae-96d0-11e6-8d3e-00163ec9f5fa/1724672472/rainbow-six-siege-screenshot.jpg',
      title: 'Título 1',
      text: 'Texto descritivo para o cartão 1.',
    },
    {
      image: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ec1f32ae-96d0-11e6-8d3e-00163ec9f5fa/1724672472/rainbow-six-siege-screenshot.jpg',
      title: 'Título 2',
      text: 'Texto descritivo para o cartão 2.',
    },
    {
      image: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ec1f32ae-96d0-11e6-8d3e-00163ec9f5fa/1724672472/rainbow-six-siege-screenshot.jpg',
      title: 'Título 3',
      text: 'Texto descritivo para o cartão 3.',
    },
    {
        image: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ec1f32ae-96d0-11e6-8d3e-00163ec9f5fa/1724672472/rainbow-six-siege-screenshot.jpg',
        title: 'Título 1',
        text: 'Texto descritivo para o cartão 1.',
      },
      {
        image: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ec1f32ae-96d0-11e6-8d3e-00163ec9f5fa/1724672472/rainbow-six-siege-screenshot.jpg',
        title: 'Título 2',
        text: 'Texto descritivo para o cartão 2.',
      },
      {
        image: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ec1f32ae-96d0-11e6-8d3e-00163ec9f5fa/1724672472/rainbow-six-siege-screenshot.jpg',
        title: 'Título 3',
        text: 'Texto descritivo para o cartão 3.',
      },
      {
        image: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ec1f32ae-96d0-11e6-8d3e-00163ec9f5fa/1724672472/rainbow-six-siege-screenshot.jpg',
        title: 'Título 1',
        text: 'Texto descritivo para o cartão 1.',
      },
      {
        image: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ec1f32ae-96d0-11e6-8d3e-00163ec9f5fa/1724672472/rainbow-six-siege-screenshot.jpg',
        title: 'Título 2',
        text: 'Texto descritivo para o cartão 2.',
      },
      {
        image: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ec1f32ae-96d0-11e6-8d3e-00163ec9f5fa/1724672472/rainbow-six-siege-screenshot.jpg',
        title: 'Título 3',
        text: 'Texto descritivo para o cartão 3.',
      },
      {
        image: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ec1f32ae-96d0-11e6-8d3e-00163ec9f5fa/1724672472/rainbow-six-siege-screenshot.jpg',
        title: 'Título 1',
        text: 'Texto descritivo para o cartão 1.',
      },
      {
        image: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ec1f32ae-96d0-11e6-8d3e-00163ec9f5fa/1724672472/rainbow-six-siege-screenshot.jpg',
        title: 'Título 2',
        text: 'Texto descritivo para o cartão 2.',
      },
      {
        image: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ec1f32ae-96d0-11e6-8d3e-00163ec9f5fa/1724672472/rainbow-six-siege-screenshot.jpg',
        title: 'Título 3',
        text: 'Texto descritivo para o cartão 3.',
      },
      {
          image: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ec1f32ae-96d0-11e6-8d3e-00163ec9f5fa/1724672472/rainbow-six-siege-screenshot.jpg',
          title: 'Título 1',
          text: 'Texto descritivo para o cartão 1.',
        },
        {
          image: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ec1f32ae-96d0-11e6-8d3e-00163ec9f5fa/1724672472/rainbow-six-siege-screenshot.jpg',
          title: 'Título 2',
          text: 'Texto descritivo para o cartão 2.',
        },
        {
          image: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ec1f32ae-96d0-11e6-8d3e-00163ec9f5fa/1724672472/rainbow-six-siege-screenshot.jpg',
          title: 'Título 3',
          text: 'Texto descritivo para o cartão 3.',
        },
        {
          image: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ec1f32ae-96d0-11e6-8d3e-00163ec9f5fa/1724672472/rainbow-six-siege-screenshot.jpg',
          title: 'Título 1',
          text: 'Texto descritivo para o cartão 1.',
        },
        {
          image: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ec1f32ae-96d0-11e6-8d3e-00163ec9f5fa/1724672472/rainbow-six-siege-screenshot.jpg',
          title: 'Título 2',
          text: 'Texto descritivo para o cartão 2.',
        },
        {
          image: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ec1f32ae-96d0-11e6-8d3e-00163ec9f5fa/1724672472/rainbow-six-siege-screenshot.jpg',
          title: 'Título 3',
          text: 'Texto descritivo para o cartão 3.',
        },
  ];
  return (
    <>
      <CardBackgroundPage>
        <FilterTournamentsByGame />
      </CardBackgroundPage>
      <CardBackgroundPage>
          <GridItems items={items}/>
      </CardBackgroundPage> 
    </>
    
  )
}
