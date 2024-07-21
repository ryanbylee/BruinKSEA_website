import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import NavBar from "@/components/ui/NavBar";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto">
        
        <BackgroundGradientAnimation size="100%" className="">
        <NavBar />
        <div className="w-full">
            <Hero />
            <Grid />
        </div>
        </BackgroundGradientAnimation>
      
    </main>

  );
}
