import { CalendarOutlined, MedicineBoxOutlined, UserOutlined } from "@ant-design/icons"

const Statistics = () => {
    return (
        <>

            <div className="mb-10">
                <h1 className="text-3xl font-bold mb-2">Welcome, Dr. stephen</h1>
                <p>Have a nice day at great work </p>
            </div>
            <div className="mb-80 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-purple-400 p-8 rounded-lg text-white flex items-center space-x-3">
                    <div className="p-2 bg-purple-600 rounded-full">
                        {/* أيقونة فيديو */}
                        <CalendarOutlined />
                    </div>
                    <div>
                        <p className="font-bold text-lg">28.0k</p>
                        <p className="text-sm">Appointment</p>
                    </div>
                </div>
                <div className="bg-red-400 p-4 rounded-lg text-white flex items-center space-x-3">
                    <div className="p-2 bg-red-500 rounded-full">
                        {/* أيقونة فيديو */}
                        <UserOutlined />
                    </div>
                    <div>
                        <p className="font-bold text-lg">28.0k</p>
                        <p className="text-sm">Total Patient</p>
                    </div>
                </div>
                <div className="bg-yellow-400 p-4 rounded-lg text-white flex items-center space-x-3">
                    <div className="p-2 bg-yellow-500 rounded-full">
                        {/* أيقونة فيديو */}
                        <MedicineBoxOutlined className="text-x3" />
                    </div>
                    <div>
                        <p className="font-bold text-lg">28.0k</p>
                        <p className="text-sm">clink Consulting</p>
                    </div>
                </div>
                <div className="bg-blue-400 p-4 rounded-lg text-white flex items-center space-x-3">
                    <div className="p-2 bg-blue-500 rounded-full">
                        {/* أيقونة فيديو */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h11a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
                            />
                        </svg>
                    </div>
                    <div>
                        <p className="font-bold text-lg">28.0k</p>
                        <p className="text-sm">Video Consulting</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Statistics