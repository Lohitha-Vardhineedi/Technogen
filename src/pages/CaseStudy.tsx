import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { caseStudies } from "../components/CaseStudyData";


const CaseStudy = () => {
  return (
    <section className="w-full min-h-screen  bg-[#0f1544] p-16" >
      <div className="shadow-xl">
{/* bg-[#1e2357] */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white text-4xl font-bold text-left tracking-wider">CASE STUDY</h2>
          <div className="flex justify-between items-center">
          <p className="text-gray-300 mt-3 text-left">
            It is a long established fact that a reader will be distracted by readable content of a page
            <br />when looking at its layout. The point of using Lorem Ipsum is that it has.
          </p>
           <div className="flex gap-3">
          <button className="cursor-pointer swiper-button-prev-custom w-10 h-10 rounded-lg bg-pink-600 flex items-center justify-center hover:bg-pink-700">
            <ArrowLeft size={20} color="#fff" />
          </button>
          <button className="cursor-pointer swiper-button-next-custom w-24 h-10 rounded-lg bg-pink-600 flex items-center justify-end pr-2 hover:bg-pink-700">
            <ArrowRight size={20} color="#fff" />
          </button>
        </div>

          </div>
        </motion.div>
       
     
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="mt-10"
        >
          {caseStudies.map((item, idx) => (
            console.log(item,"item"),
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <div className="bg-[#585b7e] rounded-xl p-2 shadow-md overflow-hidden border border-gray-400/20 hover:scale-[1.03] transition duration-200 cursor-pointer">
                  <img className="w-full h-40 object-cover rounded-xl" src={item?.img} alt={item.title} />
                  <div className="mt-2 mb-6 border-gray-500 border-2 rounded-xl text-left p-2">
                    <h3 className="text-white text-md font-semibold border-b-2 pb-1 border-b-gray-500 ">{item.title}</h3>
                    <p className="text-gray-300 mt-2 text-sm">{item.desc}</p>
                    <button className="mt-4 text-sm flex items-center gap-2 text-white hover:text-pink-400 transition cursor-pointer">
                      Learn more <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default CaseStudy;