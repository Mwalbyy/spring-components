import { React, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Carousel() {
  let [count, setCount] = useState(1);
  let [tuple, setTuple] = useState([null, count]);

  if (tuple[1] !== count) {
    setTuple([tuple[1], count]);
  }
  console.log(tuple);

  let prev = tuple[0];

  let direction = count > prev ? 1 : -1;

  return (
    <>
      <div className="carousel">
        <button onClick={() => setCount(count - 1)} className="carousel__btn">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button onClick={() => setCount(count + 1)} className="carousel__btn">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <div className="carousel__container">
        <div className="carousel__div">
          <AnimatePresence custom={direction}>
            <motion.div
              key={count}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
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

let variants = {
  enter: (direction) => ({ x: direction *100 }),
  center: { x: 0 },
  exit: (direction) => ({ x: direction *200}),
};

let colors = ["red", "green", "blue", "yellow"];

// https://www.youtube.com/watch?v=aV2YJuxQ2vo&ab_channel=SamSelikoff
// 8:00
