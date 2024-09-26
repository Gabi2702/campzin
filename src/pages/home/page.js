import React from 'react'

import CardBackgroundPage from '../../components/card/cardBackgroundPage';
import GridItems from '../../components/bento/GridItems';
import BentoGridItems from '../../components/bento/BentoGridItems';

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
            <BentoGridItems>
              
            </BentoGridItems>
        </CardBackgroundPage> 
      </div>
      <div>
        <CardBackgroundPage>
          <GridItems items={items}/>
        </CardBackgroundPage> 
      </div>
    </div>
       
  )
}
