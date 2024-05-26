export type TeamMemberType = {
  imageSrc: string;
  name: string;
  title: string;
  description: string;
  socialLinks: { href: string; icon: any }[];
};

export type SocialLink = {
  href: string;
  icon: any;
};

export type ProjectCardType = {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
};
