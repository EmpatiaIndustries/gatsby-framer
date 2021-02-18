import React, { useState } from "react";
import "../styles/index.css";
import { motion } from "framer-motion";
import { Layout, Menu, Card, Row, Col } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const arrayPost = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Index() {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapse) => {
    console.log(collapse);

    setCollapsed(collapse);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, background: "transparent" }}
        />
        <Content style={{ margin: "0 16px" }}>
          <Row>
            <Col span={8} offset={8}>
              {arrayPost.map((index) => {
                return (
                  <motion.div
                    whileTap={{ rotateX: 360, scale: 1.0 }}
                    whileHover={{
                      scale: 1.2,
                      boxShadow: "0px 0px 8px rgb(0,0,0)",
                    }}
                    key={index}
                    style={{ textAlign: "center" }}
                    className="site-card-border-less-wrapper"
                  >
                    <Card
                      bordered={true}
                      style={{
                        width: 600,
                        background: "red",
                        marginTop: "20px",
                      }}
                    >
                      <p>Card content</p>
                      <p>Card content</p>
                      <p>Card content</p>
                    </Card>
                  </motion.div>
                );
              })}
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Index;
