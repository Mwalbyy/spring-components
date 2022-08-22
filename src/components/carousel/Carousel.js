import { React, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Carousel() {
  let [count, setCount] = useState(1);


  return (
    <>
      <div className="carousel">
        <button onClick={() => setCount(count - 1)} className="carousel__btn">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button onClick={() => setCount(count + 1)} className="carousel__btn">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <div className="carousel__container">
        <div className="carousel__div">
          <AnimatePresence>
            <motion.div
              key={count}
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              exit={{ x: -100 }}
              className={`carousel__div__count ${colors[Math.abs(count) % 4]}`}
            >
              {count}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

let colors = ["red", "green", "blue", "yellow"];

// https://www.youtube.com/watch?v=aV2YJuxQ2vo&ab_channel=SamSelikoff
// 8:00