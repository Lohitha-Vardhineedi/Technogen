import { LayoutDashboard } from "lucide-react";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import React from "react";

const About: React.FC = () => {
  return (
    <div className="w-full min-h-screen h-100 pt-16 px-16 bg-[#0f1544] relative">
      <div className="h-100">
        <div className="flex items-center gap-3 mb-6">
          <TbLayoutDashboardFilled className="text-emerald-400 flex "  size={30} />
          <h2 className="text-white text-4xl font-bold text-left tracking-wider">About Us</h2>
        </div>

        <div className="relative z-50">
          <img
            src="https://media.istockphoto.com/id/1485939448/photo/data-processing-digital-technology-software-development-concept-computer-programmer-software.jpg?s=612x612&w=0&k=20&c=AMaqBgU79i_uPbJmGzoO9b_RoLwYpGwCaJsnTAsNPaY="
            alt="Banner Image"
            className="w-full rounded-2xl object-cover h-full"
          />

          <div className="absolute -top-8 -right-6 w-28 h-28 rounded-full bg-[#ff4f88] shadow-lg flex items-center justify-center ">
            <div className="w-18 h-18 rounded-full bg-white  flex items-center justify-center">
              <div className="w-7 h-7 rounded-full bg-[#00cda9]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white h-44 absolute  left-0 right-0 "></div>
    </div>
  );
};

export default About;