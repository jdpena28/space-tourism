import React from "react";

const Subheading: React.FC<SubheadingProps> = ({ num, text }) => {
  return (
    <div>
      <p className="mb-6 font-secondary text-heading5">
        <span className="font-bold text-slate-500">{num}</span>&ensp;{text}
      </p>
    </div>
  );
};

export default Subheading;
