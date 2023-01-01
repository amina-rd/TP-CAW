import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./navbarelements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          
          <NavLink to="/contact" activeStyle>
            Contacts 
          </NavLink>
          <NavLink to="/blog" activeStyle>
            Blog
          </NavLink>
          <NavLink to="/" activeStyle>
           Home
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;