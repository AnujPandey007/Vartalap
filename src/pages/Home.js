import React from 'react';
import backgroundImage from "../assets/1.jpg";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className='flex flex-row'>
        <div className="flex text-start flex-col z-10 w-full sm:w-3/5 pl-4">
          <div className='flex text-3xl md:text-5xl mb-2 font-bold'>
            Chat With Your Friends
          </div>
          <div className="flex text-xl md:text-3xl mb-2">
            Application made by A.P.
          </div>
          <div className="flex text-sm md:text-base mb-10 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </div>
          <div className="flex flex-col sm:flex-row sm:w-2/4 w-3/5 text-center gap-5">
            <div className='border rounded-2xl flex-1 py-1 border-blue-400 bg-blue-600 text-white hover:bg-blue-500 cursor-pointer'>
              Sign In
            </div>
            <div className='border rounded-2xl flex-1 py-1 border-blue-400 bg-white text-blue-600 hover:border-blue-200 cursor-pointer'>   
              Sign Up
            </div>
          </div>
        </div>
        <div className="flex absolute right-0 top-4/5 bottom-1/4 w-full sm:w-3/5 z-0 opacity-50">
          <img src={backgroundImage} alt=""/>
        </div>
      </div>
      <footer className="fixed bottom-0 w-full z-30 p-4 bg-white rounded-lg shadow md:px-6 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
              <Link to="#" className="flex items-center mb-4 sm:mb-0">
                  <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">Vartalap</span>
              </Link>
              <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0">
                  <li>
                    <Link to="#" className="mr-4 hover:underline md:mr-6 ">About</Link>
                  </li>
                  <li>
                      <Link to="#" className="hover:underline">Contact</Link>
                  </li>
              </ul>
          </div>
          <div className="my-6 border-gray-200 sm:mx-auto lg:my-8">
            <span className="block text-sm text-gray-500 sm:text-center">© 2022
              <Link to="#" className="hover:underline"> Vartalap™</Link>. All Rights Reserved.
            </span>
          </div>
      </footer>
    </>
  );
}
