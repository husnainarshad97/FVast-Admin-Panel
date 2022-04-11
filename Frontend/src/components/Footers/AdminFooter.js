import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Row, Col, Nav, NavItem, NavLink } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
        <Col xl="6">
          <div className="copyright text-center text-xl-left text-muted">
            © {new Date().getFullYear()}{" "}
            <Link
              className="font-weight-bold ml-1"
              to="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              Code Breakers
            </Link>
          </div>
        </Col>

        <Col xl="6">
          <Nav className="nav-footer justify-content-center justify-content-xl-end">
            <NavItem>
              <NavLink to="#" rel="noopener noreferrer" target="_blank">
                abc
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="#" rel="noopener noreferrer" target="_blank">
                About Us
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="#" rel="noopener noreferrer" target="_blank">
                Blog
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="#" rel="noopener noreferrer" target="_blank">
                abc{" "}
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
