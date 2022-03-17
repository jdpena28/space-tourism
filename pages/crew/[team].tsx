import Indicator from "@/components/Indicator";
import Subheading from "@/components/Subheading";
import Layout from "@/layout/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import data from "@/data.json";
import { teamProps } from "@/types/main";
import React, { useEffect, useState } from "react";

const Team = () => {
  const router = useRouter();
  const [datas, setDatas] = useState<teamProps | undefined>();
  const findCrew = (routes: string | string[] | undefined) => {
    const crewData = data.crew.find((i) => {
      return i.name.replace(" ", "-").toLowerCase() === routes;
    });
    return crewData;
  };
  useEffect(() => {
    setDatas(findCrew(router.query.team));
  }, [router.query.team]);
  return (
    <Layout id="team">
      <div className="container m-auto flex h-full flex-col justify-around py-2 pt-24 text-center lg:text-left">
        <Subheading
          num="02"
          text="MEET YOUR CREW"
          className="text-center md:ml-12 md:text-left lg:fixed lg:top-[20%] lg:ml-0"
        />
        <div className="items-center md:flex md:flex-col-reverse  md:gap-y-20 lg:flex-row-reverse">
          <div className="relative mx-auto h-[39vh] w-full md:h-[59vh]  lg:-mb-14 lg:h-[80vh] 2xl:-mb-44">
            <Image
              src={
                datas
                  ? datas.images.webp
                  : "/assets/crew/image-douglas-hurley.webp"
              }
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="mt-5 flex flex-col  gap-y-5 lg:w-full">
            <Indicator />
            <div className="md:order-1 lg:space-y-5">
              <p className="uppercase text-slate-400 md:text-2xl">
                {datas?.role}
              </p>
              <h3 className="text-subheading1 uppercase md:text-4xl">
                {datas?.name}
              </h3>
            </div>
            <p className="mx-auto w-[80%] text-center font-tertiary text-highlight md:order-2 md:w-[60%]  lg:m-0 lg:text-left">
              {datas?.bio}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
