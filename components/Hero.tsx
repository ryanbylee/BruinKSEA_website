import React from 'react'
import { BackgroundGradientAnimation } from './ui/background-gradient-animation'
import { TextGenerateEffect } from './ui/TextGenerateEffect';

const Hero = () => {
  return (
    
            <div className="relative z-50 inset-0 items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
            {/* <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                BruinKSEA
            </p> */}
            {/* <div className="h-screen w-full dark:#00FFFFFF #00FFFFFF  dark:bg-grid-white/[0.06] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">

            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
            </div> */}
            
            <div className='font-sans font-bold flex justify-center relative my-60 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                <img src='/logo.png' className='w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40' />
                    <TextGenerateEffect 
                        className='text-center text-[40px] md:text-6xl lg:text-7xl'
                        
                        words='BruinKSEA'
                    />
                    <TextGenerateEffect 
                        className='text-center text-[20px] md:text-3xl lg:text-4xl'
                        
                        words='UCLA&apos;s Premier STEM-focused Korean Student Organization'
                    />

                </div>
            </div>
        </div>
  );
};

export default Hero