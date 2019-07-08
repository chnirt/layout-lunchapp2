import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "antd/dist/antd.css";

import { Tabs } from "antd";

import User from "./user";
import Home from "./home";
import { BrowserRouter } from "react-router-dom";

const { TabPane } = Tabs;

function App() {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Home" key="1">
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </TabPane>
      <TabPane tab="User" key="2">
        <User />
      </TabPane>
    </Tabs>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
