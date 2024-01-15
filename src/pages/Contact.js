import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="flex justify-center text-5xl font-bold text-[#FFC107] mb-[44px] ">
        Contact Us
      </h1>
      <div className="flex items-center w-[1280px] m-auto ">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.472814247961!2d67.14279750971039!3d24.88184897782323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339c51bba9853%3A0xcfb28b11f98e18d4!2sKababjees%20Bakers!5e0!3m2!1sen!2s!4v1699814637612!5m2!1sen!2s"
            width="600"
            height="500"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="bg-[#13131A] w-[1200px] h-[500px] px-5 py-[70px] flex flex-col gap-9">
          <h2 className="text-3xl font-medium flex justify-center">
            GET IN TOUCH
          </h2>
          <input
            type="text"
            id="name"
            placeholder="name"
            className="bg-transparent rounded border-[#FFC107] border-2 outline-none	 p-3"
          />
          <input
            type="email"
            id="email"
            placeholder="email"
            className="bg-transparent rounded border-[#FFC107] border-2 outline-none	 p-3"
          />
          <input
            type="number"
            id="number"
            placeholder="ph: number"
            className="bg-transparent rounded border-[#FFC107] border-2 outline-none	 p-3"
          />

          <div className="flex justify-center">
            <button className="bg-[#FFC107] text-white text-xl font-semibold h-11 px-4 rounded ">
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
