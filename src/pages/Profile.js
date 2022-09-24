import React from 'react'
//import {Link} from 'react-router-dom'

export default function Profile() {
  return (
    <div className='flex flex-col lg:flex-row'>
      <div className="mx-10 my-5 w-70 bg-white rounded-lg border border-gray-200 flex items-center gap-5">
        <div className='flex flex-col mx-auto mt-5 items-center pb-5'>
            <div className='h-20 w-20 mx-10 lg:mx-28 my-1 mb-10'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
            </div>
            <div className="flex flex-col items-center pb-5">
               <h5 className="mb-1 text-xl font-medium text-center text-gray-900 dark:text-dark">Anuj Kumar Pandey</h5>
               <span className="text-sm text-gray-500 dark:text-gray-400">Joined in 2022</span>
            </div>   
        </div>
      </div>

      
      <div className=' w-full mr-20 px-10'>
        <form>
            <div className="grid gap-6 b-6 md:grid-cols-2">
                <div className=''>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                    <input type="text" id="first_name" className="flex  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Anuj Kumar Pandey" required=""/>
                </div>
            
                <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mobile Number</label>
                    <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="6291523662" required=""/>
                </div>
                <div> 
                    <label htmlFor="countries_multiple" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Gender</label>
                    <select multiple="" id="countries_multiple" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option select="">Choose</option>
                    <option value="m">Male</option>
                    <option value="f">Female</option>
                    <option value="o">Others</option>  
                    </select>
                </div>
                <div className="">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="panuj330@gmail.com" required=""/>
                </div> 
                <div className="">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Birth year</label>
                    <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2000" required=""/>
                </div> 
                <div className="">
                    <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pincode</label>
                    <input type="password"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="700057" required=""/>
                </div> 
                <div className="mb-6">
                    <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">State</label>
                    <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="West Bengal" required=""/>
                </div> 
            </div>
            
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
        </form>
      </div>
    </div>
  )
}
