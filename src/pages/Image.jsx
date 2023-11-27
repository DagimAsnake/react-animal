import React from 'react'
import './Image.css'
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
      <div className="slider">
        <div className='slide-track'>
        {animals.map((animal) => {
            return (
              <div key={animal.id} className="slide">
                <img src={animal.image} className="" alt="" />
              </div>
            )
          })}
          </div>
      </div>
    );
};

export default Image;

