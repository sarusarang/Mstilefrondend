import HeroSlider from "@/components/home/HeroSlider";
import SellingProducts from "@/components/home/SellingProducts";
import ProjectsSection from "@/components/home/Projects";
import { BlurFade } from "@/components/ui/blur-fade";




export default function Index() {

    return (

        <section className="w-full flex-col items-center justify-center">


            <div className="w-full h-full">
                <HeroSlider />
            </div>


            <div className="w-full h-full">
                <BlurFade delay={0.25} duration={0.5} inView>
                    <SellingProducts />
                </BlurFade>
            </div>


            <div className="w-full h-full">
                <BlurFade delay={0.25 * 2} duration={0.5} inView>
                    <ProjectsSection />
                </BlurFade>
            </div>


        </section>
    );
}
