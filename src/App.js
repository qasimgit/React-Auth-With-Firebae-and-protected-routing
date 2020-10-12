import React from "react";
import "./App.css";
import { SignUp } from "./components/SignUp";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./Context/AuthContext";
function App() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "500px" }}>
          <SignUp />
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
