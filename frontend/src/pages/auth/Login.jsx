import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

/**
 * Login Component
 * 
 * Provides a user authentication interface for the medical dashboard application.
 * Handles user login functionality and redirects based on user role after successful authentication.
 * 
 * Features:
 * - Email and password input fields
 * - Form submission with validation
 * - Role-based navigation after login
 * - Error handling with user-friendly alerts
 */
export default function Login() {
  // State management for form inputs
  const [email, setEmail] = useState("");        // Stores the user's email input
  const [password, setPassword] = useState("");  // Stores the user's password input
  
  // Auth context hook to access login function
  const { login } = useAuth();
  
  // React Router hook for programmatic navigation
  const nav = useNavigate();

  /**
   * Handles form submission and user authentication
   * 
   * @param {Event} e - Form submission event
   * 
   * Process:
   * 1. Prevents default form submission behavior
   * 2. Attempts to authenticate user with provided credentials
   * 3. Navigates to role-specific dashboard on success:
   *    - Admin users → /admin
   *    - Other roles → /{role} (e.g., /patient, /doctor)
   * 4. Displays error message if authentication fails
   */
  const submit = async (e) => {
    e.preventDefault(); // Prevent page refresh on form submission
    
    try {
      // Attempt to authenticate user with email and password
      const user = await login(email, password);
      
      // Navigate to appropriate dashboard based on user role
      // Admin users go to /admin, others go to their role-specific path
      nav(user.role === "admin" ? "/admin" : `/${user.role}`);
    } catch (err) {
      // Display error message from API response or generic error message
      alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={submit} className="p-6 bg-white rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4">Sign in</h2>
        
        {/* Email input field */}
        <input 
          className="w-full mb-2 p-2 border" 
          placeholder="Email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
        />
        
        {/* Password input field (masked for security) */}
        <input 
          className="w-full mb-4 p-2 border" 
          placeholder="Password" 
          type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
        />
        
        {/* Submit button to trigger authentication */}
        <button className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
      </form>
    </div>
  );
}
