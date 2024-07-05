import { useState } from "react";

export default function ComponentTailwind1() {
  const [warnaParag, setWarnaParag] = useState(true);

  return (
    <>
      <div>
        <h1 className="text-center font-bold text-2xl text-red-400">
          Hello Tailwind Css With React Vite
        </h1>
        <p className={`text-${warnaParag}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, neque.
        </p>
        <button
          className={`border-2 border-opacity-30 px-7 font-arial font-semibold text-lg border-black bg-${
            warnaParag === "black" ? "black" : "hijau"
          } text-${warnaParag === "black" ? "black" : "white"}`}
          onClick={() =>
            setWarnaParag(warnaParag === "black" ? "hijau" : "black")
          }
        >
          {warnaParag === "black" ? "Change To Green" : "Change To Black"}
        </button>
      </div>
    </>
  );
}
