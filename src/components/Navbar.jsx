import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
const Navbar = () => {
  return (
    <>
      <header className="bg-[#010103] h-[90px] flex items-center text-white justify-between px-32 border-b-2 border-[#FFC107] fixed top-0 left-0 right-0 z-1000 ">
        <Link href="#">
          <Image src="/images/logo.png" 
           width={74}
           height={67}
          //className="w-[74px] h-[67px]" 
          alt="" />
        </Link>
        <nav className="text-white flex gap-6 text-[16px] font-semibold ">
          <Link href="/">Home</Link>
          {/* <Link href="/About">About</Link> */}
          <a href="#About">About</a>
          <Link href="/menu">Menu</Link>
          <Link href="/products">Products</Link>
          <Link href="/review">Review</Link>
          <Link href="/Contact">Contact</Link>
          <Link href="/blogs">Blogs</Link>
        </nav>
        <div className=" gap-3 flex items-center text-[29px] font-extrabold">
          <div>
            <AiOutlineSearch />
          </div>
          <div>
            <BsCart2 />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
