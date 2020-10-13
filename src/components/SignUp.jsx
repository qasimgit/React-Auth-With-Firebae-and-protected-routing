import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { Button, Card, Form, Alert } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";

export const SignUp = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const passConfRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passRef.current.value !== passConfRef.current.value) {
      return setError("Password Don't match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passRef.current.value);
    } catch {
      setError("failed to create an account");
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
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
            <Button className="w-100 mt-4" disabled={loading}>
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already Hava an account? Log In
      </div>
    </>
  );
};
