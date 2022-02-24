import Navbar from "@/components/Navbar";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  return (
    <section
      id="home"
      className="h-screen w-full bg-cover font-primary text-white">
      <NextSeo
        title="Space Tourism Website"
        description="Next.js Boilerplate configuration with Eslint, Prettier and Husky"
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/assets/favicon-32x32.png",
          },
        ]}
      />
      <Navbar />
      <div className="container mx-auto" />
    </section>
  );
};

export default Home;
