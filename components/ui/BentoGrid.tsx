'use client'

import { cn } from "@/utils/cn";
import { color } from "framer-motion";
import { Meteors } from "./meteors";
import { useState } from "react";
import animationData from '@/data/confetti.json';
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { IoCopy, IoCalendar, IoLocation, IoTime, IoList} from "react-icons/io5";
import { IconContext } from "react-icons";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="flex justify-center w-full">
      <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3  gap-4 max-w-7xl w-full mx-4",
        className
      )}
    >
      {children}
    </div>

    </div>
  );
    
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string ;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number; 
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;

}) => {
  const [copid, setCopid] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('bruinksea@gmail.com');
    setCopid(true);
  }
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento  shadow-input dark:shadow-none p-4 justify-between flex flex-col space-y-4 border border-white/[0.5]",
        className
      )}
      style={{
        background: 'rgba(139, 184, 232, 0.5)',
        backgroundColor: 'linear-gradient(90deg, rgba(0,85,135,1) 0%, rgba(139,184,232,1) 50%, rgba(0,59,92,1) 100%)'
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img &&(
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover', 'object-center',
                imgClassName
              )}
            />
            )
          }
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 5 && (
          <Meteors number={20} className="absolute z-50 flex items-center justify-center text-white font-bold"/>
            // <div className="absolute z-50 flex items-center justify-center text-white font-bold"/>
        )}
        <div className={cn(
          titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>
          <div className="font-sans font-bold text-nowrap text-lg lg:text-3xl max-w-96 z-10 text-white">
            {title}
          </div>
          <div className="font-sans font-extralight text-white text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          {id === 2 && (
            <div className="flex justify-center  w-full relative py-4 lg:py-16">
              <div className="flex flex-col gap-3 lg:gap-8">
                {['Sep. 11', 'Oct. 9', 'Nov. 23'].map((item) => (
                  <div key={item} className="flex items-center bg-[#005587] rounded-l-lg px-3">
                    <IconContext.Provider value={{ color: "white", className: "size-4 max-sm:hidden" }}>
                      <div>
                        <IoCalendar />
                      </div>
                    </IconContext.Provider>
                    <span className="py-2 text-white rounded-l-lg pl-2 lg:py-4 max-sm:text-wrap text-xs  lg:text-sm text-center ">
                    
                    {item}
                    </span>
                </div>
                ))}

              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                {['Mock Interview', 'Alumni Night', 'Fall Retreat'].map((item) => (
                  <div key={item} className="flex items-center bg-[#8BB8E8] bg-opacity-50 px-3">
                    <IconContext.Provider value={{ color: "black", className: "size-4 max-sm:hidden" }}>
                      <div>
                        <IoList />
                      </div>
                    </IconContext.Provider>
                    <span className="py-2 text-black pl-2 lg:py-4 text-xs max-sm:text-wrap lg:text-sm text-center ">
                    
                    {item}
                    </span>
                  </div>
                  
                ))}
                
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                {['Boelter Ball', 'Ackerman Union', 'Kerckhoff Hall'].map((item) => (
                  <div key={item} className="flex items-center bg-[#8BB8E8] bg-opacity-50 px-3">
                    <IconContext.Provider value={{ color: "black", className: "size-4 max-sm:hidden" }}>
                      <div>
                        <IoLocation />
                      </div>
                    </IconContext.Provider>
                    <span className="py-2 text-black lg:py-4 text-xs pl-2 max-sm:text-wrap lg:text-sm text-center ">
                    
                    {item}
                    </span>
                </div>
                ))}

              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                {['7PM PST', '5PM PST', '6PM PST'].map((item) => (
                  <div key={item} className="flex items-center bg-[#8BB8E8] bg-opacity-50 rounded-r-lg px-3">
                    <IconContext.Provider value={{ color: "black", className: "size-4 max-sm:hidden" }}>
                      <div>
                        <IoTime />
                      </div>
                    </IconContext.Provider>
                    <span className="py-2 text-black pl-2 lg:py-4  text-xs max-sm:text-wrap lg:text-sm text-center ">
                    
                    {item}
                    </span>
                  </div>
                ))}
                
              </div>

            </div>
            
            
            
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={'absolute -bottom-5 right-0'}>
                <Lottie options={{
                  loop: copid,
                  autoplay: copid,
                  animationData: animationData,
                  rendererSettings:{
                    preserveAspectRatio: 'xMidYMid slice',
                  }

                }}/>

              </div>
              <MagicButton
                title={copid ? 'Done!' : 'Copy Email'}
                icon={<IoCopy/>}
                position='left'
                handleClick={handleCopy}
                />

            </div>
          )}
          
        </div>
      </div>

    </div>
  );
};
