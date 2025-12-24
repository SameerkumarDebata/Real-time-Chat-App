      
import React from "react";

const User = () => {
  return (
    <div className="flex items-center gap-3 p-2 hover:bg-gray-400 rounded cursor-pointer">
      
      {/* Avatar */}
      <div className="avatar avatar-offline">
        <div className="w-12 rounded-full">
          <img
            src="https://img.daisyui.com/images/profile/demo/idiotsandwich@192.webp"
            alt="user"
          />
        </div>
      </div>

      {/* User Info */}
      <div>
        <h2 className="font-semibold line-clamp-1">Full Name</h2>
        <p className="text-sm text-gray-600">Username</p>
      </div>

    </div>
  );
};

export default User;

