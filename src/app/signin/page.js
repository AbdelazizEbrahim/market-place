'use client'
import { signIn } from 'next-auth/react'
import { FaGoogle } from 'react-icons/fa' 

export default function Login() {
  return (
    <div className="max-h-screen bg-gray-100 flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg mt-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
        <form>
          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Login Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>

          {/* Login with Google Button */}
          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={() => signIn('google', { callbackUrl: '/' })}
              className="w-full flex items-center justify-center bg-white text-black border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <FaGoogle className="mr-2 text-lg" />
              Login with Google
            </button>
          </div>

          {/* Forgot Password Link */}
          <div className="text-center">
            <a href="#" className="text-sm text-blue-600 hover:text-blue-800">Forgot your password?</a>
          </div>

          {/* Sign Up Link */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">Do not have an account? <a href="/signup" className="text-blue-600 hover:text-blue-800">Sign Up</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}
