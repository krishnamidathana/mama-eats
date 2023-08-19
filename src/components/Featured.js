import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Featured = () => {
  const sliders = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const next = () => {
    const isSecondSlide = currentIndex === sliders.length - 1;
    const newIndex = isSecondSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const moveToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1520px] h-[400px]  w-[97%] mb-9 mt-2  mx-auto    relative group">
      <div
        className="  absolute w-full  h-full  rounded-2xl bg-center bg-cover duration-500  "
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      ></div>

      <div className="hidden group-hover:block absolute  top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prev} />
      </div>

      <div className=" hidden group-hover:block absolute  top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
        <BsChevronCompactRight onClick={next} />
      </div>

      <div className="flex  bottom-[-50px] mx-auto w-full   justify-center  absolute">
        {sliders.map((sliderItems, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => moveToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
