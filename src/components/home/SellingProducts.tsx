import { motion } from "framer-motion";
import { Link } from "react-router-dom";




export default function SellingProducts() {



    // Sample images for the cards
    const images : string[] = [
        "/hero-image-gird-1.webp",
        "/hero-image-gird-2.jpg",
        "/hero-image-gird-3.jpg",
        "/hero-image-gird-4.jpg",
        "/hero-image-gird-5.jpg", 
    ];


    return (


        <section className="relative w-full bg-[#f7f2e9] pt-10 overflow-hidden">


            {/* TOP TEXT */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-center px-2 sm:px-6"
            >
                <p className="text-sm font-semibold mb-3 tracking-wide">Destinations</p>

                <h2 className="text-3xl md:text-5xl font-bold leading-snug w-full sm:max-w-4xl mx-auto font-serif">
                    Discover <span className="inline-block">
                        <motion.img
                            src="https://www.asenseinterior.com/assets/mediafile/pflo_gal__DSC00488-HDR_(1)2.webp"
                            className="inline-block w-28 h-10 rounded-full object-cover mx-2"
                            initial={{ scale: 0.6, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.8 }}
                        />
                    </span>{" "}
                    Breathtaking Destinations Handpicked Daily.
                </h2>

            </motion.div>


            {/* IMAGE CARDS */}
            <div className="relative mt-5 sm:mt-16 flex items-center justify-center gap-6 px-6 flex-wrap md:flex-nowrap">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50, rotate: 0 }}
                        whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -6 : 6 }}
                        transition={{ duration: 0.8, delay: index * 0.4 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="w-72 md:w-56 h-60 rounded-3xl overflow-hidden shadow-xl"
                    >
                        <img src={img} className="w-full h-full object-cover" />
                    </motion.div>
                ))}
            </div>





            {/* Most Selling Products */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true, amount: 0.2 }}
                className="mt-10 sm:mt-16 bg-white w-full py-10 sm:py-16 text-center 
               rounded-t-4xl sm:rounded-t-[100px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]"
            >
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 font-serif">
                    Find Our Most Selling Products
                </h3>

                <p className="text-gray-600 max-w-xl mx-auto font-serif">
                    Discover Our Most Popular Walling Solutions, Including The Thermal-Efficient Porotherm Briks,
                    Which Stand For Enhancing Construction Speed, Water Conservation, & Zero Waste Of Valuable Materials
                    And Goods.
                </p>


                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-12 lg:px-20">


                    {[
                        "/most-selling-1.webp",
                        "/most-selling-2.webp",
                        "/most-selling-3.webp"
                    ].map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 5, rotate: 0 }}
                            whileInView={{ opacity: 1, y: 0}}
                            transition={{ duration: 0.8, delay: index * 0.4 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="rounded-xl overflow-hidden shadow-md group"
                        >
                            <img
                                src={img}
                                alt="Product"
                                className="w-full h-48 sm:h-56 md:h-64 object-cover 
                               transition-transform duration-500 group-hover:scale-110"
                            />
                        </motion.div>
                    ))}

                </div>


                <Link to="/products" className="hover:cursor-pointer">
                    <button className="mt-8 font-serif px-8 py-3 border border-black rounded-full 
                           text-sm font-medium hover:bg-black hover:text-white transition 
                           hover:scale-105 hover:cursor-pointer">
                        More Details →
                    </button>
                </Link>


            </motion.div>


        </section>


    )


}
