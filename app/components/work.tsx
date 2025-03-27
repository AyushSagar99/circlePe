import work from "@/app/assets/work.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex gap-7 items-center">
        <div className="flex flex-col gap-7 relative">
          {/* Text container with relative positioning */}
          <div className="relative overflow-hidden">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <p className="text-gray-500 flex flex-col text-4xl">
                How does <span>it <span className="text-white"> work</span> <span className="text-blue-500">?</span></span>
              </p>
              
              <p className="text-white flex flex-col mt-4">
                We make it possible in a quick and easy few steps <span> process, takes max 5 mins</span>
              </p>
            </motion.div>
            
            {/* Blue overlay that covers the text */}
            <motion.div 
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              transition={{ 
                type: "spring", 
                damping: 20, 
                stiffness: 100, 
                delay: 0.3,
                duration: 0.8
              }}
              className="absolute top-0 left-0 w-full h-full bg-blue-500 rounded-lg"
            />
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Image 
            className="ml-28"
            src={work} 
            alt="how" 
            width={310} 
            height={100} 
          />
        </motion.div>
      </div>
    </div>
  );
}