import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { FloatingNav } from "@/components/ui/FloatingNav";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
          <FloatingNav navItems={[
            {name: 'Home', link: '/'}
          ]}/>
        <BackgroundGradientAnimation>
        <div className="w-full">
            <Hero />
            <Grid />
        </div>
        </BackgroundGradientAnimation>
      
    </main>

  );
}
