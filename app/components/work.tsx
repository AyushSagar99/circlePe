import work from "@/app/assets/work.png";
import Image from "next/image";

export default function Work() {
   
  return (<>
    <div className="flex justify-center items-center h-screen">
      <div className="flex gap-7 items-center">
   
        <div className="flex flex-col gap-7">
          <p className="text-gray-500 flex flex-col text-4xl">
            How does <span>it <span className="text-white"> work</span> <span className="text-blue-500">?</span></span>
          </p>
          <p className="text-white flex flex-col">
            We make it possible in a quick and easy few steps <span> process, takes max 5 mins</span>
          </p>
        </div>
        <Image 
        className="ml-28"
          src={work} 
          alt="how" 
          width={310} 
          height={100} 
        />
      </div>
    </div>
    </>
  );
}
