import React from "react";
import { motion } from "framer-motion";
import Image from "../images/laptop.jpg"

export default function Navbar() {

  return (
    <>
      <div className="imgContainer">
        <img src={Image} alt="laptop" />
      </div>
    </>
  );
}
