import React, { useState } from "react";

import { Row, Col, Card, Icon, Drawer } from "antd";

import Menu from "../apps/menu";
import Order from "../apps/order";
import User from "../apps/user";
import Report from "../apps/report";
import { Switch, Route, withRouter } from "react-router-dom";

import "./home.css";

const gridStyle = {
  width: "100%",
  height: "20vh",
  marginBottom: "10%",
  display: "flex",
  alignItems: "center"
};

const routes = [
  {
    path: "/menu",
    content: "Manage Menu",
    icon: "bars",
    component: Menu
  },
  {
    path: "/order",
    content: "Manage Order",
    icon: "shopping-cart",
    component: Order
  },
  {
    path: "/user",
    content: "Manage User",
    icon: "user",
    component: User
  },
  {
    path: "/report",
    content: "Report",
    icon: "file-done",
    component: Report
  }
];

function Home(props) {
  const [visible, setVisible] = useState(false);

  function showDrawer(path) {
    props.history.push(path);
    setVisible(true);
  }

  function onClose() {
    setVisible(false);
  }
  return (
    <Row style={{ height: "calc(100vh - 60px)" }}>
      <Card
        title="Quick actions"
        bordered={false}
        headStyle={{
          border: 0,
          margin: 0
        }}
      >
        {routes.map((item, i) => (
          <Col
            key={i}
            xs={{ span: 10, offset: 1 }}
            sm={{ span: 10, offset: 1 }}
            md={{ span: 10, offset: 1 }}
            lg={{ span: 4, offset: 1 }}
            onClick={() => showDrawer(item.path)}
          >
            <Card.Grid style={gridStyle}>
              {item.content}
              <Icon
                style={{
                  paddingLeft: "10px"
                }}
                type={item.icon}
              />
            </Card.Grid>
          </Col>
        ))}
      </Card>

      <Drawer
        title="Basic Drawer"
        width={"100%"}
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        <Switch>
          {routes.map((item, i) => (
            <Route key={i} path={item.path} component={item.component} />
          ))}
        </Switch>
      </Drawer>
    </Row>
  );
}

export default withRouter(Home);
