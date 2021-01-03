import React from "react";
import "./App.css";
import { Layout, Avatar, Menu, Breadcrumb } from "antd";
import Title from "antd/lib/typography/Title";
import SubMenu from "antd/lib/menu/SubMenu";
import Dashboard from "./Dashboard";

const { Header, Footer, Sider, Content } = Layout;

export default function App() {
  return (
    <div className='App'>
      <Layout>
        <Header style={{ background: "#80d0c7", padding: 10 }}>
          <Avatar style={{ float: "right" }} src='./assets/user2.jpg' />
          <Title style={{ color: "white" }} level={3}>
            Starecon
          </Title>
        </Header>
        <Layout>
          <Sider style={{ background: "#596164" }}>
            <Menu defaultSelectedKeys={["1"]} mode='inline'>
              <Menu.Item key='Dashboard'>Dashboard</Menu.Item>
              <SubMenu
                title={
                  <span>
                    <span>About US</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='Aboutus'>
                  <Menu.Item key='Item1'>Item 1</Menu.Item>
                  <Menu.Item key='Item2'>Item 2</Menu.Item>
                  <Menu.Item key='Item3'>Item 3</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>

              <Menu.Item key='Users'>Users</Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: "#fff", padding: 20, minHeight: 580 }}>
                <Dashboard />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              UCLA Bench Created by Wakhata
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}
