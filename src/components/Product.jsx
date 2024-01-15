import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import Image from "next/image";

const Product = () => {
  return (
    <div className=" max-w-[1280px] m-auto ">
      <h1 className="flex justify-center text-5xl font-bold text-[#FFC107] mb-[44px] ">
        OUR PRODUCTS
      </h1>
      <div className="flex gap-4 ">
        <div className=" flex flex-col place-items-center gap-6 py-5 px-4 border-2 border-[#FFC107] w-[500px] ">
          <div className=" flex items-center gap-3">
            <div className="border-2 border-[#FFC107] p-3 ">
              <FaShoppingCart className="text-[22px] " />
            </div>
            <div className="border-2 border-[#FFC107] p-3 ">
              <FaHeart className="text-[22px] " />
            </div>
            <div className="border-2 border-[#FFC107] p-3 ">
              <FaEye className="text-[22px] " />
            </div>
          </div>
          <Image
            src="/images/product-1.png"
            alt=""
            // className="w-[250px] "
            width={250}
            height={0}
          />
          <div className="flex flex-col gap-3 place-items-center">
            <h2 className="font-bold text-2xl">Fresh Coffee</h2>
            <div className="flex text-[19px] text-[#FFC107]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <h3 className="font-semibold text-xl">$15.99 $20.99</h3>
          </div>
        </div>

        <div className="flex flex-col place-items-center gap-6 py-5 px-4 border-2 border-[#FFC107] w-[500px] ">
          <div className="flex items-center gap-3">
            <div className="border-2 border-[#FFC107] p-3 ">
              <FaShoppingCart className="text-[22px] " />
            </div>
            <div className="border-2 border-[#FFC107] p-3 ">
              <FaHeart className="text-[22px] " />
            </div>
            <div className="border-2 border-[#FFC107] p-3 ">
              <FaEye className="text-[22px] " />
            </div>
          </div>
          <Image
            src="/images/product-2.png"
            alt=""
            //className="w-[250px] "
            width={250}
            height={0}
          />
          <div className="flex flex-col gap-3 place-items-center">
            <h2 className="font-bold text-2xl">Fresh Coffee</h2>
            <div className="flex text-[16px] text-[#FFC107]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <h3 className="font-semibold text-xl">$15.99 $20.99</h3>
          </div>
        </div>
        <div className="flex flex-col place-items-center gap-6 py-5 px-4 border-2 border-[#FFC107] w-[500px] ">
          <div className="flex items-center gap-3">
            <div className="border-2 border-[#FFC107] p-3 ">
              <FaShoppingCart className="text-[22px] " />
            </div>
            <div className="border-2 border-[#FFC107] p-3 ">
              <FaHeart className="text-[22px] " />
            </div>
            <div className="border-2 border-[#FFC107] p-3 ">
              <FaEye className="text-[22px] " />
            </div>
          </div>
          <Image
            src="/images/product-3.png"
            alt=""
            width={250}
            height={0}
            //className="w-[250px] "
          />
          <div className="flex flex-col gap-3 place-items-center">
            <h2 className="font-bold text-2xl">Fresh Coffee</h2>
            <div className="flex text-[16px] text-[#FFC107]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <h3 className="font-semibold text-xl">$15.99 $20.99</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
