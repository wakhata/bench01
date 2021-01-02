import React from "react";
import "./App.css";
import { Layout, Avatar, Menu, Breadcrumb } from "antd";
import Title from "antd/lib/typography/Title";
import SubMenu from "antd/lib/menu/SubMenu";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className='App'>
      <Layout>
        <Header style={{ padding: 10 }}>
          <Avatar style={{ float: "right" }} src='./user.png' />
          <Title style={{ color: "white" }} level={3}>
            Bench
          </Title>
        </Header>
        <Layout>
          <Sider>
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
                Content
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

export default App;
