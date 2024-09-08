import step4 from "@/app/assets/step4.png";
import Image from "next/image";
import { useReveal } from "../hooks/reveal";
import { motion } from "framer-motion";
import yellowB from "@/app/assets/yellowbullet.png";  // Import yellow bullet
import silverB from "@/app/assets/silverbullet.png";  // Import silver bullet

export default function Zero() {
  const reveal = useReveal(0.3);
  const revealVariant = {
    hidden: { opacity: 0, y: 300 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.25 } },
  };

  return (
    <motion.div
      ref={reveal.ref}
      initial="hidden"
      animate={reveal.controls}
      variants={revealVariant}
      className="flex justify-center items-center h-screen"
    >
      <div className="flex gap-7 items-center">
        <div className="flex flex-col gap-4">
          <p className="text-white text-4xl">Step 4</p>

          {/* Yellow bullet for yellow text */}
          <div className="flex items-center gap-3">
            <Image
              src={yellowB}
              alt="yellow bullet"
              width={15}
              height={15}
              className="mt-1"
            />
            <p className="text-yellow-400">Tenant gets approved to move-in :</p>
          </div>

          {/* Silver bullets for white text */}
          <div className="flex flex-col gap-3 ml-4">
            <div className="flex items-center gap-3">
              <Image
                src={silverB}
                alt="silver bullet"
                width={5}
                height={5}
                className="mt-1"
              />
              <p className="text-white">Gets Zero-security deposit approval</p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={silverB}
                alt="silver bullet"
                width={5}
                height={5}
                className="mt-1"
              />
              <p className="text-white">Zero cost EMI = Monthly Rent</p>
            </div>
          </div>
        </div>

        {/* Image for Step 4 */}
        <Image
          className="ml-28"
          src={step4}
          alt="how"
          width={310}
          height={100}
        />
      </div>
    </motion.div>
  );
}
