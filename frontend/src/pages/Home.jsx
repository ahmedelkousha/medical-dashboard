import React from "react";
import { Link } from "react-router-dom";
import { 
  Home as HomeIcon, 
  User, 
  Users, 
  Calendar, 
  FileText, 
  Stethoscope, 
  Clock, 
  Settings,
  LogIn,
  LayoutDashboard,
  Activity
} from "lucide-react";

/**
 * Home Component
 * 
 * Displays a modern homepage with a comprehensive table of all available routes
 * in the medical dashboard application. Organized by user roles (Patient, Doctor, Admin)
 * with icons and descriptions for better navigation.
 */
export default function Home() {

  const routes = [
    {
      role: "Authentication",
      routes: [
        {
          path: "/login",
          name: "Login",
          description: "User authentication page",
          icon: LogIn,
          color: "bg-blue-500"
        }
      ]
    },
    {
      role: "Patient",
      routes: [
        {
          path: "/",
          name: "Dashboard",
          description: "Patient main dashboard",
          icon: LayoutDashboard,
          color: "bg-green-500"
        },
        {
          path: "/patient",
          name: "Patient Dashboard",
          description: "Patient dashboard overview",
          icon: LayoutDashboard,
          color: "bg-green-500"
        },
        {
          path: "/patient/appointments",
          name: "Appointments",
          description: "View and manage appointments",
          icon: Calendar,
          color: "bg-blue-500"
        },
        {
          path: "/patient/doctors",
          name: "Doctors",
          description: "Browse available doctors",
          icon: Stethoscope,
          color: "bg-purple-500"
        },
        {
          path: "/patient/records",
          name: "Medical Records",
          description: "View medical records and history",
          icon: FileText,
          color: "bg-red-500"
        }
      ]
    },
    {
      role: "Doctor",
      routes: [
        {
          path: "/doctor",
          name: "Doctor Dashboard",
          description: "Doctor main dashboard",
          icon: LayoutDashboard,
          color: "bg-indigo-500"
        },
        {
          path: "/doctor/schedule",
          name: "Schedule Timings",
          description: "Manage appointment schedule",
          icon: Clock,
          color: "bg-yellow-500"
        },
        {
          path: "/doctor/patients",
          name: "Patients",
          description: "View and manage patient list",
          icon: Users,
          color: "bg-teal-500"
        }
      ]
    },
    {
      role: "Admin",
      routes: [
        {
          path: "/admin",
          name: "Admin Dashboard",
          description: "Administrator main dashboard",
          icon: LayoutDashboard,
          color: "bg-red-500"
        },
        {
          path: "/admin/users",
          name: "Users Management",
          description: "Manage all system users",
          icon: User,
          color: "bg-orange-500"
        },
        {
          path: "/admin/appointments",
          name: "Appointments",
          description: "Manage all appointments",
          icon: Calendar,
          color: "bg-pink-500"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50">
      {/* Header Section */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Medical Dashboard</h1>
              <p className="text-gray-600 mt-1">Route Navigation & Documentation</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Medical Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore all available routes and navigate through the application with ease.
            Click on any route to navigate directly.
          </p>
        </div>

        {/* Routes Table by Role */}
        <div className="space-y-8">
          {routes.map((roleGroup, roleIndex) => (
            <div key={roleIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Role Header */}
              <div className={`bg-linear-to-r ${
                roleGroup.role === "Patient" ? "from-green-500 to-emerald-600" :
                roleGroup.role === "Doctor" ? "from-indigo-500 to-blue-600" :
                roleGroup.role === "Admin" ? "from-red-500 to-rose-600" :
                "from-blue-500 to-cyan-600"
              } px-6 py-4`}>
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <HomeIcon className="w-6 h-6" />
                  {roleGroup.role} Routes
                </h3>
                <p className="text-blue-100 mt-1">
                  {roleGroup.routes.length} {roleGroup.routes.length === 1 ? "route" : "routes"} available
                </p>
              </div>

              {/* Routes Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Route
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {roleGroup.routes.map((route, routeIndex) => {
                      const IconComponent = route.icon;
                      return (
                        <tr 
                          key={routeIndex}
                          className="hover:bg-gray-50 transition-colors duration-150"
                        >
                          {/* Route Path */}
                          <td className="px-6 py-4 whitespace-nowrap">
                            <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded text-blue-600">
                              {route.path}
                            </code>
                          </td>
                          
                          {/* Route Name with Icon */}
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-3">
                              <div className={`${route.color} p-2 rounded-lg`}>
                                <IconComponent className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-sm font-semibold text-gray-900">
                                {route.name}
                              </span>
                            </div>
                          </td>
                          
                          {/* Description */}
                          <td className="px-6 py-4">
                            <span className="text-sm text-gray-600">
                              {route.description}
                            </span>
                          </td>
                          
                          {/* Action Button */}
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Link
                              to={route.path}
                              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-150 shadow-sm hover:shadow-md"
                            >
                              <Activity className="w-4 h-4" />
                              Navigate
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="mt-12 bg-linear-to-r from-purple-500 to-pink-500 rounded-xl shadow-xl p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Quick Stats</h3>
              <p className="text-purple-100">
                Total Routes: {routes.reduce((sum, group) => sum + group.routes.length, 0)}
              </p>
              <p className="text-purple-100">
                Roles: {routes.length}
              </p>
            </div>
            <Settings className="w-16 h-16 text-purple-200" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-white border-t py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>Medical Dashboard Application - Route Documentation</p>
        </div>
      </footer>
    </div>
  );
}

