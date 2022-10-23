import { computeHeadingLevel } from "@testing-library/react";
import React, { useContext, useRef, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { AuthContext } from "../../../../../AuthProvider/AuthProvider";

const Profile = () => {
  const { user, updateUser, setUser, loading } = useContext(AuthContext);
  const [userName, setUserName] = useState(user.displayName);
  const photoURLRef = useRef(user.photoURL);

  const handleName = (event) => {
    const name = event.target.value;
    setUserName(name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userName);
    const profile = { displayName: userName };

    updateUser(profile).then((result) => {
      window.location.reload();
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            readOnly
            defaultValue={user.email}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            onChange={handleName}
            defaultValue={user?.displayName}
            type="text"
            placeholder="your name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control
            defaultValue={user?.photoURL}
            type="text"
            placeholder="Photo Url"
            ref={photoURLRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Profile;
