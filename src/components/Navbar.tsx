import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ACCENT_COLOR } from "../utils/constants";

const Navbar = ({ scrollTo }: { scrollTo: (id: string) => void }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className={`fixed w-full z-50 transition-all ${scrolled ? "bg-[#111]/80" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between text-white">

        <h1 className="font-bold text-xl">
          Devansh<span style={{ color: ACCENT_COLOR }}>Bansal</span>
        </h1>

        <ul className="hidden md:flex gap-8">
          {links.map((id) => (
            <li key={id}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => scrollTo(id)}
                className="capitalize"
              >
                {id}
              </motion.button>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
