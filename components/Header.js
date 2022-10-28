import React from "react";
import { BsFillFilePersonFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="sticky top-0 left-0 flex justify-between items-center p-4 md:p-5 bg-inherit border-b-2 md:border-b-4 border-solid border-[#ffe9ce]">
      <h1 className="select-none uppercase">Todos</h1>
      <BsFillFilePersonFill className=" duration-300 hover:text-[#8d339f] text-4xl md:text-5xl xl:text-6xl cursor-pointer" />
    </div>
  );
};

export default Header;
