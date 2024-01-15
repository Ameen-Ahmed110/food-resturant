import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <h1 className="flex justify-center text-5xl font-bold text-[#FFC107] mb-[44px] ">
        About Us
      </h1>
      <div className="flex items-center w-[1280px] m-auto ">
        
          <Image
            src="/images/about.jpeg"
            alt=""
            width={700}
            height={600}
            
          />
    
        <div className="bg-[#13131A] h-[500px] px-4 py-[70px] flex flex-col gap-6">
          <h2 className="text-3xl font-medium">What Makes Our Food Special?</h2>
          <p className="text-1xl leading-loose		 ">
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
            Voluptatibus Qui Ea Ullam, Enim Tempora Ipsum Fuga Alias Quae
            Ratione A Officiis Id Temporibus Autem? Quod Nemo Facilis
            Cupiditate. Ex, Vel?
          </p>
          <p className="leading-loose">
            Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Odit Amet
            Enim Quod Veritatis, Nihil Voluptas Culpa! Neque Consectetur
            Obcaecati Sapiente?
          </p>
          <button className="bg-[#FFC107] text-white text-xl w-32 h-11 rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
