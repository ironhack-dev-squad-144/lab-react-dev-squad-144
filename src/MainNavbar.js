import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  // const array = useState(false)
  // const isOpen = array[0]
  // const setIsOpen = array[1]

  function toggle() {
    setIsOpen(!isOpen)
  }

  return (
    <Navbar color="primary" dark expand="md" className="mb-4">
      <NavbarBrand href="#">Dev Squad #144</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="#students">Students</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#topics-to-recap">Topics to Recap</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default MainNavbar;
