import React from "react";
import { motion } from "framer-motion";
import Image from "../images/laptop.jpg";

export default function Navbar() {
  return (
    <>
      <div className="home">
        <div className="home__header">
          <p>Hi, I'm Marcus Walby</p>
        </div>

        <div className="home__img">
          {/* <motion.img whileHover={{ scale: 1.2 }} src={Image} alt="laptop" /> */}
        </div>
      </div>
    </>
  );
}
