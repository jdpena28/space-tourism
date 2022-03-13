import Layout from "@/layout/Layout";
import Subheading from "@/components/Subheading";
import React from "react";
import Image from "next/image";
import Tabs from "@/components/Tabs";

const planet = () => {
  return (
    <Layout id="planet">
      <div className="container m-auto flex h-full flex-col justify-around py-2 pt-24 text-center">
        <Subheading
          num="01"
          text="PICK YOUR DESTINATION"
          className="text-center"
        />
        <div className="mb-4 px-6">
          <Image
            src="/assets/destination/image-moon.webp"
            width={445}
            height={445}
          />
        </div>
        <div className="flex flex-col gap-y-5">
          <Tabs />
          <h3 className="text-heading3 uppercase">Moon</h3>
          <p className="mx-auto w-[80%] text-center font-tertiary leading-7 md:w-[70%]">
            See our planet as you&apos;ve never seen it before. A perfect
            relaxing trip away to help regain perspective and come back
            refreshed. While you&apos;re there, take in some history by visiting
            the Luna 2 and Apollo 11 landing sites.
          </p>
          <div className="mx-auto h-[2px] w-[97%] bg-[#383B4B]  md:w-[70%] " />
          {/* Planet Metrics */}
          <div className="flex flex-col justify-around gap-y-5 md:flex-row">
            <div>
              <p className="font-secondary text-highlight">AVG. DISTANCE</p>
              <p className="text-subheading1">384,400 KM</p>
            </div>
            <div>
              <p className="font-secondary text-highlight">EST. TRAVEL TIME</p>
              <p className="text-subheading1">3 DAYS</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default planet;
