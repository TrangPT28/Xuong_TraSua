import { ReactNode } from "react";import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Link, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const menuItems = [
    { key: 1, label: <Link to="/admin/dashboard">Dashboard</Link>, icon: <UserOutlined /> },
    { key: 2, label: <Link to="/admin/products">Products</Link>, icon: <VideoCameraOutlined /> },
    { key: 3, label: "Users", icon: <UploadOutlined /> },
];

interface LayoutAdminProps {
    children?: ReactNode;
}

const LayoutAdmin: React.FC<LayoutAdminProps> = ({ children }) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout className="h-lvh">
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="demo-logo-vertical" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} items={menuItems} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: "24px 16px 0" }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children || <Outlet />}
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    
                </Footer>
            </Layout>
        </Layout>
    );
};

export default LayoutAdmin;
