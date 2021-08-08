import Nav from 'react-bootstrap/Nav'
import React from 'react';
function NavBarLinks() {
    return (
        <Nav className="mr-auto navbar-nav-style">
          <Nav.Link key="0" className="navbar-links" href="/home">Home</Nav.Link> 
          <Nav.Link key="1" className="navbar-links" href="/search">Search</Nav.Link>
          <Nav.Link key="2" className="navbar-links" href="/favourites">Favourites</Nav.Link>
        </Nav>
    );
  }
  
  export default NavBarLinks;
  