import work from "@/app/assets/work.png";
import Image from "next/image";
import yellowB from "@/app/assets/yellowbullet.png";
import silverB from "@/app/assets/silverbullet.png";
import arrow from "@/app/assets/arrow1.png";
import {  motion } from "framer-motion";
import { delay } from "framer-motion/dom";

export default function Step() {
 
  const arrowVariants = {
    hidden: { opacity: 0, x: -90 },  
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut", delay:0.25 }, 
    },
  };

  return (
    <div className="flex justify-center items-center h-screen relative">
      <div className="flex gap-7 items-center relative">
        <div className="flex flex-col gap-7 relative">
          <p className="text-white text-4xl">Step 1</p>

          
          <div className="flex items-center gap-3">
            <Image
              src={yellowB}
              alt="bulletpoint"
              width={15}
              height={15}
              className="mt-1"
            />
            <p className="text-yellow-400">Tenant selects Property</p>
          </div>

          <div className="flex items-center gap-3">
            <Image
              src={silverB}
              alt="bulletpoint"
              width={15}
              height={15}
              className="mt-1"
            />
            <p className="text-white">
              Tenant selects flexible rent tenure & <span> corresponding amount</span>
            </p>
          </div>
        </div>

      
        <Image
          className="ml-28"
          src={work}
          alt="how"
          width={310}
          height={100}
        />

        
        <motion.div
          className="absolute top-10 left-72 transform -rotate-12"
          initial="hidden"
          animate="visible"
          variants={arrowVariants}
        >
          <Image
            src={arrow}
            alt="arrow"
            width={400} 
            height={80}
          />
        </motion.div>
      </div>
    </div>
  );
}
