import React, { useState } from "react";
import { BsFillFilePersonFill } from "react-icons/bs";
import Modal from "./Modal";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal ? <Modal setOpenModal={setOpenModal} /> : <></>}
      <div className="sticky top-0 left-0 flex justify-between items-center p-4 md:p-5 bg-[#2a3692] border-b-2 md:border-b-4 border-solid border-[#fcffff]">
        <h1 className="select-none uppercase">Todos</h1>
        <BsFillFilePersonFill
          onClick={() => setOpenModal(true)}
          className=" duration-300 hover:text-[#fcffff] text-[#ca1503] text-4xl md:text-5xl xl:text-6xl cursor-pointer"
        />
      </div>
    </>
  );
};

export default Header;
