import React from "react";

const Subheading: React.FC<SubheadingProps> = ({ num, text, className }) => {
  return (
    <div>
      <h2 className={`mb-6 font-secondary text-heading5 lg:mb-0 ${className}`}>
        <span className="font-bold text-slate-500">{num}</span>&ensp;{text}
      </h2>
    </div>
  );
};

export default Subheading;
