import Navbar from "@/components/Navbar";
import { NextSeo } from "next-seo";
import React from "react";

const Layout: React.FC<LayoutProps> = ({ children, id, className }) => {
  return (
    <section id={id} className="h-screen bg-cover font-primary text-white">
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
      <div className={`${className}`}>{children}</div>
    </section>
  );
};

export default Layout;
