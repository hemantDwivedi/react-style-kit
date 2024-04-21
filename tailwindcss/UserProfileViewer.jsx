import React from 'react';

const UserProfileViewer = ({ user }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen">
      <div className="bg-white p-8 rounded-md shadow-lg max-w-lg w-full">
        <div className="flex flex-col items-center">
          <img src={user.avatar} alt="User Avatar" className="w-32 h-32 rounded-full mb-4 border-4 border-indigo-500" />
          <h2 className="text-3xl font-semibold text-gray-800">{user.name}</h2>
          <p className="text-lg text-gray-600">{user.email}</p>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">User Details</h3>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between">
              <p className="text-gray-700 font-semibold">Username:</p>
              <p className="text-gray-800">{user.username}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700 font-semibold">Location:</p>
              <p className="text-gray-800">{user.location}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700 font-semibold">Bio:</p>
              <p className="text-gray-800">{user.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileViewer;