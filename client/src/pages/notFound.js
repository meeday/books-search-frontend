import React from "react";
import { Col, Row, Container } from "../components/grid";
import Jumbotron from "../components/jumbotron";

export default function NotFound() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center"> 404 Page Not Found</h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}
