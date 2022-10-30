import React from "react";

const TodoCard = ({ children }) => {
  return (
    <div className="text-[#fcffff] flex items-strech p-3 border-[#fcffff] border-2 md:border-4 border-solid">
      <div className="flex-1 ">{children}</div>
      <div className="flex items-center">
        <i className="fa-solid fa-pencil px-2 duration-300 hover:text-[#ca1503] hover:rotate-45 cursor-pointer"></i>
        <i className="fa-regular fa-trash-can px-2 duration-300 hover:text-[#ca1503] hover:scale-125 cursor-pointer"></i>
      </div>
    </div>
  );
};

export default TodoCard;
