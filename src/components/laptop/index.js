import React from 'react'
import { motion } from "framer-motion";

export default function Laptop() {
  return (
    <>
        <div className="laptop">
            <div className="laptop__screen">
                <motion.p whileHover={{scale: 1.2}}>
                    Contact
                </motion.p>
            </div>
            <div className="laptop__keyboard">
                    <div className="laptop__keyboard__second">hi</div>
            </div>
        </div>
    </>
  )
}
