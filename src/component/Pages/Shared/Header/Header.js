import React, { useContext } from "react";
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import LeftsideNav from "../LeftsideNav/LeftsideNav";
import Button from "react-bootstrap/Button";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((er) => {
        console.error(er.message);
      });
  };

  return (
    <div>
      <Navbar
        className="mb-3"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">News Daily</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <>
                {user?.uid ? (
                  <>
                    <span className="text-white py-2 fw-bold">
                      {" "}
                      {user?.displayName}
                    </span>
                    <Button
                      className="mx-4"
                      variant="light"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <div className="fw-bold ">
                    <Link
                      className="me-2 text-white text-decoration-none "
                      to="/login"
                    >
                      Login
                    </Link>
                    <Link
                      className="me-2 text-white text-decoration-none"
                      to="/register"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </>
              <Link to="/profile" className="py-2">
                {user?.photoURL ? (
                  <Image
                    style={{ height: "30px", width: "30px" }}
                    roundedCircle
                    src={user.photoURL}
                  ></Image>
                ) : (
                  <FaUser className=" ms-2 text-white "></FaUser>
                )}
              </Link>
            </Nav>
            <div className="d-lg-none">
              <LeftsideNav />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
