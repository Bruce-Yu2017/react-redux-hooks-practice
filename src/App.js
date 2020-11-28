import React, { useState } from "react";
import MyTable from "./components/MyTable";
import Message from "./components/Message";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const App = () => {
  const [message, setMessage] = useState("");
  return (
    <div>
      <Container className="mt-3">
        <Message />
        <MyTable updateMsg={setMessage} />
      </Container>
    </div>
  );
};

export default App;
