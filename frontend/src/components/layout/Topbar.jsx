import { useAuth } from '../../context/AuthProvider';

export default function Topbar() {
  const { user, logout } = useAuth();
  return (
    <div className="flex justify-between items-center p-4 bg-white border-b">
      <div className="font-bold">Medical Dashboard</div>
      <div className="flex items-center gap-4">
        <div>{user?.name}</div>
        <button onClick={logout} className="px-3 py-1 rounded bg-red-500 text-white">Logout</button>
      </div>
    </div>
  );
}
