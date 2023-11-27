import React from 'react'
import fly from "../assets/fly.png";
import { CiLocationArrow1 } from "react-icons/ci";
import { RiRobot2Line } from "react-icons/ri";
import { GoGear } from "react-icons/go";
import { CiShare2 } from "react-icons/ci";

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
                                    <p className='text-md md:text-xl dark:text-white'>Breed</p>
                                    <CiLocationArrow1 className='dark:text-white' />
                                </div>
                                <p className='text-xl md:text-2xl font-semibold dark:text-white'>Akita</p>
                            </div>

                            <div className='w-full lg:w-80 p-2 md:p-4 border-2 dark:border-gray-800 rounded-xl'>
                                <div className='flex justify-between items-center'>
                                    <p className='text-md md:text-xl dark:text-white'>Prompt</p>
                                    <CiLocationArrow1 className='dark:text-white' />
                                </div>
                                <p className='text-xl md:text-2xl font-semibold dark:text-white'>Nothing</p>
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-1 m-5'>
                            <div className='w-full md:w-80 p-2 md:p-4 border-2 dark:border-gray-800 rounded-xl'>
                                <div className='flex justify-between items-center'>
                                    <p className='text-md md:text-xl dark:text-white'>Style</p>
                                    <CiLocationArrow1 className='dark:text-white' />
                                </div>
                                <p className='text-xl md:text-2xl font-semibold dark:text-white'>Anime</p>
                            </div>

                            <div className='w-full lg:w-80 p-2 md:p-4 border-2 dark:border-gray-800 rounded-xl'>
                                <div className='flex justify-between items-center'>
                                    <p className='text-md md:text-xl dark:text-white'>Colour</p>
                                    <CiLocationArrow1 className='dark:text-white' />
                                </div>
                                <p className='text-xl md:text-2xl font-semibold dark:text-white'>Brindle</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:mt-20'>
                    <div>
                        <RiRobot2Line className='text-4xl dark:text-white font-bold' />
                        <h1 className='text-3xl font-bold dark:text-white mb-5'>AI Powered:</h1>
                        <p className='text-lg dark:text-white'>Craft distinct pet icons each time using OpenAI's DALL-E2 technology, ensuring unparalleled designs for your endeavors.</p>
                    </div>

                    <div className='my-8'>
                        <CiShare2 className='text-4xl dark:text-white font-bold' />
                        <h1 className='text-3xl font-bold dark:text-white mb-5'>Customization:</h1>
                        <p className='text-lg dark:text-white'>Effortlessly tailor your pet icons with our user-friendly tools, enabling you to modify hues, designs, and movements.</p>
                    </div>

                    <div>
                        <GoGear className='text-4xl dark:text-white font-bold' />
                        <h1 className='text-3xl font-bold dark:text-white mb-5'>High-Quality Output</h1>
                        <p className='text-lg dark:text-white'>Grab your pet icons in crisp high-resolution PNG format for web use or share direct links with your friends.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Features