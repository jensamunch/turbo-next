'use client'

import { useState } from 'react';

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function Page() {
  const [count, setCount] = useState(0);
  const [colour, setColour] = useState(getRandomColor);

  return (
    <div className="m-5">
      <h1 className="text-3xl font-bold underline">Hello, Next.js!  </h1>
      <div className="m-5">
        <p className="text-xl font-bold">You've clicked {count} times</p>
        <button className="m-5 btn btn-blue" onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <button className="m-5 btn btn-blue" onClick={() => setCount(0)}>Reset</button>

      </div>
    </div>
  );
}
