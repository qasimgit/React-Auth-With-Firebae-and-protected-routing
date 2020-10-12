import React from "react";
import { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";

export const SignUp = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const passConfRef = useRef();
  const { signup } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();

    signup(emailRef.current.value, passRef.current.value);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passRef} required />
            </Form.Group>
            <Form.Group id="passwordConf">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passConfRef} required />
            </Form.Group>
            <Button className="w-100 mt-4">Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already Hava an account? Log In
      </div>
    </>
  );
};
