import React, { useState } from "react";
import { Dropdown, Avatar } from "antd";
import {
    DownOutlined,
    QuestionCircleOutlined,
    BellOutlined,
} from "@ant-design/icons";

const items = [
    { key: "1", label: "Profile" },
    { key: "2", label: "Settings" },
    { type: "divider" },
    { key: "3", label: "Logout" },
];

function ProfileDropdown() {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex justify-end items-center gap-3 sm:gap-4 p-2 sm:p-4">
            {/* أيقونة المساعدة */}
            <QuestionCircleOutlined className="text-gray-500 text-lg sm:text-xl cursor-pointer" />

            {/* أيقونة التنبيه */}
            <div className="relative">
                <BellOutlined className="text-gray-500 text-lg sm:text-xl cursor-pointer" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
            </div>

            {/* Dropdown */}
            <Dropdown open={open} onOpenChange={setOpen} menu={{ items }} placement="bottomRight" arrow>
                <div className="flex items-center cursor-pointer gap-2">
                    <Avatar
                        src="/src/images/OIP (1).webp"
                        size={40}
                        className="sm:w-10 sm:h-10 w-8 h-8"
                    />

                    {/* الاسم والوظيفة (مخفيين في الموبايل) */}
                    <div className="hidden sm:block text-right">
                        <p className="font-semibold text-gray-700 mb-0 whitespace-nowrap">
                            Stephen Conley
                        </p>
                        <p className="text-sm text-gray-400 mb-0">
                            Cardiologist
                        </p>
                    </div>

                    <DownOutlined className={`text-gray-500 hidden sm:block transition-transform duration-200 ${open ? "rotate-180" : ""
                        }`} />
                </div>
            </Dropdown>
        </div>
    );
}

export default ProfileDropdown;
