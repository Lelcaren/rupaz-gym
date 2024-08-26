import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { Link } from 'react-scroll';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const mobile = window.innerWidth <= 768;

  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="logo" />
      
      {mobile && !menuOpened ? (
        <div
          style={{
            backgroundColor: 'var(--appColor)',
            padding: '0.5rem',
            borderRadius: '5px'
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img src={Bars} alt="Menu" style={{ width: '1.5rem', height: '1.5rem' }} />
        </div>
      ) : (
        <ul className={`header-menu ${menuOpened ? 'open' : ''}`}>
          <li>
            <Link 
              onClick={() => setMenuOpened(false)}
              to="home" 
              smooth={true} 
              span={true}
            >
              Home
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>Programs</li>
          <li onClick={() => setMenuOpened(false)}>Why Us</li>
          <li onClick={() => setMenuOpened(false)}>Plans</li>
          <li>
            <Link 
              onClick={() => setMenuOpened(false)}
              to="testimonials" 
              smooth={true} 
              span={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;


