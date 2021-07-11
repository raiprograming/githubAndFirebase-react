import React,{useContext, useState} from "react"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,NavItem,
    NavLink,
    NavbarText

} from "reactstrap"

import {Link} from "react-router-dom"


import {UserContext} from "../context/UserContext"

const Header=()=>{

    const context=useContext(UserContext);


    const [isOpen,setIsOpen]=useState(false);

    const toogle=()=>{
        setIsOpen(!isOpen);
    }

    return (
      <Navbar color="info text-white" light expand="md">
        <NavbarBrand className="text-white">
          <Link className="text-white" to="/">
            Fire with git App
          </Link>
        </NavbarBrand>
        <NavbarText className="text-white">
          {context.user?.email ? context.user.email : ""}
        </NavbarText>
        <NavbarToggler onClick={toogle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {context.user ? (
              <NavItem>
                <NavLink
                onClick={()=>{context.setUser(null)}}
                className="text-white">
                  Signout
                </NavLink>
              </NavItem>
            ) : (
              <>
                <NavItem>
                  <NavLink tag={Link} to="/signup" className="text-white">
                    Signup
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink tag={Link} to="/signin" className="text-white">
                    Signin
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    );


}

export default Header;