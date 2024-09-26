import React from 'react'
import BentoGrid from '../../components/bento/bentoGrid';
import CardBackgroundPage from '../../components/card/cardBackgroundPage';

export default function HomePage() {
    const items = [
        {
          image: 'https://via.placeholder.com/150',
          title: 'Título 1',
          text: 'Texto descritivo para o cartão 1.',
        },
        {
          image: 'https://via.placeholder.com/150',
          title: 'Título 2',
          text: 'Texto descritivo para o cartão 2.',
        },
        {
          image: 'https://via.placeholder.com/150',
          title: 'Título 3',
          text: 'Texto descritivo para o cartão 3.',
        },
        {
            image: 'https://via.placeholder.com/150',
            title: 'Título 1',
            text: 'Texto descritivo para o cartão 1.',
          },
          {
            image: 'https://via.placeholder.com/150',
            title: 'Título 2',
            text: 'Texto descritivo para o cartão 2.',
          },
          {
            image: 'https://via.placeholder.com/150',
            title: 'Título 3',
            text: 'Texto descritivo para o cartão 3.',
          },
          {
            image: 'https://via.placeholder.com/150',
            title: 'Título 1',
            text: 'Texto descritivo para o cartão 1.',
          },
          {
            image: 'https://via.placeholder.com/150',
            title: 'Título 2',
            text: 'Texto descritivo para o cartão 2.',
          },
          {
            image: 'https://via.placeholder.com/150',
            title: 'Título 3',
            text: 'Texto descritivo para o cartão 3.',
          },
      ];
  return (
    <div>
      <div>
        <CardBackgroundPage>
          <h1>Tetse</h1>
        </CardBackgroundPage> 
      </div>
      <div>
        <CardBackgroundPage>
          <BentoGrid items={items}/>
        </CardBackgroundPage> 
      </div>
    </div>
       
  )
}
