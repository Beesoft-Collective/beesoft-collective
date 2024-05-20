import React from "react";
import TeamMember from "./TeamMember";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

interface TeamMemberData {
  imageSrc: string;
  name: string;
  title: string;
  description: string;
  socialLinks: { href: string; icon: any }[];
}

const Team: React.FC = () => {
  const teamMembers: TeamMemberData[] = [
    {
      imageSrc: "/brandon-trabon.jpg",
      name: "Brandon Trabon",
      title: "Founder, Software Engineer",
      description: "",
      socialLinks: [
        {
          href: "https://linkedin.com/in/brandontrabon/",
          icon: faLinkedin,
        },
        { href: "https://x.com/brandon_trabon", icon: faTwitter },
        { href: "https://github.com/brandontrabon", icon: faGithub },
      ],
    },
    {
      imageSrc: "/opeyemi-esan.jpg",
      name: "Opeyemi Esan",
      title: "Software Engineer",
      description: "",
      socialLinks: [
        {
          href: "https://linkedin.com/in/opeyemi-esan-a41512197/",
          icon: faLinkedin,
        },
        { href: "https://x.com/Enop7156", icon: faTwitter },
        { href: "https://github.com/Opeyemi-Esan", icon: faGithub },
      ],
    },
    {
      imageSrc: "/salem-olorundare.jpeg",
      name: "Salem Olorundare",
      title: "Software Engineer",
      description: "",
      socialLinks: [
        {
          href: "https://linkedin.com/in/salem-olorundare/",
          icon: faLinkedin,
        },
        { href: "https://x.com/thectogeneral", icon: faTwitter },
        { href: "https://github.com/thectogeneral", icon: faGithub },
      ],
    },
  ];

  return (
    <div className="py-12 my-12 mx-auto max-w-8xl px-4" id="team">
      <div className=" max-w-4xl mx-auto">
        <div
          className="items-center max-w-2xl mx-auto mb-16"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h2 className="text-primary font-black text-4xl text-center">
            Our Development Team
          </h2>
          <p className="text-primary text-md text-center mt-4">
            Get to Know the Hive: The brilliant minds collaborating on the
            future of front-end development. Meet the passionate team behind
            Beehive!
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {teamMembers.map((member) => (
            <TeamMember
              key={member.name}
              imageSrc={member.imageSrc}
              name={member.name}
              title={member.title}
              description={member.description}
              socialLinks={member.socialLinks}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
