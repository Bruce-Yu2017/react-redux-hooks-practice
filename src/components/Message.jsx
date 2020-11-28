import React from "react";
import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";

const Message = () => {
  const { message } = useSelector((state) => state);
  return <div>{message && <Alert variant="info">{message}</Alert>}</div>;
};

export default Message;
