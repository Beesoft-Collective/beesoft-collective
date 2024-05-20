import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section
      className="bg-gray-50 py-12 px-4"
      id="about"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="container mx-auto grid gap-6 text-center max-w-4xl">
        <h2 className="text-3xl text-primary font-bold">About Beehive</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          We are an organization focused on creating and maintaining open source
          software. Our main focus is front end technologies and frameworks.
        </p>
        <Image
          src="/beehive.jpg"
          alt="About Image"
          width={650}
          height={200}
          className="rounded-lg mx-auto"
        />
      </div>
    </section>
  );
};

export default About;
