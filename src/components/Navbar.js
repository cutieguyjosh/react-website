// import React from 'react';
// import { Nav, Navbar } from 'react-bootstrap';
// import './Navbar.css';



// export default function NavBar() {
    
//     return (
//         <Navbar className="navbar__root">
//             <div className="navbar__container">

//                 <Navbar.Brand href="/" id="navbar__logo">
//                     <i class="fas fa-laptop-code"></i>
//                 </Navbar.Brand>

//                 <Nav className="navbar__menu">
//                     <Nav.Item className="navbar__items">
//                         <Nav.Link href="/" className="navbar__links">
//                             Home
//                         </Nav.Link> 
//                     </Nav.Item>
//                     <Nav.Item className="navbar__items">
//                         <Nav.Link className="navbar__links">
//                             Portfolio
//                         </Nav.Link> 
//                     </Nav.Item>
//                     <Nav.Item className="navbar__items">
//                         <Nav.Link className="navbar__links">
//                             Skills
//                         </Nav.Link> 
//                     </Nav.Item>
//                     <Nav.Item className="navbar__items">
//                         <Nav.Link className="navbar__links">
//                             Contact
//                         </Nav.Link> 
//                     </Nav.Item>
//                 </Nav>
//             </div>
//         </Navbar>
//     )
// }

import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <React.Fragment>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <i class="fas fa-laptop-code"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/projects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/skills'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Skills
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;