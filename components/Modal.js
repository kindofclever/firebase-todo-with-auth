import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import { useAuth } from "../context/AuthContext";

const Modal = ({ setOpenModal }) => {
  const [_document, set_document] = useState(null);

  const { logOut } = useAuth();

  useEffect(() => {
    set_document(document);
  }, []);

  if (!_document) {
    return null;
  }

  return ReactDom.createPortal(
    <div className="fixed w-screen h-screen top-0 left-0 bg-[#fcffff] flex flex-col">
      <div className="flex justify-between items-center border-b-2 md:border-b-4 border-solid border-[#ca1503] p-4">
        <h2 className="select-none">Menu</h2>
        <i
          onClick={() => setOpenModal(false)}
          className="fa-solid fa-circle-xmark text-3xl md:text-4xl duration-300 hover:rotate-45 curtsor-pointer"></i>
      </div>
      <div className="p-4 flex flex-col gap-4 text-[#2a3692] items-center justify-center h-full">
        <button
          onClick={() => {
            logOut();
            setOpenModal(false);
          }}
          className="w-full max-w-[20ch] p-2 bg-[#2a3692] text-[#fcffff] duration-300 relative
        after:absolute after:top-0 after:right-full after:bg-[#ca1503] after:z-10 after:w-full after:h-full overflow-hidden 
        hover:after:translate-x-full after:duration-300">
          <p className="relative z-20 font-bold">Logout</p>
        </button>
      </div>
    </div>,
    _document.getElementById("portal")
  );
};

export default Modal;
