import React from 'react';
import {} from 'react-pdf';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

export default function NewsLetter() {
  return (
    
    <MDBCarousel showIndicators showControls fade>
      
      <MDBCarouselItem itemId={1}>
      <img src={require('../images/portfolio/newsletter design/FFC1/FFC Grammar School Newsletter copy-01.png')} className='d-block w-100' alt='...' />       
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
      <img src={require('../images/portfolio/newsletter design/2. booklet cover 1.jpg')} className='d-block w-100' alt='...' />
       
      </MDBCarouselItem>

      
      <MDBCarouselItem itemId={3}>
      <img src={require('../images/portfolio/newsletter design/FFC2/newsletter-21-22/newsletter-21-22-01.png')} className='d-block w-100' alt='...' />       
       
      </MDBCarouselItem>

           
    </MDBCarousel>
  );
}