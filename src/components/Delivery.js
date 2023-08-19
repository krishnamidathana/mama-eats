import React from "react";

const Delivery = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h3 className="text-orange-500 font-bold text-2xl text-center">
        Quick Delivery App
      </h3>
      <div className="max-w-[1240px] w-[97%]   mx-auto grid md:grid-cols-2 ">
        <img
          className="w-[550px] mx-auto my-4 "
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
          alt="phonepic"
        />
        <div className="flex flex-col  justify-center">
          <p className="text-[#00df9d] font-bold ">Get The App</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 ">
            Limitless Convenience on-demand
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In ut
            aliquam aliquid voluptatum aut autem eius, debitis atque reiciendis?
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quos harum provident officia
            aspernatur? Amet dolorem repudiandae voluptates doloremque at sequi.
            adipisicing elit. Cum dolor iure quia sequi quae fuga architecto a
            doloremque aperiam eos? Ad nulla eveniet veniam a, vitae velit
            soluta porro hic voluptatibus.
          </p>
          <button className="bg-black text-[#00df9d] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
