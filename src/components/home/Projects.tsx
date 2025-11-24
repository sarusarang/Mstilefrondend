import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ImgZoom from "../common/ImgZoom";




const projects: { title: string, sub: string, image: string }[] = [
    {
        title: "Oakwood Residence",
        sub: "Urban Home | 2025",
        image: "https://www.simpolo.com/_next/image?url=https%3A%2F%2Fsimpolo-web.s3.ap-south-1.amazonaws.com%2Fuploads%2Fimports%2Ftiles%2Fcollections%2FALCHIMIA%2FALCHIMIA%2520GRAPHITE_preview.jpg&w=3840&q=75&dpl=dpl_BZ3oD2BRhCCBJVDshG3ryaEa4yYP",
    },
    {
        title: "The Horizon Villa",
        sub: "Minimalist Living | 2025",
        image: "https://i.ytimg.com/vi/B2z2R4isksI/maxresdefault.jpg",
    },
    {
        title: "Slate Office",
        sub: "Urban Home | 2024",
        image: "https://img.freepik.com/premium-photo/modern-grey-tiles-interior_1375194-34984.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
        title: "Modern Courtyard",
        sub: "Luxury Retreat | 2024",
        image: "https://images.livspace-cdn.com/w:3840/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/1real-homes-in-1669021353-jiSjM/ond-2022-1669032781-pWI47/tile-design-1669032791-8peJg/d-intd-ond2022-0152-1669972250-YbUaD/b-1669972261-ltZX0.jpg",
    },
];




const ProjectsSection = () => {


    return (


        <section className="w-full py-10 px-2 md:px-12 lg:px-20 border-t-2 border-dashed border-gray-200">


            {/* HEADER TEXT */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-7xl sm:max-w-3xl mb-8 text-center mx-auto"
            >
                <h2 className="text-3xl font-serif md:text-5xl font-bold leading-tight">
                    Integrate Innovation & Change your Construction
                </h2>

                <p className="text-gray-600 mt-4 text-lg leading-relaxed font-serif">
                    Adopt technology and Porotherm Smart Bricks for construction innovation.
                    This revolutionary system eliminates wet mortar, ensuring rapid wall
                    erection and faster project completion.
                </p>
            </motion.div>



            {/* PROJECT GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10">

                {projects.map((item, index) => (

                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="w-full"
                    >

                        {/* IMAGE CARD */}
                        <div className="relative group overflow-hidden shadow-sm">

                            <ImgZoom
                                src={item.image}
                                alt={item.title}
                                className="h-64 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* HOVER ICON (non-clickable overlay) */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 pointer-events-none"
                            >
                                {/* CLICKABLE ICON ONLY */}
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg pointer-events-auto">
                                    <ArrowUpRight size={22} strokeWidth={1.7} />
                                </div>
                            </motion.div>

                        </div>


                        {/* TEXT */}
                        <div className="mt-3 flex justify-between items-center font-serif">
                            <h4 className="text-lg font-semibold">{item.title}</h4>
                            <p className="text-gray-500 text-md sm:block hidden">{item.sub}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
