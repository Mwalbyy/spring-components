import React from "react";
import { motion, useScroll } from "framer-motion";

export default function Navbar() {
  const { scrollYProgress } = useScroll()

  return (
    <>
      <motion.nav className="navbar" style={{opacity: 0}}>
        <p>marcus walby</p>
        <ul className="navbar__list" >
          <motion.li
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.2 },
            }}
          >
            Projects
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.2 },
            }}
          >
            About
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.2 },
            }}
          >
            Contact
          </motion.li>
        </ul>
      </motion.nav>
    </>
  );
}
