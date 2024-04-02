import React from "react";
import { slide as Menu } from "react-burger-menu";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar1 from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "../header/header.scss";

class SideBarMenu extends React.Component {
  showSettings(event: any) {
    event.preventDefault();
  }
  styles = {
    bmBurgerButton: {
      position: "absolute",
      width: "36px",
      height: "30px",
      right: "36px",
      top: "30px",
    },
    bmBurgerBars: {
      background: "#033c5a",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
      top: "0px",
    },
    bmMenu: {
      background: "#064c72",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };
  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu right styles={this.styles} width={"60%"}>
        <Navbar1 expand="lg" className="header-navBar">
          <Container>
            <Nav className="me-auto">
              <NavDropdown.Divider />
              <Link className="nav__text" to="/About">
                ABOUT
              </Link>
              <NavDropdown.Divider />
              <NavDropdown
                title="SERVICES"
                id="basic-nav-dropdown"
                className="nav__text"
              >
                <NavDropdown.Item href="#action/3.1">
                  <Link className="nav__text" to="/ContractDrafting">
                    Contract Drafting
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  <Link className="nav__text" to="/ContractAnalysis">
                    Contract Analysis
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  <Link className="nav__text" to="/ContractReview">
                    Contract Review
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <Link className="nav__text" to="/ContractManagement">
                    Contract Management
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Divider />
              <Link className="nav__text" to="/FAQs">
                FAQs
              </Link>
              <NavDropdown.Divider />
              <Link className="nav__text" to="/OrderRewiew">
                ORDER A REWIEW
              </Link>
              <NavDropdown.Divider />
            </Nav>
          </Container>
        </Navbar1>
      </Menu>
    );
  }
}

export default SideBarMenu;
