import step3 from "@/app/assets/step3.png";
import Image from "next/image";
import { useReveal } from "../hooks/reveal";
import { motion } from "framer-motion";
import yellowB from "@/app/assets/yellowbullet.png";
import arrow from "@/app/assets/arrow2.png";
import { delay } from "framer-motion/dom";

export default function Tenant() {
  const reveal = useReveal(0.3);
  const revealVariant = {
    hidden: { opacity: 0, y: 300 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.25 } },
  };


  const arrowVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" , delay : 0.25 },
    },
  };

  return (
    <motion.div
      ref={reveal.ref}
      initial="hidden"
      animate={reveal.controls}
      variants={revealVariant}
      className="flex relative justify-center items-center h-screen"
    >
      <div className="flex gap-7 items-center">
        <div className="flex flex-col gap-7">
          <p className="text-white flex flex-col text-4xl">Step 3</p>
          <div className="flex items-center gap-3">
            <Image
              src={yellowB}
              alt="bulletpoint"
              width={10}
              height={10}
              className="mt-1"
            />
            <p className="flex flex-col text-yellow-400">
              Smooth Onboarding for the Tenant begins
            </p>
          </div>
        </div>

    
        <Image
          className="ml-28"
          src={step3}
          alt="how"
          width={310}
          height={100}
        />
      </div>

  
      <motion.div
        className="absolute top-96 left-1/3 transform -rotate-12"
        initial="hidden"
        animate="visible"
        variants={arrowVariants}
      >
        <Image
          src={arrow}
          alt="arrow"
          width={400}
          height={150}
        />
      </motion.div>
    </motion.div>
  );
}
