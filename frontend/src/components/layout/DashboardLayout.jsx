import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { useAuth } from '../../context/AuthProvider';

export default function DashboardLayout({children}) {
  const { user } = useAuth();
  const role = user?.role || 'patient';
  return (
    <div className="min-h-screen bg-gray-50">
      <Topbar />
      <div className="flex">
        <Sidebar role={role} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
