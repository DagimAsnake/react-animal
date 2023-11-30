import React from 'react';
import { FaRegCheckCircle } from "react-icons/fa";

const prices = [
  {
    id: 1,
    package: 'Trial',
    message: 'For personal use and exploration of AI technology.',
    title: 'Free',
    include: ['5 included credits', 'Personal Gallery', 'Downloadable PNGs'],
  },
  {
    id: 2,
    package: 'Premium',
    message: 'Perfect for advanced users and pet art lovers.',
    title: '$9.99/month',
    include: ['100 included credits', 'Personal Gallery', 'Downloadable PNGs', 'No Watermark'],
  },
  {
    id: 3,
    package: 'Professional',
    message: 'Perfect for businesses and advanced users looking for a premium service.',
    title: '$19.99/month',
    include: [
      'Unlimited credits',
      'Professional Gallery',
      'Downloadable PNGs',
      'No Watermark',
      'Hi-Res Downloadable PNGs',
    ],
  },
];

const Pricing = () => {
    return (
      <div className="py-12">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-5xl font-bold mb-6 ml-5 dark:text-white">Pricing</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {prices.map((price) => (
              <div
                key={price.id}
                className="border border-gray-300 p-6 rounded-md transition-transform transform mx-10 md:mx-0 hover:border-2 dark:border-black dark:text-white dark:bg-gray-800 hover:bg-gray-100 hover:border-black hover:scale-105 flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-2xl font-bold">{price.package}</h2>
                  <p className="text-gray-500 text-sm mb-4 dark:text-yellow-50">{price.message}</p>
                  <h3 className="text-2xl font-extrabold mb-4">{price.title}</h3>
                  <div className="list-disc list-inside mb-6">
                    {price.include.map((feature, index) => (
                      <div className="flex items-center border-b mb-2" key={index}>
                        <FaRegCheckCircle className="mr-3 text-3xl pb-2" />
                        <p className="text-gray-600 pb-2 dark:text-yellow-50">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Pricing;
