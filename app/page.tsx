"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Step from "./components/step1";
import Work from "./components/work";
import Part from "./components/step1part2";
import { useReveal } from "./hooks/reveal"; 
import Slide from "./components/step2";
import Tenant from "./components/step3";
import Zero from "./components/step4";

export default function Home() {
 
  const workReveal = useReveal(0.2);
  const stepReveal = useReveal(0.3);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.5 });

  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);

  const progressColor = useTransform(
    smoothProgress, 
    [0, 1], 
    ["#4B71C5", "#39FF14"] 
  );

  const revealVariant = {
    hidden: { opacity: 0, y: 300 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.25 } },
  };

  return (
    <div className="bg-black h-fit relative">
    
      <motion.div
        className="fixed top-20 right-40 w-2 rounded-full"
        style={{ height: progressHeight, backgroundColor: progressColor }}
      />

      <div className="fixed top-[170px] left-[88px] w-[400px] h-[400px] bg-blue-400 rounded-full blur-[200px] opacity-60 z-0"></div>

      <motion.div
        ref={workReveal.ref}
        className="relative z-10"
        initial="hidden"
        animate={workReveal.controls}
        variants={revealVariant}
      >
        <Work />
      </motion.div>

      <motion.div
        ref={stepReveal.ref}
        className="relative z-10 mt-16"
        initial="hidden"
        animate={stepReveal.controls}
        variants={revealVariant}
      >
        <Step />
      </motion.div>

      <div>
        <Part />
      </div>

      <Slide />
      <Tenant />
      <Zero />
    </div>
  );
}
