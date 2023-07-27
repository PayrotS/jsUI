import React from 'react';
import web from '../asset/web.jpg'

const Job = () => {
  return (
    <div className='mb-8 max-w-md mx-auto md:max-w-7xl'>
      <p className='text-3xl mt-8 border-b ml-8 border-black'>Job</p>
      <div className='mt-8 ml-2 mr-2 border py-8 px-8 bg-[#dddddd] rounded-md h-auto'>      
        <p className='mb-8 text-xl'>Lowongan</p>
      <div className='grid grid-cols-2 gap-2'>
      <div className='w-auto h-80 bg-[#FBFBFB] p-4 mx-16 border border-neutral-500 rounded-lg mb-5 relative'>
          <img src={web} alt="" className='float-left w-1/2 h-auto' />
          <p className='text-lg ml-60 border-b border-black'>Web Designer</p>
          <p className='ml-56'>
              Lorem ipsum dolors ducimus dolor architecto, aliquid suscipit delectus omnis odit et quos quod pariatur?
          </p>
          <p>pengarang: erni</p>
          <p>deadline: 10 april 2020</p>
          <p className="absolute bottom-3 left-4 text-gray-500">1 hari yang hari lalu</p>
          <a href="" className='bg-red-600 text-white text-sm font-semibold leading-6 text-gray-900 ease-in-out duration-300 border-transparent rounded-full px-4 flex items-center absolute bottom-3 right-4'>Lamar</a>
        </div> 

        <div className='w-auto h-80 bg-[#FBFBFB] p-4 mx-16 border border-neutral-500 rounded-lg mb-5 relative'>
          <img src={web} alt="" className='float-left w-1/2 h-auto' />
          <p className='text-lg ml-60 border-b border-black'>Web Designer</p>
          <p className='ml-56'>
              Lorem ipsum dolors ducimus dolor architecto, aliquid suscipit delectus omnis odit et quos quod pariatur?
          </p>
          <p>pengarang: erni</p>
          <p>deadline: 10 april 2020</p>
          <p className="absolute bottom-3 left-4 text-gray-500">1 hari yang hari lalu</p>
          <a href="" className='bg-red-600 text-white text-sm font-semibold leading-6 text-gray-900 ease-in-out duration-300 border-transparent rounded-full px-4 flex items-center absolute bottom-3 right-4'>Lamar</a>
        </div>


        <div className='w-auto h-80 bg-[#FBFBFB] p-4 mx-16 border border-neutral-500 rounded-lg mb-5 relative'>
          <img src={web} alt="" className='float-left w-1/2 h-auto' />
          <p className='text-lg ml-60 border-b border-black'>Web Designer</p>
          <p className='ml-56'>
              Lorem ipsum dolors ducimus dolor architecto, aliquid suscipit delectus omnis odit et quos quod pariatur?
          </p>
          <p>pengarang: erni</p>
          <p>deadline: 10 april 2020</p>
          <p className="absolute bottom-3 left-4 text-gray-500">1 hari yang hari lalu</p>
          <a href="" className='bg-red-600 text-white text-sm font-semibold leading-6 text-gray-900 ease-in-out duration-300 border-transparent rounded-full px-4 flex items-center absolute bottom-3 right-4'>Lamar</a>
        </div>

        <div className='w-auto h-80 bg-[#FBFBFB] p-4 mx-16 border border-neutral-500 rounded-lg mb-5 relative'>
          <img src={web} alt="" className='float-left w-1/2 h-auto' />
          <p className='text-lg ml-60 border-b border-black'>Web Designer</p>
          <p className='ml-56'>
              Lorem ipsum dolors ducimus dolor architecto, aliquid suscipit delectus omnis odit et quos quod pariatur?
          </p>
          <p>pengarang: erni</p>
          <p>deadline: 10 april 2020</p>
          <p className="absolute bottom-3 left-4 text-gray-500">1 hari yang hari lalu</p>
          <a href="" className='bg-red-600 text-white text-sm font-semibold leading-6 text-gray-900 ease-in-out duration-300 border-transparent rounded-full px-4 flex items-center absolute bottom-3 right-4'>Lamar</a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Job;
