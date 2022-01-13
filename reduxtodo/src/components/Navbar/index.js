import React from 'react';
import {
Division,
Nav,
NavLink,
NavMenu,

} from './NavbarElements';


const Navbar = () => {
  return (
    <>
      <Division>
        <Nav>
          <NavMenu>
          <NavLink to="/" activeStyle>
              Home
            </NavLink>
            <NavLink to="/todos" activeStyle>
              Todos
            </NavLink>
            <NavLink to="/edit" activeStyle>
              Edit
            </NavLink>
          </NavMenu>
          
        </Nav>
      </Division>
    </>
  );
};

export default Navbar;
