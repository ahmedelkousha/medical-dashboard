import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
    UserOutlined,
    SettingOutlined,
    CalendarOutlined,
    FieldTimeOutlined,
    CreditCardOutlined,
    FileTextOutlined,
    AppstoreOutlined,
    SearchOutlined,
} from "@ant-design/icons";
import ProfileDropdown from "./Profile";
import Statistics from "./Statistics";

const { Sider, Content, Header } = Layout;

function Overview() {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedKey, setSelectedKey] = useState('1')
    const newLocal = "light";

    return (
        <Layout style={{ minHeight: "100vh" }}>
            {/* Sidebar */}
            <Sider
                collapsible
                collapsed={collapsed}
                style={{ background: "white" }}
                onCollapse={(value) => setCollapsed(value)}
                trigger={null}
                breakpoint="md"
            >
                <div
                    style={{
                        textAlign: "center",
                        padding: "10px 0",
                        marginRight: "0px",
                        background: "white", // لون الخلفية متناسق مع Sider
                    }}
                >
                    <img
                        src="/src/images/OIP.webp" // رابط الصورة عندك
                        alt="Logo"
                        style={{
                            width: collapsed ? 40 : 60, // حجم صغير مع collapse
                            height: "auto",
                            display: "block",
                            margin: "0 auto",
                        }}
                    />
                </div>

                <Menu
                    className="custom-menu"
                    theme="light"
                    selectedKeys={[selectedKey]}
                    mode="inline"
                    onClick={(e) => setSelectedKey(e.key)}
                >
                    <Menu.Item key="1" icon={<AppstoreOutlined />}>
                        Overview
                    </Menu.Item>
                    <Menu.Item key="2" icon={<CalendarOutlined />}>
                        Appointment
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UserOutlined />}>
                        My Pateints
                    </Menu.Item>
                    <Menu.Item key="4" icon={<FieldTimeOutlined />}>
                        Schedule Timings
                    </Menu.Item>
                    <Menu.Item key="5" icon={<UserOutlined />}>
                        Payments
                    </Menu.Item>
                    <Menu.Item key="6" icon={<CreditCardOutlined />}>
                        Message
                    </Menu.Item>
                    <Menu.Item key="7" icon={<FileTextOutlined />}>
                        Blog
                    </Menu.Item>
                    <Menu.Item key="8" icon={<SettingOutlined />}>
                        Settings
                    </Menu.Item>
                </Menu>
            </Sider>

            {/* Page Content */}
            <Layout>
                <Content style={{ padding: 0 }}>
                    <div className="flex justify-between items-center px-4 py-2">
                        <div className="relative flex-1 max-w-md">
                            <SearchOutlined className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg cursor-pointer" />
                            <input
                                type="text"
                                placeholder="Search Appointment, Patients or etc"
                                className="pl-10 pr-3 py-2 rounded-md outline-none bg-gray-100 w-full"
                            />
                        </div>
                        <div className="ml-4">
                            <ProfileDropdown />
                        </div>
                    </div>
                </Content>

                <Content style={{ margin: "40px" }}>
                    <Statistics />
                </Content>
                <Content style={{ margin: "16px" }}>
                    <h2>Main content goes here!</h2>
                </Content>
            </Layout>
        </Layout>
    );
}

export default Overview;
