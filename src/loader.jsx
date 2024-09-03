import { motion } from 'framer-motion';
import './loader.css'

const Loader = () => (
    <div className="fixed inset-0 bg-[#d1c9c1] flex items-center justify-center z-50">
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="loader"
        >
            {/* Simple Spinner or Animation */}
            <div className="w-16 h-16 border-4 border-t-transparent border-[#534c46] rounded-full animate-spin"></div>
        </motion.div>
    </div>
);

export default Loader;
