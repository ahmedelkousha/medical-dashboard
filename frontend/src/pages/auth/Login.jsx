import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

export default function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const { login } = useAuth();
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = await login(email, password);
      nav(user.role === "admin" ? "/admin" : `/${user.role}`);
    } catch (err) { alert(err.response?.data?.message || err.message) }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={submit} className="p-6 bg-white rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4">Sign in</h2>
        <input className="w-full mb-2 p-2 border" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="w-full mb-4 p-2 border" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
      </form>
    </div>
  );
}
