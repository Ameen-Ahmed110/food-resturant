import Image from "next/image";
import React from "react";

const OurMenue = () => {
  return (
    <div className="max-w-[1280px] m-auto  ">
      <h1 className="flex justify-center text-5xl font-bold text-[#FFC107] mb-[44px] ">
        OUR MENU
      </h1>
      <div className="flex gap-4 flex-wrap">
        <div className=" flex flex-col place-items-center gap-6 py-5 border-2 border-[#FFC107] w-[300px] ">
          <Image src="/images/product-1.png" alt="" 
          width={170}
          height={0}
           />
          <div className="flex flex-col gap-3 place-items-center mb-4">
            <h2 className="font-bold text-2xl">Tasty And Healty</h2>
            <h3 className="font-semibold text-xl">$15.99 $20.99</h3>
            <button className="bg-[#FFC107] text-white text-[18px] font-medium h-11 px-6  ">
              Add To Cart
            </button>
          </div>
        </div>
        <div className=" flex flex-col place-items-center gap-6 py-5 border-2 border-[#FFC107] w-[300px] ">
          <Image src="/images/product-1.png" alt="" 
          width={170}
          height={0}

          />
          <div className="flex flex-col gap-3 place-items-center mb-4">
            <h2 className="font-bold text-2xl">Tasty And Healty</h2>
            <h3 className="font-semibold text-xl">$15.99 $20.99</h3>
            <button className="bg-[#FFC107] text-white text-[18px] font-medium h-11 px-6  ">
              Add To Cart
            </button>
          </div>
        </div>
        <div className=" flex flex-col place-items-center gap-6 py-5 border-2 border-[#FFC107] w-[300px] ">
          <Image src="/images/product-1.png" alt=""
          width={170}
          height={0}
          />
          <div className="flex flex-col gap-3 place-items-center mb-4">
            <h2 className="font-bold text-2xl">Tasty And Healty</h2>
            <h3 className="font-semibold text-xl">$15.99 $20.99</h3>
            <button className="bg-[#FFC107] text-white text-[18px] font-medium h-11 px-6  ">
              Add To Cart
            </button>
          </div>
        </div>
        <div className=" flex flex-col place-items-center gap-6 py-5 border-2 border-[#FFC107] w-[300px] ">
          <Image src="/images/product-1.png" alt="" 
          width={170}
          height={0}
           />
          <div className="flex flex-col gap-3 place-items-center mb-4">
            <h2 className="font-bold text-2xl">Tasty And Healty</h2>
            <h3 className="font-semibold text-xl">$15.99 $20.99</h3>
            <button className="bg-[#FFC107] text-white text-[18px] font-medium h-11 px-6  ">
              Add To Cart
            </button>
          </div>
        </div>
        <div className=" flex flex-col place-items-center gap-6 py-5 border-2 border-[#FFC107] w-[300px] ">
          <Image src="/images/product-1.png" alt="" 
          width={170}
          height={0}
          />
          <div className="flex flex-col gap-3 place-items-center mb-4">
            <h2 className="font-bold text-2xl">Tasty And Healty</h2>
            <h3 className="font-semibold text-xl">$15.99 $20.99</h3>
            <button className="bg-[#FFC107] text-white text-[18px] font-medium	 h-11 px-6  ">
              Add To Cart
            </button>
          </div>
        </div>
        <div className=" flex flex-col place-items-center gap-6 py-5 border-2 border-[#FFC107] w-[300px] ">
          <Image src="/images/product-1.png" alt=""
          width={170}
          height={0}
           />
          <div className="flex flex-col gap-3 place-items-center mb-4">
            <h2 className="font-bold text-2xl">Tasty And Healty</h2>
            <h3 className="font-semibold text-xl">$15.99 $20.99</h3>
            <button className="bg-[#FFC107] text-white text-[18px] font-medium h-11 px-6  ">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenue;
