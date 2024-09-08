import step2 from "@/app/assets/step2.png";
import Image from "next/image";
import { useReveal } from "../hooks/reveal";
import { motion } from "framer-motion";
import yellowB from "@/app/assets/yellowbullet.png";
import silverB from "@/app/assets/silverbullet.png";
import arrow from "@/app/assets/arrow2.png";
import { delay } from "framer-motion/dom";

export default function Slide() {
  const reveal = useReveal(0.3);
  const revealVariant = {
    hidden: { opacity: 0, y: 300 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.25 } },
  };

  // Arrow animation variants
  const arrowVariants = {
    hidden: { opacity: 0, x: -50 },  // Arrow starts off-screen
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay:0.25 },
    },
  };

  // Array of bullet points for cleaner rendering
  const bulletPoints = [
    { text: "Zero security deposit move-in", bullet: silverB },
    { text: "Reduced rent offer", bullet: silverB },
    { text: "3 months salary cover", bullet: silverB },
  ];

  return (
    <motion.div
      ref={reveal.ref}
      initial="hidden"
      animate={reveal.controls}
      variants={revealVariant}
      className="flex justify-center items-center h-screen"
    >
      <div className="flex gap-7 items-center">
        <div className="flex flex-col gap-3">
          {/* Step 2 Heading */}
          <p className="text-white text-4xl">Step 2</p>

          {/* Yellow bullet with tenant's selection */}
          <div className="flex items-center gap-3">
            <Image
              src={yellowB}
              alt="bulletpoint"
              width={10}
              height={10}
              className="mt-1"
            />
            <p className="text-yellow-400">Tenant selects Pay with Circle enabling :</p>
          </div>

          {/* Silver bullets with multiple options */}
          <div className="flex flex-col gap-2">
            {bulletPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-2">
                <Image
                  src={point.bullet}
                  alt="bulletpoint"
                  width={5}
                  height={5}
                  className="mt-1"
                />
                <p className="text-white">{point.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image on the right */}
        <Image
          className="ml-28"
          src={step2}
          alt="how"
          width={310}
          height={100}
        />
      </div>

      {/* Animated Arrow */}
      <motion.div
        className="absolute top-[350px] left-[550px] transform -rotate-12"
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
