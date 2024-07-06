import React from "react";

const Button = () => {
  return (
    <div className="my-5">
      <button className="w-full flex flex-row h-14 items-center px-4 justify-between rounded-full font-semibold text-black bg-white hover:shadow-lg hover:shadow-blue-400">
        Add to cart
        <img src="/heart.png" alt="" className="w-5 h-5 " />
      </button>
    </div>
  );
};

export default Button;
