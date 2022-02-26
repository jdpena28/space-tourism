import React from "react";
import Link from "next/link";
import { nanoid } from "nanoid";

const Linktabs: React.FC<LinktabsProps> = ({ text }) => {
  return (
    <Link href="/destination/moon">
      <span className="cursor-pointer py-2 text-navText text-highlight hover:border-b-2 hover:border-gray-400">
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
        return <Linktabs text={i} />;
      })}
    </div>
  );
};

export default Tabs;
