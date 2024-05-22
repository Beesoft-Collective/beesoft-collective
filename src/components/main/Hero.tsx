import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="pb-6 pt-4 mb-6 mt-4 px-6" id="hero">
      <div className="container mx-auto grid md:grid-cols-2 items-center max-w-6xl">
        <div
          className="space-y-5 text-center md:text-left my-4"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1 className="text-primary font-black text-4xl md:text-5xl">
            Building the Future <br /> of Frontend,
            <br /> Together.
          </h1>
          <p className="text-primary text-md md:max-w-96">
            Join the Hive and help us shape the future of front-end development.
          </p>
          <div className="mt-4">
            <Link
              href="/#projects"
              className="text-white text-sm font-semibold border-2 rounded-md p-2 bg-secondary"
            >
              Explore our projects
            </Link>
          </div>
        </div>
        <div
          className="flex justify-center md:justify-end items-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="w-full max-w-md h-full">
            <Image
              src="/hero.jpg"
              alt="Hero Image"
              width={300}
              height={600}
              className="rounded-md w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
