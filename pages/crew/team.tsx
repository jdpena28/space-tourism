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
          className="text-center lg:text-left"
        />
        <div>
          <div className="mx-auto  h-[271px] w-[216px]">
            <Image
              src="/assets/crew/image-douglas-hurley.webp"
              width={483}
              height={605}
            />
          </div>
          <div className="mt-5 flex flex-col gap-y-5">
            <Indicator />
            <div>
              <p className="uppercase text-slate-400">Commander</p>
              <h3 className="text-subheading1 uppercase">Douglas Hurley</h3>
            </div>
            <p className="font-tertiary text-highlight">
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
