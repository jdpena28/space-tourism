import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Layout from "@/layout/Layout";
import Tabs from "@/components/Tabs";

const moon: NextPage = () => {
  return (
    <Layout
      id="moon"
      className="containers m-auto flex h-full items-center justify-around">
      <div className="mt-8 space-y-6">
        <p className="mb-6 font-secondary text-heading5">
          <span className="font-bold text-slate-500">01</span>&ensp;PICK YOUR
          DESTINATION
        </p>
        <Image
          src="/assets/destination/image-moon.webp"
          height={445}
          width={445}
        />
      </div>
      <div className="">
        <Tabs />
        <h2 className="text-heading2">MOON</h2>
        <p className="w-96 font-tertiary">
          See our planet as you&apos;ve never seen it before. A perfect relaxing
          trip away to help regain perspective and come back refreshed. While
          you&apos;re there, take in some history by visiting the Luna 2 and
          Apollo 11 landing sites.
        </p>
        <div className="mt-12 h-[2px] w-full bg-[#383B4B]" />
        <br />
        <div className="flex gap-x-10 text-subheading1">
          <div>
            <p className="font-secondary text-subheading2">AVG. DISTANCE</p>
            <p>384,400 KM</p>
          </div>
          <div>
            <p className="font-secondary text-subheading2">EST. TRAVEL TIME</p>
            <p> 3 DAYS</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default moon;
