import React from "react";
import { Button, ButtonGroup, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaTwitch,
  FaWhatsapp,
} from "react-icons/fa";
import BrandCarousal from "../BrandCarousal/BrandCarousal";
const RightsideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle></FaGoogle> Log In WIth Google
        </Button>{" "}
        <Button variant="outline-dark">
          <FaGithub></FaGithub> Log In With Github
        </Button>{" "}
      </ButtonGroup>

      <div>
        <h5>Find Us On</h5>

        <ListGroup className="mb-2" as="ul">
          <ListGroup.Item as="li" active>
            {" "}
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2" as="li">
            <FaWhatsapp /> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2" as="li" disabled>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2" as="li">
            <FaTwitch /> Twitch
          </ListGroup.Item>
          <ListGroup.Item className="mb-2" as="li">
            Terms and conditions
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousal></BrandCarousal>
      </div>
    </div>
  );
};

export default RightsideNav;
