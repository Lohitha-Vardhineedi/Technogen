import React from "react";

interface Props {
  title: string;
  center?: boolean;
}

const InfoContent: React.FC<Props> = ({ title, center }) => {
  return (
    <h2
      className={`text-3xl md:text-4xl font-bold text-white tracking-wide mb-6 ${
        center ? "text-center" : "text-left"
      }`}
    >
      {title}
    </h2>
  );
};

export default InfoContent;
