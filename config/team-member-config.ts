import { TeamMemberType } from "@/../types";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const TeamMemberItems: TeamMemberType[] = [
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

export default TeamMemberItems;
