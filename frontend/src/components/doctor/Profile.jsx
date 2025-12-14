import React from "react";
import { Dropdown, Avatar } from "antd";
import { DownOutlined, QuestionCircleOutlined, BellOutlined } from "@ant-design/icons";

const items = [
    { key: "1", label: "Profile" },
    { key: "2", label: "Settings" },
    { type: "divider" },
    { key: "3", label: "Logout" },
];

function ProfileDropdown() {
    return (
        <div className="flex justify-end items-center space-x-4 p-4">
            {/* أيقونات السؤال والتنبيه */}
            <QuestionCircleOutlined className="text-gray-500 text-lg cursor-pointer" />
            <BellOutlined className="text-gray-500 text-lg cursor-pointer relative">
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
            </BellOutlined>

            {/* Dropdown للـ Avatar */}
            <Dropdown menu={{ items }} placement="bottomRight" arrow>
                <div className="flex items-center cursor-pointer space-x-2">
                    <Avatar src="/src/images/OIP (1).webp" size={40} />
                    <div className="text-right">
                        <p className="font-semibold text-gray-700 mb-0 whitespace-nowrap">Stephen Conley</p>
                        <p className="text-sm text-gray-400 mb-0">Cardiologist</p>
                    </div>
                    <DownOutlined className="text-gray-500" />
                </div>
            </Dropdown>
        </div>
    );
}

export default ProfileDropdown;
