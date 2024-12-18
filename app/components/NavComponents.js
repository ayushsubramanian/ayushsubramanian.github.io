"use client";
import React from 'react';
import {
  Header,
  HeaderContent,
  Logo,
  Nav,
  NavItemWrapper,
  NavDivider,
  ResumeButton,
} from './style';
import { Link } from 'react-scroll';

const NavItem = ({ number, text, target }) => (
  <NavItemWrapper>
    <Link
      activeClass="active"
      to={target}
      spy={true}
      smooth={true}
      offset={50} // Adjust this offset based on your header height
      duration={1000}
      className="nav-link"
    >
      <span className="nav-number">&lt;{number}&gt;</span> {text}
    </Link>
  </NavItemWrapper>
);

function Navigation() {
    return (
        <Header>
          <HeaderContent>
            <Link
              to="top"
              spy={true}
              smooth={true}
              duration={1000}
              className="nav-link"
            >
              <Logo>&lt;&nbsp;/AS&nbsp;&gt;</Logo>
            </Link>
            <Nav>
              <NavItem number="1" text="About Me" target="about-section" />
              <NavItem number="2" text="Skills" target="skills-section" />
              <NavItem number="3" text="Experience" target="experience-section" />
              <NavItem number="4" text="Projects" target="projects-section" />
              <NavItem number="5" text="Contact" target="contact-section" />
              <NavDivider />
              <ResumeButton
                href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:0c1ad753-f022-415d-99c0-03704b6daf10"
                target="_blank"
                rel="noopener noreferrer"
              >  
              Resume
              </ResumeButton> 
            </Nav>
          </HeaderContent>
        </Header>
    );
}

export default Navigation;