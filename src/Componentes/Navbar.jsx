import { NavLink } from "react-router-dom";
import styled from "styled-components";

const WrapperNav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(240, 248, 255);

  @media screen and (min-width: 980px) {
  justify-content: space-around;
    
  }
`;

const Logo = styled.div`
  padding: 0;
  margin: 0   0 0 1.5em;
  cursor: default;
  display: flex;
  align-items: center;
  gap: 0.5em;
  & .fa-ticket {
    font-size: 1.5em;
  }
`;

const LogoText = styled.h2`
  margin: 0;
`;

const Nav = styled.nav`
  margin: 0;
  padding: 1em;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
`;
const NavItem = styled.li`
  & a {
    text-decoration: none;
    padding: 1em;
  }
`;
const Navbar = () => {
  return (
    <WrapperNav>
      <Logo>
        <i className="fa-solid fa-ticket"></i>
        <LogoText>Atlas</LogoText>
      </Logo>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </WrapperNav>
  );
};

export default Navbar;
