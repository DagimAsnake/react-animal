import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";
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
      <div className="flex space-x-4 mt-28 overflow-hidden">
        {animals.map((animal) => (
          <motion.div
            key={animal.id}
            className="w-48 h-48 mx-2 relative rounded-lg overflow-hidden"
            style={{
              backgroundImage: `url(${animal.image})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              left: 0,
              top: 0,
            }}
            animate={{ left: '-100%' }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>
    );
};

export default Image;
