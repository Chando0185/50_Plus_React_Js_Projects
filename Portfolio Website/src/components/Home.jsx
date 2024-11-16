import React from "react";
import HeroImage from "../assets/main.jpg";
import { TypeAnimation } from "react-type-animation";
import SocialIcons from "./SocialIcons";
import Button from "./Button";
const Home = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6">
      <div className="md:w-1/2 flex justify-center">
        <img
          src={HeroImage}
          alt="Mishu"
          className="rounded-full w-48 sm:w-64 md:w-80 lg:w-[350px] xl:w-[400px] shadow-lg hover:scale-110 transition duration-300 hover:shadow-[0_0_15px_3px_rgba(255,0,0,0.8)]"
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
        <h1 className="text-4xl sm:text-7xl font-bold mb-4">
          Hi, It's <span className="text-red-500">MISHU</span>
        </h1>
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
          I'am a <span className="text-red-500">


        <TypeAnimation
        sequence={
          [
            "Software Enginner", 1000,
            "Machine Learning Developer", 1000,
            "Youtube Content Creator", 1000,
            "Full Stack Developer", 1000,
          ]
        }
        speed={50}
        style={{fontSize: "1re"}}
        repeat={Infinity}
        />


          </span>
        </h3>
        <p className="text-sm sm:text-lg mb-6">
          Mishu Dhar Chando is a passionate educator, technologist, and the CEO
          of the YouTube channel Knowledge Doctor. A graduate of the University
          of Science and Technology, Chittagong, Bangladesh, Mishu specializes
          in machine learning, deep learning, and natural language processing.
        </p>
        <SocialIcons></SocialIcons>
        <Button text="Hire Me" href="#"></Button>
      </div>
    </section>
  );
};

export default Home;
