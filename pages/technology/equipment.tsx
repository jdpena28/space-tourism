import Slider from "@/components/Slider";
import Subheading from "@/components/Subheading";
import Layout from "@/layout/Layout";
import type { NextPage } from "next";
import Image from "next/image";
import React from "react";

const Equipment: NextPage = () => {
  return (
    <Layout
      id="technology"
      className="containers mx-auto flex h-full items-center justify-around">
      <div>
        <Subheading num="03" text="SPACE LAUNCH 101" />
        <br /> <br />
        <div className="flex space-x-8">
          <Slider />
          <div>
            <h3 className="font-secondary text-navText text-highlight">
              The Terminology...
            </h3>
            <p className="text-heading3">LAUNCH VEHICLE</p>
            <p className="w-[27rem] font-tertiary text-lg text-highlight">
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth&apos;s surface to space,
              usually to Earth orbit or beyond. Our WEB-X carrier rocket is the
              most powerful in operation. Standing 150 metres tall, it&apos;s
              quite an awe-inspiring sight on the launch pad!
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <Image
          src="/assets/technology/image-launch-vehicle-portrait.jpg"
          width={515}
          height={527}
        />
      </div>
    </Layout>
  );
};

export default Equipment;
