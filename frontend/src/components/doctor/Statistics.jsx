import { CalendarOutlined, MedicineBoxOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons"

const Statistics = () => {
    return (
        <>

            <div className="mb-10">
                <h1 className="text-3xl font-bold mb-2">Welcome, Dr. stephen</h1>
                <p>Have a nice day at great work </p>
            </div>
            <div className="mb-80 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                <div className="bg-purple-400 p-8 rounded-lg text-white flex items-center space-x-3">
                    <div className="p-2 bg-purple-500 rounded-full px-4 py-3">
                        {/* أيقونة فيديو */}
                        <CalendarOutlined className="text-[22px]" />
                    </div>
                    <div>
                        <p className="font-bold text-lg">28.0k</p>
                        <p className="text-sm">Appointment</p>
                    </div>
                </div>
                <div className="bg-red-400 p-8 rounded-lg text-white flex items-center space-x-3">
                    <div className="p-2 bg-red-500 rounded-full px-4 py-3">
                        {/* أيقونة فيديو */}
                        <UserOutlined className="text-[22px]"/>
                    </div>
                    <div>
                        <p className="font-bold text-lg">44.0k</p>
                        <p className="text-sm">Total Patient</p>
                    </div>
                </div>
                <div className="bg-yellow-400 p-8 rounded-lg text-white flex items-center space-x-3">
                    <div className="p-2 bg-yellow-500 rounded-full px-4 py-3">
                        {/* أيقونة فيديو */}
                        <MedicineBoxOutlined className="text-[22px]" />
                    </div>
                    <div>
                        <p className="font-bold text-lg">66.0k</p>
                        <p className="text-sm">clink Consulting</p>
                    </div>
                </div>
                <div className="bg-blue-400 p-8 rounded-lg text-white flex items-center space-x-3">
                    <div className="p-2 bg-blue-500 rounded-full px-4 py-3">
                        {/* أيقونة فيديو */}
                        <VideoCameraOutlined className="text-[22px]"/>
                    </div>
                    <div>
                        <p className="font-bold text-lg">57.7k</p>
                        <p className="text-sm">Video Consulting</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Statistics