import React from "react";

const Description: React.FC = () => {
  return (

      <div className="w-full h-full bg-gradient-to-b from-[#0f1544] to-[#1b225c] px-6 md:px-16 py-16 text-white">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 border-b-2 border-b-gray-500 pb-2 tracking-wider w-fit">WE ARE TECHNOGEN</h3>
        
            <p className="text-gray-300 leading-relaxed">
              Technogen, Inc., headquartered in Chantilly, Virginia, is a CMMI
              Level 3 and ISO-certified global IT services and consulting
              company. Founded in 2003 as a Minority & Women-Owned Small
              Business, we deliver end-to-end IT solutions to public and private
              sector clients worldwide.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://www.theforage.com/blog/wp-content/uploads/2022/07/Depositphotos_4368723_L.jpg"
              alt="Technogen"
              className="w-full rounded-2xl object-cover shadow-lg"
            />
            {/* <div className="absolute top-3 left-3 w-14 h-14 bg-[#ff4f88] rounded-full shadow-md"></div> */}
          </div>
        </div>
      </div>
  
  );
};

export default Description;