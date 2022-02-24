import Layout from "@/layout/Layout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout id="home">
      <div className="fixed bottom-8 flex w-full items-center justify-around">
        <div>
          <p className="font-secondary text-heading5  text-highlight">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 className="text-heading1 ">SPACE</h1>
          <p className="w-[24.6rem] font-tertiary text-highlight">
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </p>
        </div>
        <div className="h-72 w-72 rounded-full  bg-white text-center leading-[18rem] ring-gray-400/50 transition duration-300 ease-in-out hover:ring-[40px] ">
          <span className="text-heading4 text-black">EXPLORE</span>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
