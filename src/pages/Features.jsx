import React from 'react'
import fly from "../assets/fly.png";
import { CiLocationArrow1 } from "react-icons/ci";
import { RiRobot2Line } from "react-icons/ri";

const Features = () => {
  return (
    <>
        <div className='px-4 md:px-10 lg:px-40'>
            <h1 className='text-3xl md:text-5xl mt-16 font-bold dark:text-white text-center'>Powerful Features for Icon Creation</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 mt-5'>
                <div className='col-span-2 border-2 dark:border-gray-800 rounded-xl m-1 md:m-10 p-2 md:p-8'>
                    <h1 className='font-bold text-xl md:text-3xl dark:text-white mb-8'>M Ferreira's Akita Dog</h1>
                    <div className='flex justify-center'>
                        <img src={fly} alt="" className='bg-white object-cover rounded-3xl' />
                    </div>
                    <div>
                        <div className='grid grid-cols-2 m-5 gap-1'>
                            <div className='w-full md:w-80 p-2 md:p-4  border-2 dark:border-gray-800 rounded-xl'>
                                <div className='flex justify-between items-center'>
                                    <p className='text-xl dark:text-white'>Breed</p>
                                    <CiLocationArrow1 className='dark:text-white' />
                                </div>
                                <p className='text-2xl font-semibold dark:text-white'>Akita</p>
                            </div>

                            <div className='w-full md:w-80 p-2 md:p-4 border-2 dark:border-gray-800 rounded-xl'>
                                <div className='flex justify-between items-center'>
                                    <p className='text-xl dark:text-white'>Breed</p>
                                    <CiLocationArrow1 className='dark:text-white' />
                                </div>
                                <p className='text-2xl font-semibold dark:text-white'>Akita</p>
                            </div>
                        </div>

                        <div className='grid grid-cols-2 m-5'>
                            <div className='w-full md:w-80 p-2 md:p-4 border-2 dark:border-gray-800 rounded-xl'>
                                <div className='flex justify-between items-center'>
                                    <p className='text-xl dark:text-white'>Breed</p>
                                    <CiLocationArrow1 className='dark:text-white' />
                                </div>
                                <p className='text-2xl font-semibold dark:text-white'>Akita</p>
                            </div>

                            <div className='w-full md:w-80 p-2 md:p-4 border-2 dark:border-gray-800 rounded-xl'>
                                <div className='flex justify-between items-center'>
                                    <p className='text-xl dark:text-white'>Breed</p>
                                    <CiLocationArrow1 className='dark:text-white' />
                                </div>
                                <p className='text-2xl font-semibold dark:text-white'>Akita</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:mt-20'>
                    <div>
                        <RiRobot2Line className='text-4xl dark:text-white' />
                        <h1 className='text-3xl font-bold dark:text-white mb-5'>AI Powered:</h1>
                        <p className='text-lg dark:text-white'>Craft distinct pet icons each time using OpenAI's DALL-E2 technology, ensuring unparalleled designs for your endeavors.</p>
                    </div>

                    <div className='my-8'>
                        <RiRobot2Line className='text-4xl dark:text-white' />
                        <h1 className='text-3xl font-bold dark:text-white mb-5'>AI Powered:</h1>
                        <p className='text-lg dark:text-white'>Craft distinct pet icons each time using OpenAI's DALL-E2 technology, ensuring unparalleled designs for your endeavors.</p>
                    </div>

                    <div>
                        <RiRobot2Line className='text-4xl dark:text-white' />
                        <h1 className='text-3xl font-bold dark:text-white mb-5'>AI Powered:</h1>
                        <p className='text-lg dark:text-white'>Craft distinct pet icons each time using OpenAI's DALL-E2 technology, ensuring unparalleled designs for your endeavors.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Features