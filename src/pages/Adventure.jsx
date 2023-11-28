import React from 'react'
import shot from "../assets/Shot.png"
import { RiRobot2Line } from "react-icons/ri";

const Adventure = () => {
  return (
    <>
        <div className='bg-gray-100 dark:bg-gray-900 mt-10 px-4 pb-16 md:px-20'>
            <h1 className='text-4xl md:text-5xl pt-16 pb-12 md:pb-24 font-semibold dark:text-white text-center'>Em-bark on Icon Adventures with PetGen!</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-14' > 
                <div>
                    <RiRobot2Line className='text-4xl dark:text-white font-bold' />
                    <h1 className='text-2xl font-bold dark:text-white mb-5'>Create your own pets!</h1>
                    <p className='text-base md:text-2xl dark:text-white'>Unleash your creativity with our AI pet icon generator! Choose your beloved pet, breed, style, colour, and pose to craft the perfect, unique pet icon. And the best part? You can generate a whole menagerie of these charming icons effortlessly, infusing endless animal magic into your projects!</p>
                </div>

                <div className='col-span-2'>
                    <img src={shot} alt="" className='h-full w-full rounded-3xl' />
                </div>
            </div>
        </div>
    </>
  )
}

export default Adventure