import Indicator from "@/components/Indicator";
import Subheading from "@/components/Subheading";
import Layout from "@/layout/Layout";
import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <Layout id="planet">
      <div className="container m-auto flex h-full flex-col justify-around py-2 pt-24 text-center lg:text-left">
        <Subheading
          num="02"
          text="MEET YOUR CREW"
          className="ml-12 text-center md:text-left lg:ml-0"
        />
        <div className="items-center md:flex md:flex-col-reverse md:gap-y-20 lg:flex-row-reverse">
          <div className="mx-auto  h-[271px] w-[216px] overflow-hidden md:-mb-32 md:h-[572px] md:w-[456.37px] lg:-mb-8 lg:h-auto lg:w-auto">
            <Image
              src="/assets/crew/image-douglas-hurley.webp"
              width={568.07}
              height={712}
            />
          </div>
          <div className="mt-5 flex flex-col gap-y-5">
            <Indicator />
            <div className="md:order-1">
              <p className="uppercase text-slate-400 md:text-2xl">Commander</p>
              <h3 className="text-subheading1 uppercase md:text-4xl">
                Douglas Hurley
              </h3>
            </div>
            <p className="mx-auto text-center font-tertiary text-highlight md:order-2 md:w-[60%] lg:m-0 lg:text-left">
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
