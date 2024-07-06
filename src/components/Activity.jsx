import React from "react";

const Activity = ({ customStyles, userName, profilePicture }) => {
  return (
    <div
      className={`absolute px-2 ${customStyles}  z-50  w-[300px] h-20 rounded-full md:flex md:flex-row items-center  justify-start bg-gray-950 border border-white/10 `}
    >
      <div className="w-14 h-14 bg-red-400 rounded-full flex items-center justify-center bg-cover object-cover">
        <img
          src={profilePicture}
          alt=""
          className="w-14 h-14 bg-cover object-cover overflow-auto rounded-full"
        />
      </div>
      <p className="pl-4">
        <strong>{userName}</strong> has liked this item
      </p>
    </div>
  );
};

export default Activity;
