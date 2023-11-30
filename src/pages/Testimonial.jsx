import React from 'react';
import cat from '../assets/cat.png';
import crab from '../assets/crab.png';
import pig from '../assets/pig.png';

const tests = [
  {
    id: 1,
    user: 'Aisha Khan',
    message:
      "I'm over the moon with PetGen! This pawsitively fantastic tool seamlessly churns out the most enchanting dog and cats icons, turning my design endeavors into a breezy and delightful journey.",
    pic: cat,
  },
  {
    id: 2,
    user: 'Sophia Miller',
    message:
      "PetGen is an absolute delight! It's a fountain of creativity that seamlessly transforms my concepts into endearing pet-centric illustrations. A big shoutout to the developers for making my art more engaging and enjoyable!",
    pic: crab,
  },
  {
    id: 3,
    user: 'Daniel Lee',
    message:
      "I'm over the moon with PetGen! This pawsitively fantastic tool seamlessly churns out the most enchanting dog and cats icons, turning my design endeavors into a breezy and delightful journey.",
    pic: pig,
  },
];

const Testimonial = () => {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 ml-5 dark:text-white">What our users say</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tests.map((test) => (
            <div
              key={test.id}
              className="p-6 dark:text-white"
            >
              <div className="mb-4  border-l-2 pl-5">"{test.message}"</div>
              <div className="flex items-center justify-start">
                <img src={test.pic} alt="" className="w-12 h-12 rounded-full mr-4 dark:bg-white" />
                <div>
                  <h2 className="text-xl font-bold">{test.user}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
