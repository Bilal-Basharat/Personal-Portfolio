import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

export default function LogoSlider() {
  return (
    
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src={require('../images/portfolio/logoDesigns/AltruFood_Logo.jpg')} className='d-block w-100' alt='...' />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
      <img src={require('../images/portfolio/logoDesigns/Illuminr_logo.jpg')} className='d-block w-100' alt='...' />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
      <img src={require('../images/portfolio/logoDesigns/Lair_Logo.jpg')} className='d-block w-100' alt='...' />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={4}>
        <img src={require('../images/portfolio/logoDesigns/OPTI_Health_Logo.jpg')} className='d-block w-100' alt='...' />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={5}>
        <img src={require('../images/portfolio/logoDesigns/WZ_logo.jpg')} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      
    </MDBCarousel>
  );
}