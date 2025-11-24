import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";




// Slides Data
const slides: { id: number; image: string; title: string; desc: string; sub: string }[] = [
    {
        id: 1,
        image: "https://www.kajariaceramics.com/storage/banner/kajaria-living-desktop-2.webp",
        title: "Shaping Dreams",
        desc: "Into Living Spaces",
        sub: "Set the tone of your space with tiles that go beyond function.",
    },
    {
        id: 2,
        image: "https://azteca.es/wp-content/uploads/2023/07/a-lacio-120-1.jpeg",
        title: "Shaping Dreams",
        desc: "Into Living Spaces",
        sub: "Set the tone of your space with tiles that go beyond function.",
    },
    {
        id: 3,
        image: "https://www.kajariaceramics.com/storage/banner/kajaria-outdoor-dektop1.webp",
        title: "Shaping Dreams",
        desc: "Into Living Spaces",
        sub: "Set the tone of your space with tiles that go beyond function.",
    },
];




export default function HeroSlider() {


    const [activeIndex, setActiveIndex] = useState(0);


    return (


        <div className="w-full h-screen relative overflow-hidden">


            <Swiper
                modules={[Autoplay, EffectFade]}
                slidesPerView={1}
                effect="fade"
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="w-full h-full"
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >

                {slides.map((slide) => (


                    <SwiperSlide key={slide.id}>


                        <div className="relative w-full h-full">


                            {/* Zoom-out works on every slide because key changes */}
                            <motion.img
                                key={`${slide.id}-${activeIndex}`}
                                src={slide.image}
                                alt="Slide"
                                initial={{ scale: 1.2 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 5, ease: "easeOut" }}
                                className="w-full h-full object-cover"
                            />


                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40"></div>
                            <div className="absolute top-0 inset-x-0 h-[40%] bg-linear-to-b from-black/60 to-transparent"></div>


                            {/* Text */}
                            <motion.div
                                key={`text-${slide.id}-${activeIndex}`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 z-20"
                            >
                                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-serif leading-tight mb-1 tracking-wide">
                                    {slide.title}
                                </h1>

                                <h2 className="text-white text-3xl sm:text-5xl md:text-6xl font-serif leading-tight mb-3 opacity-90">
                                    {slide.desc}
                                </h2>

                                <p className="text-white font-serif text-base sm:text-lg md:text-xl max-w-2xl opacity-90 mb-4">
                                    {slide.sub}
                                </p>

                                {/* Explore Range Button */}
                                <Link to="/products" className="hover:cursor-pointer">
                                    <div className="flex items-center gap-2 border-2 px-4 py-1 rounded-full text-white hover:text-black hover:bg-white hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">

                                        <span className="  text-sm sm:text-sm tracking-wide font-medium">
                                            EXPLORE PRODUCTS
                                        </span>

                                        <button
                                            className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-black hover:scale-105 transition-all duration-300"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>

                                    </div>
                                </Link>

                            </motion.div>


                        </div>


                    </SwiperSlide>


                ))}


            </Swiper>


        </div>


    );


}
