import React from 'react'
import './services.css';

export default function Services() {
  return (
<>
        <div class="services-content">

            {/* <!-- Box 1 --> */}
            <div class="services-box">
                <i class='bx bx-code-alt' ></i>
                <h3>Web Development</h3>
                <a href="https://github.com/Bilal-Basharat">Learn More</a>
            </div>

            {/* <!-- Box 2 --> */}
            <div class="services-box">
                <i class='bx bx-mobile' ></i>
                <h3> Mobile App Development </h3>
                <a href="https://github.com/Bilal-Basharat">Learn More</a>
            </div>

            {/* <!-- Box 3 --> */}
            <div class="services-box">
                <i class='bx bx-brush' ></i>
                <h3>Graphics Designing </h3>
                <a href="https://www.behance.net/bilalbisharat">Learn More</a>
            </div>
        </div>
</>

    )
}
