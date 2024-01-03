import React from 'react'
import '../Styles/navBar.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function NavBar() {

  // Function to handle smooth scrolling
const handleScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};

  return (
    <>
    <div className='navBar'> 
      <div className="leftNavBar">
          <img src={require('../../images/Bilal logo.png')} alt="This is logo" width={'10%'} />
      </div>
<div className="centerNavBar">

  <Link to="/">   Home </Link>

<Link to="/" onClick={() => handleScroll("aboutMe")}> About </Link>
<Link to="/" onClick={() => handleScroll("skillsSection")}> Skills </Link>
<Link to="/" onClick={() => handleScroll("services")}> Services </Link>
<Link to="/" onClick={() => handleScroll("portfolio")}> Portfolio </Link>
<Link to="/" onClick={() => handleScroll("contact")}> Contact </Link>
</div>
    </div>
    </>
  )
}

