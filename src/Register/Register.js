import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const [userError, setuserError] = useState("");
  const [accepted, setAccepted] = useState(false);
  const { createUser, updateUser, varrifyEmail } = useContext(AuthContext);

  const handleUpdate = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUser(profile)
      .then(() => {})
      .catch((er) => {
        console.error(er.message);
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    console.log(email, password, name, photoURL);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setuserError("");
        handleUpdate(name, photoURL);
        handlevarifyEmail();
      })
      .catch((er) => {
        console.error(er.message);
        setuserError(er.message);
      });
  };

  const handleCheck = (event) => {
    setAccepted(event.target.checked);
  };

  const handlevarifyEmail = () => {
    varrifyEmail()
      .then(() => {})
      .catch((er) => {
        console.error(er.message);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control
          name="photoURL"
          type="text"
          placeholder="Enter your photo url"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          onClick={handleCheck}
          label={
            <>
              Accept <Link to="/terms">terms & conditions</Link>
            </>
          }
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!accepted}>
        REGISTER
      </Button>
      <br />
      <Form.Text className="text-danger">{userError}</Form.Text>
    </Form>
  );
};

export default Register;
