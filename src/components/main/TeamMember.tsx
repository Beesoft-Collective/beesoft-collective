import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { TeamMember } from "@/../types";

const TeamMember: React.FC<TeamMember> = ({
  imageSrc,
  name,
  title,
  description,
  socialLinks,
}) => {
  return (
    <div className="text-center">
      <Image
        src={imageSrc}
        alt="Hero Image"
        width={150}
        height={150}
        className="rounded-full aspect-square object-cover mb-4 mx-auto"
      />
      <h3 className="text-xl font-bold text-primary">{name}</h3>
      <p className="mb-2 text-primary">{title}</p>
      <p className="text-gray-500">{description}</p>
      <div className="flex justify-center space-x-1">
        {socialLinks.map((link) => (
          <Link href={link.href} key={link.icon}>
            <FontAwesomeIcon
              icon={link.icon}
              className="text-gray-500 hover:text-blue-500 fa-icon size-4 mx-1"
              color="black"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
