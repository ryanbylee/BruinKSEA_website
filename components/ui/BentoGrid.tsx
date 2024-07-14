import { cn } from "@/utils/cn";
import { color } from "framer-motion";
import { Meteors } from "./meteors";

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
  return (
    <div
      className={cn(
        "white-space: pre-line row-span-1 relative rounded-3xl group/bento  shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: 'rgb(2,3,70)',
        backgroundColor: 'linear-gradient(90deg, rgba(0,85,135,1) 0%, rgba(139,184,232,1) 50%, rgba(0,59,92,1) 100%)'
      }}
    >
      <div className={`${id === 6} && 'flex justify-center h-full'`}>
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
        {id === 6 && (
          <Meteors number={20} className="absolute z-50 flex items-center justify-center text-white font-bold"/>
            // <div className="absolute z-50 flex items-center justify-center text-white font-bold"/>
        )}
        <div className={cn(
          titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          
        </div>
      </div>

    </div>
  );
};
