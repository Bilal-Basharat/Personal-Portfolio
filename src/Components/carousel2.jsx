import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

export default function Posters() {
  return (
    
    <MDBCarousel showIndicators showControls fade>
      
      <MDBCarouselItem itemId={1}>
      <img src={require('../images/portfolio/1. graphic designing course title page new.jpg')} className='d-block w-100' alt='...' />
       
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
      <img src={require('../images/portfolio/2. MLSA flagship event coming soon.jpg')} className='d-block w-100' alt='...' />
       
      </MDBCarouselItem>

      
      <MDBCarouselItem itemId={3}>
      <img src={require('../images/portfolio/3. Itech non tech competitions.jpg')} className='d-block w-100' alt='...' />
       
      </MDBCarouselItem>

      
      <MDBCarouselItem itemId={4}>
      <img src={require('../images/portfolio/4. coding competition poster-01.jpg')} className='d-block w-100' alt='...' />

      </MDBCarouselItem>

      
      <MDBCarouselItem itemId={5}>
      <img src={require('../images/portfolio/5. coding competition poster.jpg')} className='d-block w-100' alt='...' />

      </MDBCarouselItem>

      
      <MDBCarouselItem itemId={6}>
      <img src={require('../images/portfolio/6. 14 AUGUST ADD-01.jpg')} className='d-block w-100' alt='...' />
        
      </MDBCarouselItem>

      
      <MDBCarouselItem itemId={7}>
      <img src={require('../images/portfolio/7. bajwa press practice work 3.jpg')} className='d-block w-100' alt='...' />
       
      </MDBCarouselItem>

      
      <MDBCarouselItem itemId={8}>
      <img src={require('../images/portfolio/8. defence day.jpg')} className='d-block w-100' alt='...' />
       
      </MDBCarouselItem>

      
      <MDBCarouselItem itemId={9}>
      <img src={require('../images/portfolio/9. human rights day Xnews competition-01.jpg')} className='d-block w-100' alt='...' />
       
      </MDBCarouselItem>

      
    </MDBCarousel>
  );
}