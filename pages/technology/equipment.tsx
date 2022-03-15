import Slider from "@/components/Slider";
import Subheading from "@/components/Subheading";
import Layout from "@/layout/Layout";
import Image from "next/image";
import React from "react";

const Equipment = () => {
  return (
    <Layout id="technology">
      <div className="container m-auto flex h-full flex-col justify-around py-2 pt-24 text-center lg:text-left">
        <Subheading
          num="03"
          text="SPACE LAUNCH 101"
          className="text-center  md:text-left"
        />
        <div className="lg:flex lg:flex-row-reverse lg:items-center">
          <div className="my-5 lg:hidden">
            <Image
              src="/assets/technology/image-launch-vehicle-landscape.jpg"
              width={768}
              height={310}
            />
          </div>
          <div className="my-5 hidden lg:block">
            <Image
              src="/assets/technology/image-launch-vehicle-portrait.jpg"
              width={486}
              height={496}
            />
          </div>
          <div className="w-full space-y-5 lg:flex lg:items-center lg:gap-x-9">
            <Slider />
            <div className="lg:space-y-1">
              <p className="font-secondary text-subheading2 text-highlight">
                THE TERMINOLOGY ...
              </p>
              <h3 className="text-subheading1 uppercase lg:text-heading3">
                Launch Vehicle
              </h3>
              <p className="mx-auto w-[80%] font-tertiary text-highlight lg:m-0 lg:w-[50%] lg:text-lg">
                A launch vehicle or carrier rocket is a rocket-propelled vehicle
                used to carry a payload from Earth&apos;s surface to space,
                usually to Earth orbit or beyond. Our WEB-X carrier rocket is
                the most powerful in operation. Standing 150 metres tall,
                it&aspos;s quite an awe-inspiring sight on the launch pad!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Equipment;
