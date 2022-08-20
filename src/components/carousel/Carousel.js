import { React, useState } from "react";

export default function Carousel() {
  let [count, setCount] = useState(1);

  return (
    <>
      <div className="carousel">
        <button onClick={() => setCount(count - 1)} className="carousel__btn">
          Prev
        </button>
        <button onClick={() => setCount(count + 1)} className="carousel__btn">
          Next
        </button>
      </div>
      <div className="carousel__container">
        <div className="carousel__div">
          <div className="carousel__div__count">{count}</div>
        </div>
      </div>
    </>
  );
}
// https://www.youtube.com/watch?v=aV2YJuxQ2vo&ab_channel=SamSelikoff
