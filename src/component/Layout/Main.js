import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import "../Pages/Shared/LeftsideNav/LeftsideNav";
import LeftsideNav from "../Pages/Shared/LeftsideNav/LeftsideNav";
import RightsideNav from "../Pages/Shared/RightsideNav/RightsideNav";
import Footer from "../Pages/Shared/Footer/Footer";
const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="2" className="d-none d-lg-block">
            <LeftsideNav></LeftsideNav>
          </Col>

          <Col lg="7">
            <Outlet />
          </Col>

          <Col lg="3">
            <RightsideNav></RightsideNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
