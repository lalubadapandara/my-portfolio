// src/pages/Contact.jsx
import { motion } from "framer-motion";
import React from "react";

const Contact = () => {
  return (
    <section className="w-full">
      <div className="flex justify-between w-full items-center pt-[42px] pb-[42px] pl-[24px] pr-[24px] gap-5 max-md:flex-col">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.3,
            damping: 20,
          }}
          className="flex flex-col w-[50%] max-md:w-full"
        >
          <h1 className="text-start text-4xl font-semibold pb-[24px]">
            Let's Work Together
          </h1>
          <p className="mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            blanditiis perferendis possimus ducimus, maxime labore? Natus
            cupiditate tenetur quis voluptates eligendi nemo ipsam fuga neque
            magnam. Nesciunt temporibus sint numquam.
          </p>
          <div className="flex items-center justify-start gap-5">
            <img src="/discord.svg" alt="Discord" />
            <img src="/dribbble.svg" alt="Dribbble" />
            <img src="/fb.svg" alt="Facebook" />
            <img src="/insta.svg" alt="Instagram" />
            <img src="/behance.svg" alt="Behance" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.3,
            damping: 20,
          }}
          className="flex flex-col w-[50%] gap-3 items-start justify-start max-md:w-full"
        >
          <input
            type="text"
            placeholder="Name"
            className="p-4 bg-[#f0f8ff] outline-0 w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-4 bg-[#f0f8ff] outline-0 w-full"
          />
          <button className="bg-[#2D2D2D] cursor-pointer text-white p-4 w-[150px] h-[55px] flex items-center justify-center">
            Submit
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
