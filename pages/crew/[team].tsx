import Indicator from "@/components/Indicator";
import Subheading from "@/components/Subheading";
import Layout from "@/layout/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import data from "@/data.json";
import type { NextPage } from "next";
import { teamProps } from "@/types/main";

const Team: NextPage = () => {
  const router = useRouter();
  const [datas, setDatas] = useState<teamProps | undefined>();

  const findTeam = (route: string | string[] | undefined) => {
    return data.crew.find(
      (i) => i.name.replace(" ", "-").toLowerCase() === route
    );
  };

  useEffect(() => {
    setDatas(findTeam(router.query.team));
  }, [router.query.team]);

  return (
    <Layout
      id="team"
      className="containers mx-auto grid h-full w-full grid-cols-2 items-center justify-items-center">
      <div>
        <Subheading num="02" text="MEET YOUR CREW" />
        <p className="text-heading4 uppercase text-white/50">{datas?.role}</p>
        <h3 className="text-heading3 uppercase">{datas?.name}</h3>
        <p className="w-[29rem] font-tertiary text-lg text-highlight">
          {datas?.bio}
        </p>
        <Indicator />
      </div>
      <div className="h-[90%] w-[90%] place-self-end overflow-y-hidden object-contain  2xl:h-full 2xl:w-full">
        <Image
          src={
            datas
              ? datas?.images.webp
              : "/assets/crew/image-douglas-hurley.webp"
          }
          height={datas ? datas?.images.height : 712}
          width={datas ? datas?.images.width : 568}
          layout="responsive"
        />
      </div>
    </Layout>
  );
};

export default Team;
