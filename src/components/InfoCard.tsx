import React from "react";

interface InfoCardProps {
  title: string;
  description: string;
  icon: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, icon }) => {
  return (
    <div 
     className="relative bg-[#1e2357] text-white px-8 pb-8 pt-24 shadow-lg border border-white/10 hover:scale-[1.02] transition duration-300 "
 style={{
borderTopRightRadius: "125px",
 }}

  
    >
      <div className="absolute top-0 right-0 bg-white p-3 " style={{
borderBottomLeftRadius: "35px",
 }}>

      <div className=" w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center shadow-md">
        {icon}
      </div>
      </div>

      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

export default InfoCard;
