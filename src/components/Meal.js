import React, { useState } from "react";

import { mealData } from "../data/data";
import { ArrowSmRightIcon } from "@heroicons/react/outline";

const Meal = () => {
  const [foods, setFoods] = useState(mealData);
  const filterCat = (category) => {
    setFoods(
      mealData.filter((item) => {
        return item.category === category;
      })
    );
  };
  return (
    <div className="max-w-[1520px] mx-auto px-4 py-12 ">
      <h1 className="text-orange-500 font-bold text-2xl text-center pt-2 pb-8">
        Our Meal
      </h1>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex justify-center md:justify-center">
          <button
            onClick={() => setFoods(mealData)}
            className="m-1 border-orange-500 font-bold text-white bg-orange-500 hover:bg-white hover:text-orange-500 hover:border-orange-500"
          >
            All
          </button>
          <button
            onClick={() => filterCat("pizza")}
            className="m-1 border-orange-500 font-bold text-white bg-orange-500 hover:bg-white hover:text-orange-500 hover:border-orange-500"
          >
            Pizza
          </button>
          <button
            onClick={() => filterCat("chicken")}
            className="m-1 border-orange-500 font-bold text-white bg-orange-500 hover:bg-white hover:text-orange-500 hover:border-orange-500"
          >
            Chicken
          </button>
          <button
            onClick={() => filterCat("salad")}
            className="m-1 border-orange-500 font-bold text-white bg-orange-500 hover:bg-white hover:text-orange-500 hover:border-orange-500"
          >
            Salad
          </button>
        </div>
      </div>
      <div className=" grid  sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4 pt-2 gap-6">
        {foods.map((item) => (
          <div
            key={item.id}
            className="border-none hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="object-cover h-[200px] w-full rounded-lg"
            />
            <div className="flex justify-between py-2 px-2">
              <p className="font-bold">{item.name}</p>
              <p className="bg-orange-500 h-18 w-18 rounded-full font-bold text-white -mt-10 py-4 px-3 border-8">
                {item.price}
              </p>
            </div>

            <div className="pl-2 py-4 -mt-7">
              <p className="flex items-center font-bold text-indigo-600">
                View More
                <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meal;
