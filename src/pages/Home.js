import React from 'react';
import backgroundImage from "../assets/1.jpg";

export default function Home() {
  return (
    <div className='flex flex-row'>
      <div className="flex text-start flex-col z-10 w-full mt-20 sm:w-3/5 sm:mt-40 pl-4">
        <div className='flex text-5xl mb-2 font-bold'>
          Chat With Your Friends
        </div>
        <div className="flex text-3xl mb-2">
          Application made by A.P.
        </div>
        <div className="flex mb-10 font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </div>
        <div className="flex flex-col sm:flex-row text-center gap-5">
          <div className='border rounded-2xl flex-1 py-1 border-blue-400 bg-blue-600 text-white hover:bg-blue-500 cursor-pointer'>
            More details
          </div>
          <div className='border rounded-2xl flex-1 py-1 border-blue-400 bg-blue-600 text-white hover:bg-blue-500 cursor-pointer'>   
            View demo
          </div>
        </div>
      </div>
      <div className="flex absolute right-0 top-4/5 bottom-1/4 w-full sm:w-3/5 z-0 opacity-50">
        <img src={backgroundImage} alt="" />
      </div>
    </div>
  );
}
