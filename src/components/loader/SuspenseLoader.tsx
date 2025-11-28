import { motion } from "framer-motion";



export default function SuspenseLoader() {

    return (

        <div className="w-full h-screen flex flex-col items-center justify-center bg-white">

            {/* ICON ANIMATION */}
            <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}

                className=" bg-gray-50"
            >
                <img
                    src="/fav-icon.png" // ⬅️ Replace with your company logo
                    alt="Company Logo"
                    className="w-20 h-20 object-contain"
                />
            </motion.div>

            {/* LOADING TEXT */}
            <motion.p
                className=" text-gray-700 font-medium text-lg tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                Loading...
            </motion.p>
        </div>
    );
}
