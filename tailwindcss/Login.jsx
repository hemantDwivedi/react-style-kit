import React from 'react';

const LoginForm = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
            <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your password" />
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="rememberMe" name="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-gray-700 font-semibold">Remember me</label>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Login</button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-600">Don't have an account? </span>
          <a className="text-blue-500 hover:underline cursor-pointer">Register here</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
