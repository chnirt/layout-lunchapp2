import React from "react";
import { Row, Col, Button } from "antd";

export default function User() {
  return (
    <Row type="flex" justify="center" style={{ height: "100vh" }}>
      <Col
        xs={{ span: 10, offset: 1 }}
        sm={{ span: 10, offset: 1 }}
        md={{ span: 10, offset: 1 }}
        lg={{ span: 4, offset: 1 }}
      >
        Hello, Admin
        <Button type="primary" block>
          Log out
        </Button>
      </Col>
    </Row>
  );
}
