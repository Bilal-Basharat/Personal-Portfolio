import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "../Components/Pages/navBar";
import Footer from "../Components/Pages/footer";
import SkillProgressBar from "../Components/skillsProgressBar";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LogoSlider from "../Components/carousel";
import Posters from "../Components/carousel2";
import NewsLetter from "../Components/carousel3";
import Services from "../Components/services";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="home">
        <div className="background"></div>

        {/* About Me section */}

        <div className="aboutMe" id="aboutMe">
          {/* profile picture */}
          <div className="profilePicture">
            <img
              src={require("../images/bilal profile pic.png")}
              width={"100%"}
              alt=""
            />
          </div>

          <div className="aboutMeInside">
            <h1> About Me </h1>
            <p>
              <strong> Hello, I'm Bilal Basharat, </strong> a dedicated BSCS
              student in my 5th semester at UET Lahore. Proficient in web and
              mobile app development, along with graphic design, I combine
              technical expertise with a minimalist design approach. Passionate
              about crafting innovative solutions, I thrive in the ever-evolving
              tech landscape. Beyond coding, I stay engaged with industry trends
              and am driven by a lifelong learning ethos. Let's connect and
              explore the exciting possibilities of technology and design.
            </p>
          </div>
        </div>

        {/* gallery block */}

        <div className="skillsSection" id="skillsSection">
          <h1> Skills </h1>

          <div className="skillsBlock">
            {/* React JS progress bar */}
            <div className="skillsBlockInside">
              <SkillProgressBar skill="React JS" progress={80} />
            </div>

            {/* React JS progress bar */}
            <div className="skillsBlockInside">
              <SkillProgressBar skill="Node JS" progress={80} />
            </div>

            {/* React JS progress bar */}
            <div className="skillsBlockInside">
              <SkillProgressBar skill="Flutter" progress={90} />
            </div>

            {/* React JS progress bar */}
            <div className="skillsBlockInside">
              <SkillProgressBar skill="Figma" progress={80} />
            </div>

            {/* React JS progress bar */}
            <div className="skillsBlockInside">
              <SkillProgressBar skill="Adobe Illustrator" progress={95} />
            </div>

            {/* React JS progress bar */}
            <div className="skillsBlockInside">
              <SkillProgressBar skill="Adobe Photoshop" progress={75} />
            </div>
          </div>
        </div>

        {/* Services Portion */}
        <div className="services" id="services">
          <h2> Services </h2>
          <Services />
        </div>

        {/* portfolio portion */}
        <div className="portfolio" id="portfolio">
          <h2> Portfolio </h2>

          <div className="portfolioBlock">
            <div className="portfolioInside">
              <h3> Logo Design </h3>

              <LogoSlider />
            </div>

            <div className="portfolioInside">
              <h3> Poster Design </h3>

              <Posters />
            </div>

            <div className="portfolioInside">
              <h3> News Letter Design </h3>
              <NewsLetter />
            </div>
          </div>
        </div>

        {/* Contact portion */}
        <div className="contactUs" id="contact">
          <h2> Contact Me </h2>

          <div className="contactUsBlock">

            {/* github link */}
            <div className="contactInside">
            
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-github" style={{ fontSize: '36px', color: 'black' }}></i>
</a>

            </div>

            {/* Behance link */}
            <div className="contactInside">
            
            <a href="https://behance.com/bilalbisharat" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-behance" style={{fontSize:'36px', color: '#053EFF'}}></i>
            </a>
            
            </div>

            {/* Dribble link */}
            <div className="contactInside">
            
            <a href="https://dribbble.com/bilalBasharat" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-basketball" style={{fontSize:'36px', color: '#ED5AB3'}}></i>
            </a>
            
            </div>

            {/* LinkedIn link */}
            <div className="contactInside">

            <a href="https://www.linkedin.com/in/bilal-basharat/" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin-in" style={{fontSize:'36px', color: '#3081D0'}}></i>
            </a>
            
            </div>

            {/* Insta link */}
            <div className="contactInside">

            <a href="https://www.instagram.com/bilalbisharat" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-instagram" style={{fontSize:'36px', color: '#d62976'}}></i>
            </a>

            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
