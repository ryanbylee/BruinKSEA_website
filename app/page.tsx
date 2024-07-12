import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
        <BackgroundGradientAnimation>
        <div className="w-full">
        <FloatingNav navItems={[
            {name: 'Home', link: '/'}
          ]}/>

            <Hero />
            <Grid />
          

        </div>
        </BackgroundGradientAnimation>
      
    </main>

  );
}
