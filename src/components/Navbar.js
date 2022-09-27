import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="mb-20">
         <div className='fixed top-0 w-full z-50 flex flex-auto flex-row bg-white shadow shadow-blue-300 p-2 px-5 items-center justify-between text-sm'>
            <div className="flex flex-row gap-6 items-center">
                <Link to="/">
                    <div className="flex flex-col">
                        <div className="text-lg font-bold">
                            Vartalap
                        </div>
                        <div className="flex-none">
                            By Anuj Kr Pandey
                        </div>
                    </div>
                </Link>
                <div className="hidden md:flex flex-row gap-14 items-center">
                    <Link to="/">
                        <div className='flex flex-row items-center'>
                            <div className="w-4 h-4 mr-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                    <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                </svg>
                            </div>
                            <div className="font-bold">
                                Home
                            </div>
                        </div>
                    </Link>
                    <Link to="/chat">
                        <div className='flex flex-row items-center'>
                            <div className="w-4 h-4 mr-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-chat-left" viewBox="0 0 16 16">
                                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                </svg>
                            </div>
                            <div className="font-bold">
                                Chat
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <Link to="/me">
                <div className='flex flex-row items-center'>
                    <div className="w-6 h-6 mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                    </div>
                    <div className="font-bold md:flex hidden">
                        Anuj Kumar Pandey
                    </div>
                </div>
           </Link>
        </div>
    </div>
  );
}
