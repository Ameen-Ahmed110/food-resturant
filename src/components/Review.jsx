import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import Image from "next/image";

const Review = () => {
  return (
    <div className=" max-w-[1280px] m-auto ">
      <h1 className="flex justify-center text-5xl font-bold text-[#FFC107] mb-[44px] ">
        CUSTOMERS REVIEW
      </h1>
      <div className="flex gap-4">
        <div className="flex flex-col justify-center place-items-center gap-6 py-5 px-4 border-2 border-[#FFC107] w-[500px]  ">
          <FaQuoteRight className="text-7xl text-[#FFC107] flex justify-center" />
          <p className="text-center text-[#CCCCB9]">
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi Nulla
            Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus Aut Laborum, Nisi
            Quas Eaque Laudantium Consequuntur Iste Ex Aliquam Minus Vel? Nemo.
          </p>
          <Image
            src="/images/pic-1.png"
            alt=""
            width={75}
            height={0}
          />
          <h2 className="font-bold text-xl">John Doe</h2>
          <div className="flex text-[16px] text-[#FFC107]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>
        </div>
        <div className="flex flex-col justify-center place-items-center  gap-4 py-5 px-4 border-2 border-[#FFC107] w-[500px]  ">
          <FaQuoteRight className="text-7xl text-[#FFC107] flex justify-center" />
          <p className="text-center text-[#CCCCB9]">
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi Nulla
            Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus Aut Laborum, Nisi
            Quas Eaque Laudantium Consequuntur Iste Ex Aliquam Minus Vel? Nemo.
          </p>
          <Image
            src="/images/pic-1.png"
            alt=""
            width={75}
            height={0}
          />
          <h2 className="font-bold text-xl">John Doe</h2>
          <div className="flex text-[16px] text-[#FFC107]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>
        </div>
        <div className="flex flex-col justify-center place-items-center  gap-4  py-[30px] px-[20px] border-2 border-[#FFC107] w-[500px]  ">
          <FaQuoteRight className="text-7xl text-[#FFC107] flex justify-center" />
          <p className="text-center text-[#CCCCB9]">
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi Nulla
            Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus Aut Laborum, Nisi
            Quas Eaque Laudantium Consequuntur Iste Ex Aliquam Minus Vel? Nemo.
          </p>
          <Image
            src="/images/pic-1.png"
            alt=""
            width={75}
            height={0}
          />
          <h2 className="font-bold text-xl">John Doe</h2>
          <div className="flex text-[16px] text-[#FFC107]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
