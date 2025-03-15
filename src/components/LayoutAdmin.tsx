import React, { useState } from "react";
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Sider } = Layout;

type LayoutAdminProps = {
    children: React.ReactNode;
}

const LayoutAdmin = ({ children }: LayoutAdminProps) => {
    const[isAuthenticated, setIsAuthenticated] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout className="h-screen">
            <Sider trigger={null} collapsible collapsed={isAuthenticated}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    items={[
                        {
                            key: "1",
                            icon: <UserOutlined />,
                            label: <Link to="/admin/dashboard">Dashboard</Link>,
                        },
                        {
                            key: "2",
                            icon: <VideoCameraOutlined />,
                            label: <Link to="/admin/milkteas">Products</Link>,
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={isAuthenticated ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setIsAuthenticated(!isAuthenticated)}
                        style={{
                            fontSize: "16px",
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
}
export default LayoutAdmin;
