import React from "react";

const Slider = () => {
  return (
    <div className="space-y-4">
      <div className="h-[80px] w-[80px] cursor-pointer rounded-full border-2 border-gray-400 text-center text-heading4 leading-[80px] hover:border-white">
        1
      </div>
      <div className="h-[80px] w-[80px] cursor-pointer rounded-full border-2 border-gray-400 text-center text-heading4 leading-[80px] hover:border-white">
        2
      </div>
      <div className="h-[80px] w-[80px] cursor-pointer rounded-full border-2 border-gray-400 text-center text-heading4 leading-[80px] hover:border-white">
        3
      </div>
    </div>
  );
};

export default Slider;
