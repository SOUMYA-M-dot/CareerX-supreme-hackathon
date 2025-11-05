import React, { useState } from 'react';
import { Eye, EyeOff, X } from 'lucide-react';

// Utility component for displaying temporary messages (replaces alert())
const Notification = ({ message, type, onClose }) => {
  if (!message) return null;

  const baseClasses = "fixed top-4 right-4 p-4 rounded-lg shadow-xl flex items-center transition-all duration-300 transform";
  const typeClasses = {
    success: "bg-green-600 text-white",
    info: "bg-blue-600 text-white",
    error: "bg-red-600 text-white",
  }[type] || "bg-gray-600 text-white";

  return (
    <div className={`${baseClasses} ${typeClasses} translate-y-0 opacity-100 z-50`}>
      <p className="mr-4 text-sm font-medium">{message}</p>
      <button onClick={onClose} className="p-1 rounded-full hover:bg-black/10">
        <X size={16} />
      </button>
    </div>
  );
};

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [notification, setNotification] = useState({ message: '', type: '' });

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    // Hide notification after 3 seconds
    setTimeout(() => setNotification({ message: '', type: '' }), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Replaced alert with custom notification
    showNotification(`Account created for ${formData.email}`, 'success');
  };

  const handleGoogleSignIn = () => {
    showNotification('Google sign in functionality is not implemented.', 'info');
  };

  const handleGithubSignIn = () => {
    showNotification('Github sign in functionality is not implemented.', 'info');
  };

  // Input common styling
  const inputStyle = "w-full bg-neutral-900 text-white rounded-lg px-4 py-3 placeholder-gray-500 focus:ring-1 focus:ring-white focus:outline-none border-none shadow-md transition-all duration-300 ease-in-out focus:scale-105 hover:scale-105";

  // Button common styling
  const socialButtonStyle = "flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all duration-300 ease-in-out focus:scale-105 hover:scale-105 border border-white/20 hover:border-white text-white bg-black/50 hover:bg-white/5 shadow-lg";

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 font-['Inter']">
      <Notification
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: '', type: '' })}
      />
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">Sign Up Account</h1>
          <p className="text-gray-400 text-sm">Enter your personal data to create your account.</p>
        </div>

        <div className="space-y-4">
          {/* Social Sign In Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              onClick={handleGoogleSignIn}
              className={socialButtonStyle}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true" role="img">
                {/* Google Icon SVG (simplified for better styling consistency) */}
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </button>

            <button
              onClick={handleGithubSignIn}
              className={socialButtonStyle}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" role="img">
                {/* Github Icon SVG */}
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Github
            </button>
          </div>

          {/* OR Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-black text-gray-400">or</span>
            </div>
          </div>

          {/* Name Inputs */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="enter First Name"
                value={formData.firstName}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                placeholder="enter last name"
                value={formData.lastName}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="eg. johnfrancisco@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className={inputStyle}
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className={`${inputStyle} pr-12`}
              />
              <button
                type="button" // Use type="button" to prevent form submission
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-all duration-300 ease-in-out focus:scale-125 hover:scale-125"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <p className="text-gray-500 text-xs mt-2">Must be at least 8 characters.</p>
          </div>

          {/* Sign Up Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-white hover:bg-gray-100 text-black font-bold py-3 px-4 rounded-lg shadow-xl transition-all duration-300 ease-in-out focus:scale-110 hover:scale-110 mt-6"
          >
            Sign Up
          </button>

          {/* Footer Link */}
          <p className="text-center text-gray-400 text-sm pt-4">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-white hover:underline font-medium cursor-pointer transition-all duration-200"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
