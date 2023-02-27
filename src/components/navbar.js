import React, { useState, useEffect, useRef } from "react";

import {
  Hero,
  Navbar,
  Container,
  Block,
  Content,
  Columns,
} from "react-bulma-components";

import Home from "./home";
import About from "./about";

import logo from "../assets/logov2.png";

function PageNav(props) {
  const setActiveComponent = props.setActiveComponent;

  // State to manage the active state of the burger and menu
  const [isActive, setIsActive] = useState(false);

  // Ref to the menu element
  const menuRef = useRef(null);

  // Add event listeners to the document to handle clicks outside the menu to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsActive(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div>
      <Hero size="medium" color="light">
        <Navbar className="is-light">
          <Container className="header">
            <Navbar.Brand className="navbar-brand-name text-center" href="/">
              {" "}
              <Block className="mx-4 me-3 mt-5">
                <img
                  src={logo}
                  className="img-fluid"
                  width="85"
                  height="auto"
                  alt="logo"
                />{" "}
              </Block>
              <Content className="mt-5">
                <h3
                  className="mt-3 has-text-centered is-size-4 "
                  style={{ alignItem: "left" }}
                >
                  Senior Care Solutions of AZ <br />
                  <a
                    className="is-size-5"
                    href="tel:6025656101"
                    style={{ textDecoration: "none" }}
                  >
                    <small class="text-muted">602-565-6101</small>
                  </a>
                </h3>
              </Content>
              <Navbar.Burger
                className={`navbar-burger is-vcentered`}
                aria-label="menu"
                aria-expanded="false"
                responsive="mobile"
                onClick={() => setIsActive(!isActive)}
                isActive={isActive}
              >
                <span />
                <span />
                <span />
              </Navbar.Burger>
            </Navbar.Brand>

            <Navbar.Menu
              className={`is-size-6 navbar-menu ${isActive ? "is-active" : ""}`}
              id="navbar-menu"
              ref={menuRef}
            >
              <Navbar.Container className="navbar-end" align="end">
                <Navbar.Item onClick={() => setActiveComponent(<Home />)}>
                  Home
                </Navbar.Item>
                <Navbar.Item onClick={() => setActiveComponent(<About />)}>
                  About
                </Navbar.Item>
                <Navbar.Item onClick={() => setActiveComponent(<Home />)}>
                  Placement
                </Navbar.Item>
                <Navbar.Item onClick={() => setActiveComponent(<Home />)}>
                  Contact
                </Navbar.Item>
              </Navbar.Container>
            </Navbar.Menu>
          </Container>
        </Navbar>
      </Hero>
      <Hero className="py-4 header banner-hero ">
        <h3 className="mx-1 is-size-3 is-size-5-tablet is-size-6-mobile ">
          Our placement services are 100% free to you and your family
        </h3>
      </Hero>
    </div>
  );
}

export default PageNav;
