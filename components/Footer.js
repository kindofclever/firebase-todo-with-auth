import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-4 md:gap-6 py-3 text-2xl md:text-4xl">
      <Link href="https://github.com/kindofclever">
        <i className="fa-brands fa-square-github duration-300 hover:text-[#fcffff] cursor-pointer"></i>
      </Link>
      <Link href="https://www.linkedin.com/sandragufler">
        <i className="fa-brands fa-linkedin duration-300 hover:text-[#fcffff] cursor-pointer"></i>
      </Link>
      <Link href="https://www.sandragufler.se/">
        <i className="fa-solid fa-heart duration-300 hover:text-[#fcffff] cursor-pointer"></i>
      </Link>
    </div>
  );
};

export default Footer;
