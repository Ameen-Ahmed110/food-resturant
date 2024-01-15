import React from "react";
import Image from "next/image";

const Blogs = () => {
  return (
    <div className=" max-w-[1280px] m-auto">
      <h1 className="flex justify-center text-5xl font-bold text-[#FFC107] mb-[44px] ">
        OUR BLOGs
      </h1>
      <div className="flex gap-4 ">
        <div className="border-2 border-[#FFC107] w-[500px]  ">
          <Image
            src="/images/blog-1.jpeg"
            alt="blog1"
            width={500}
            height={250}
           // className="  w-[500px] h-[250px]"
          />
          <div className="flex flex-col items-start gap-3 py-5 px-4">
            <h3 className="font-semibold text-[25px] ">
              Tasty And Refreshing Spices
            </h3>
            <p className="text-[22px] text-[#FFC107]">
              By Admin / 21st May,2021{" "}
            </p>
            <p className="text-[#CCCCB9] ">
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non,
              Dicta.
            </p>
            <button className="bg-[#FFC107] text-white text-[18px] mt-3 w-[150px] h-9 ">
              Read More
            </button>
          </div>
        </div>
        <div className="border-2 border-[#FFC107] w-[500px] ">
          <Image
            src="/images/blog-2.jpeg"
            alt="blog1"
            width={500}
            height={250}
            //className="  w-[500px] h-[250px]"
          />
          <div className="flex flex-col items-start gap-3 py-5 px-4">
            <h3 className="font-semibold text-[25px] ">
              Tasty And Refreshing Spices
            </h3>
            <p className="text-[22px] text-[#FFC107]">
              By Admin / 21st May,2021{" "}
            </p>
            <p className="text-[#CCCCB9] ">
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non,
              Dicta.
            </p>
            <button className="bg-[#FFC107] text-white text-[18px] mt-3 w-[150px] h-9 ">
              Read More
            </button>
          </div>
        </div>
        <div className="border-2 border-[#FFC107] w-[500px] ">
          <Image
            src="/images/blog-3.jpeg"
            alt="blog1"
            width={500}
            height={250}

           // className="  w-[500px] h-[250px]"
          />
          <div className="flex flex-col items-start gap-3 py-5 px-4">
            <h3 className="font-semibold text-[25px] ">
              Tasty And Refreshing Spices
            </h3>
            <p className="text-[22px] text-[#FFC107]">
              By Admin / 21st May,2021{" "}
            </p>
            <p className="text-[#CCCCB9] ">
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non,
              Dicta.
            </p>
            <button className="bg-[#FFC107] text-white text-[18px] mt-3 w-[150px] h-9 ">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
