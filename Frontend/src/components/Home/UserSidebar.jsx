import React from "react";
import { IoIosSearch } from "react-icons/io";
import User from "./user";
const UserSidebar = () => {
    return (
        <div className="max-w-[20rem] w-full h-screen flex flex-col">

            {/* Header */}
            <h1 className="text-xl font-bold p-4 bg-[#1e293b] rounded-lg mt-1">ChatApp</h1>

            {/* Search */}
            <div className="p-3">
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="search"
                        className="grow"
                        placeholder="Search"
                    />
                    <IoIosSearch />
                </label>
            </div>

            {/* Chat list */}
            <div className="flex-1 overflow-y-auto px-3 h-full">
                <User />
                <User />
                <User />
                


            </div>

            {/* Footer */}

          <div className="flex items-center justify-between p-3">

  {/* Avatar */}
  <div className="avatar">
    <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
      <img
        src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
        alt="profile"
      />
    </div>
  </div>
  {/* Button */}
  <button className="btn btn-primary btn-sm">Logout</button>
</div>
   </div>
    );
};

export default UserSidebar;




