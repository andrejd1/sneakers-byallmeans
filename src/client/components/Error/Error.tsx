import React from "react";
import Typography from "../Typography/Typography";
import { ErrorProps } from "./Error.types";
import Container from "../Container/Container";

const Error = ({ title, message }: ErrorProps) => {
  return (
    <Container>
      <Typography variant={"h1"}>{title}</Typography>
      <Typography variant={"h3"}>{message}</Typography>
    </Container>
  );
};

export default Error;
