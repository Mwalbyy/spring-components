import React from "react";
import { motion } from "framer-motion";
// import Image from "../images/laptop.jpg";

export default function Navbar() {
  const header = ["H","e","l","l","o"]
  return (
    <>
      <div className="home">
        <span className="home__header">
          {header.map((V, i) => <motion.p key={i} whileHover={{scale: 1.2}}>{V}</motion.p>
          )}
        </span>

        <div className="home__img">
          {/* <motion.img whileHover={{ scale: 1.2 }} src={Image} alt="laptop" /> */}
        </div>
      </div>
    </>
  );
}
