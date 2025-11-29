import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader = ({ onFinish }: { onFinish: () => void }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHide(true);
      setTimeout(onFinish, 600);
    }, 2500);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-[999]"
      animate={hide ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-white text-4xl font-bold">Loading...</h1>
    </motion.div>
  );
};

export default Preloader;
