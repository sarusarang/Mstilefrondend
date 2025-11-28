import { motion } from "framer-motion";



interface Props {
    title: string;
    desc: string;
    image: string
}


export default function HeroBanner({ title, desc, image }: Props) {


    return (


        <section className="relative w-full h-[60vh] md:h-[55vh] lg:h-[65vh] overflow-hidden font-serif">


            {/* Background Image */}
            <img
                src={image}
                alt="Projects Banner"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
            />


            {/* Black inset overlay */}
            <div className="absolute inset-0 bg-black/60"></div>


            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    viewport={{ once: true }}
                    className="text-center px-4 max-w-2xl"
                >
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 sm:mb-4">
                        {title}
                    </h1>
                    <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                        {desc}
                    </p>
                </motion.div>
            </div>


            {/* Curved Bottom Divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    className="relative block w-full h-[100px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1920 100"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0 C480,100 1440,100 1920,0 L1920,100 L0,100 Z"
                        className="fill-white"
                    />
                </svg>
            </div>

        </section>


    )


}
