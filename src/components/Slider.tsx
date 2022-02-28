import Link from "next/link";
import data from "@/data.json";
import React from "react";

const SliderLink: React.FC<SliderLinkProps> = ({ route, num }) => {
  return (
    <Link href={route}>
      <div className="h-[80px] w-[80px] cursor-pointer rounded-full border-2 border-gray-400 text-center text-heading4 leading-[80px] hover:border-white">
        {num}
      </div>
    </Link>
  );
};

const Slider = () => {
  return (
    <div className="space-y-4">
      {data.technology.map((item, index) => {
        return (
          <SliderLink
            route={`${item.name.replace(" ", "-").toLowerCase()}`}
            num={index + 1}
          />
        );
      })}
    </div>
  );
};

export default Slider;