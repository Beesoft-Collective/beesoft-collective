import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectCardType } from "@/../types";

const ProjectCard: React.FC<ProjectCardType> = ({
  imageSrc,
  title,
  description,
  link,
}) => {
  return (
    <div className="shadow mx-auto space-y-2 bg-gray-50 p-6 rounded-lg">
      <Image
        src={imageSrc}
        alt="Hero Image"
        width={400}
        height={400}
        className="rounded-md"
      />
      <h3 className="text-primary font-black text-2xl">{title}</h3>
      <p className="text-primary text-sm m">{description}</p>
      <div className="mt-4">
        <Link
          href={link}
          className="text-primary text-sm font-semibold border-2 rounded-md p-2 mt-12"
        >
          Visit page
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
