import React, { useEffect } from "react";

import "aos/dist/aos.css";
import Aos from "aos";

const Offer = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="text-orange-600">
           
      <div className="h-[300px] sm:h-[500px] flex sm:items-center  bg-cover bg-center bg-[url('https://d1ef7ke0x2i9g8.cloudfront.net/bangkok/_large1400/254805/These-Studios-and-Spaces-Offer-Art-Classes-to-Kids-in-Bangkok.webp')]  mb-5">

        <div className="h-1/3 sm:h-full bg-opacity-70 bg-white rounded-b-full sm:rounded-bl-none sm:rounded-r-full flex sm:items-center  w-full sm:w-1/2 shadow-md shadow-pink-200 sm:shadow-none">
        
           
           
          <div className=" text-center">
          <p className='text-6xl font-bold text-center items-center mx-auto'>Our Offered Courses</p>
            <div className="bg-pink-500 px-4 sm:px-6 py-4 rounded-full">
         
              <p className="text-2xl sm:text-3xl text-left font-bold -mt-3 text-white">
               Get Upto
              </p>
              <p className="text-3xl sm:text-5xl font-bold text-white">
                35% Offer
              </p>
            </div>
            
          </div>
        </div>
      </div>
      <div className="flex flex-wrap sm:flex-nowrap gap-5 px-5 sm:px-10 sm:-mt-28">
        <div
          className="h-80 w-full sm:w-1/3 bg-cover bg-center bg-[url('https://www.drawingskill.com/wp-content/uploads/5/Color-Sketch-Drawing-High-Quality.jpg')] flex items-center justify-center rounded-2xl shadow-md"
          data-aos="fade-up"
        >
          <div className="bg-white bg-opacity-60 text-center p-12 rounded-3xl w-fit shadow-md">
            <p className="text-2xl font-semibold">Pencil Drawing</p>
            <p className="text-5xl font-bold text-pink-500">30% Off</p>
          </div>
        </div>
        <div
          className="h-80 w-full sm:w-1/3 bg-cover bg-center bg-[url('https://wallpapercave.com/wp/wp3080637.jpg')] flex items-center justify-center rounded-2xl shadow-md"
          data-aos="fade-up"
        >
          <div className="bg-white bg-opacity-70 shadow-md text-center p-12 rounded-3xl w-fit">
            <p className="text-2xl font-semibold">Sketching</p>
            <p className="text-5xl font-bold text-pink-500">38% Off</p>
          </div>
        </div>
        <div
          className="h-80 w-full sm:w-1/3 bg-cover bg-center bg-[url('https://i.ytimg.com/vi/p56qMUyhAGk/maxresdefault.jpg')] flex items-center justify-center rounded-2xl shadow-md"
          data-aos="fade-up"
        >
          <div className="bg-white bg-opacity-70 shadow-md text-center p-12 rounded-3xl w-fit">
            <p className="text-2xl font-semibold">Watercolor Drawing</p>
            <p className="text-5xl font-bold text-pink-500">25% Off</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;