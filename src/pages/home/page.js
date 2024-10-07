import React from 'react'

import CardBackgroundPage from '../../components/card/cardBackgroundPage';
import BentoGridItems from '../../components/bento/BentoGridItems';
import TournamentsPage from '../tournaments/page';

export default function HomePage() {
  return (
    <div>
      <div>
        <CardBackgroundPage>
            <BentoGridItems>
              
            </BentoGridItems>
        </CardBackgroundPage> 
      </div>
      <div>
        <TournamentsPage/>
      </div>
    </div>
       
  )
}
