import React from 'react'
// import './Image.css'
import chicken from "../assets/chicken.png";
import duck from "../assets/duck.png";
import dog from "../assets/dog.png";
import crab from "../assets/crab.png";
import fly from "../assets/fly.png";
import gooddog from "../assets/good-dog.png";
import cat from "../assets/cat.png";
import pet from "../assets/pet.png";
import pig from "../assets/pig.png";

const animals = [
  { id: 1, image: chicken },
  { id: 2, image: duck },
  { id: 3, image: dog },
  { id: 4, image: crab },
  { id: 5, image: fly },
  { id: 6, image: gooddog },
  { id: 7, image: cat },
  { id: 8, image: pet },
  { id: 9, image: pig },
  { id: 10, image: dog },
  { id: 11, image: crab },
  { id: 12, image: fly },
  { id: 13, image: gooddog },
  { id: 14, image: cat },
];

const Image = () => {
    return (
      <div className="w-full inline-flex flex-nowrap overflow-hidden mt-28">
        <div className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'>
        {animals.map((animal) => {
          return (
            <div key={animal.id} >
              <img src={animal.image} className=' w-56 h-56 bg-white object-cover mx-3 rounded-3xl' alt="" />
            </div>
          )
          })}
          </div>
          <div className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll' aria-hidden="true">
            {animals.map((animal) => {
              return (
                <div key={animal.id} >
                  <img src={animal.image} className='w-56 h-56 bg-white object-cover mx-3 rounded-2xl' alt="" />
                </div>
              )
              })}
          </div>
      </div>
    );
};

export default Image;