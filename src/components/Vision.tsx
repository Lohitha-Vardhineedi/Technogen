import React from "react";
import InfoCard from "../components/InfoCard";
import { TbArrowsUp, TbBulb, TbTargetArrow } from "react-icons/tb";
import { FaHandsBound } from "react-icons/fa6";

const Vision = () => {
  return (
    <div className="w-full min-h-screen bg-white p-16">
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <InfoCard
            title="Our Vision"
            description="We are Curious for Tomorrow, committed to delivering innovative technology solutions that exceed expectations through creativity and forward-thinking."
            icon={<TbTargetArrow size={50} color="#eee" />}
          />

          <InfoCard
            title="Our Mission"
            description="To lead in IT solutions and staffing services, powered by technology, problem-solving, innovation, and integrity."
            icon={<TbBulb size={40} color="#eee" />}
          />

          <InfoCard
            title="Our Values"
            description="Innovation | Problem-Solving | Integrity – these guide everything we create and every partnership we build."
            icon={<FaHandsBound size={40} color="#eee" />}
          />

        </div>
      </section>

      <section className="max-w-7xl mx-auto mt-20">
        <div className="relative bg-[#1e2357] text-white px-8 pb-8 pt-28 shadow-xl "
          style={{
            borderTopLeftRadius: "100px",
          }}
        >

          <div className="absolute top-0 left-0 bg-white p-3 " style={{
            borderBottomRightRadius: "35px",
          }}>

          <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center shadow-md">
            <TbArrowsUp size={40} color="#eee" />
          </div>
          </div>

          <h2 className="text-3xl font-bold tracking-wide mb-3 tracking-wider border-b-2 border-b-gray-500 pb-2 w-fit">
            SUSTAINABILITY AT TECHNOGEN
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Sustainability is integral to our business. We act ethically,
            transparently, and responsibly, embedding sustainability across
            our global operations and supply chain. As an Accrediting Body (AB)
            for the Supply Chain Security Standard (SCS-9001), we work with ANSI
            to ensure trusted, sustainable ICT supply chains, protecting
            infrastructure and creating long-term value.
          </p>
        </div>

      </section>
    </div>
  );
};

export default Vision;