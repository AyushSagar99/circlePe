import step1 from "@/app/assets/step1part2.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { useReveal } from "../hooks/reveal";
import yellowB from "@/app/assets/yellowbullet.png";
import silverB from "@/app/assets/silverbullet.png";
import arrow from "@/app/assets/arrow1part2.png";

export default function Part() {
  // Using the useReveal custom hook
  const reveal = useReveal(0.3);

  // Define the animation variants
  const revealVariant = {
    hidden: { opacity: 0, y: 305 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.25 } },
  };

  // Arrow animation variants
  const arrowVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={reveal.ref} // Hook reference for reveal effect
      initial="hidden"
      animate={reveal.controls}
      variants={revealVariant}
      className="flex justify-center items-center h-screen"
    >
      <div className="flex gap-7 items-center">
        <div className="flex flex-col gap-7">
          {/* Step 1 Heading */}
          <p className="text-white flex flex-col text-4xl">Step 1</p>

          {/* First bullet point */}
          <div className="flex items-center gap-3">
            <Image
              src={silverB}
              alt="bulletpoint"
              width={15}
              height={15}
              className="mt-1"
            />
            <p className="text-white">Tenant selects Property</p>
          </div>

          {/* Second bullet point */}
          <div className="flex items-center gap-3">
            <Image
              src={yellowB}
              alt="bulletpoint"
              width={15}
              height={15}
              className="mt-1"
            />
            <p className="text-yellow-400">
              Tenant selects flexible rent tenure & <span> corresponding amount</span>
            </p>
          </div>
        </div>

        {/* Step 1 Image */}
        <Image
          className="ml-28"
          src={step1}
          alt="how"
          width={310}
          height={100}
        />
      </div>

      {/* Animated Arrow */}
      <motion.div
        className="absolute top-[300px] left-[700px]"
        initial="hidden"
        animate="visible"
        variants={arrowVariants}
      >
        <Image
          src={arrow}
          alt="arrow"
          width={310}
          height={150}
        />
      </motion.div>
    </motion.div>
  );
}
