import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";




const NotFound = () => {


    
    return (


        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white px-6">


            {/* Floating 404 */}
            <motion.h1
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 10 }}
                className="text-9xl font-extrabold tracking-wider bg-linear-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text drop-shadow-2xl"
            >
                404
            </motion.h1>


            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-4 text-xl text-gray-300"
            >
                Oops! The page you're looking for doesn’t exist.
            </motion.p>


            {/* Animated blob */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 2 }}
                className="absolute w-[300px] h-[300px] bg-purple-500 blur-3xl rounded-full -z-10 animate-pulse"
            />


            {/* Button */}
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-8"
            >
                <Link
                    to="/"
                    className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-purple-500 to-blue-500 rounded-full font-medium hover:opacity-90 transition"
                >
                    <ArrowLeft size={20} />
                    Go Back Home
                </Link>
            </motion.div>


            {/* Floating animation elements */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute bottom-10 text-gray-500 text-sm"
            >
                Lost in space?
            </motion.div>

        </div>

    );

};


export default NotFound;
