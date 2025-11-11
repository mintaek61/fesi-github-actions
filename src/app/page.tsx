"use client";

import { useState } from "react";

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div
        className="cursor-pointer perspective-midrange"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className={`relative h-96 w-64 transition-transform duration-700 transform-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          <div className="absolute flex h-full w-full items-center justify-center rounded-xl bg-white p-4 shadow-lg backface-hidden">
            <div>카드앞면</div>
          </div>
          <div className="absolute flex h-full w-full rotate-y-180 items-center justify-center rounded-xl bg-blue-500 p-4 text-white shadow-lg backface-hidden">
            <div>카드뒷면</div>
          </div>
        </div>
      </div>
    </div>
  );
}
