import React from "react";
import Link from "next/link";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";

const Linktabs: React.FC<LinktabsProps> = ({ text, routes }) => {
  const { asPath } = useRouter();
  return (
    <Link href={`/destination/${routes}`}>
      <span
        className={`cursor-pointer py-2 text-navText text-highlight hover:border-b-2 hover:border-gray-400 ${
          asPath === `/destination/${routes}` ? "border-b-2 border-white" : ""
        }`}>
        {text}
      </span>
    </Link>
  );
};

const Tabs = () => {
  const data: string[] = ["MOON", "MARS", "EUROPA", "TITAN"];
  return (
    <div className="space-x-4 font-secondary">
      {data.map((i: string) => {
        return <Linktabs key={nanoid()} text={i} routes={i.toLowerCase()} />;
      })}
    </div>
  );
};

export default Tabs;
