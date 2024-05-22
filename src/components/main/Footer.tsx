import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { LogoIconTransparent } from "@/icons";

const Footer = () => {
  return (
    <footer
      className="mt-2 max-h-3xl bg-primary px-4 mx-auto max-w-8xl pb-4"
      id="footer"
    >
      <div className="mx-auto pt-16 max-w-5xl px-6 grid gap-10 grid-cols-1 md:grid-cols-3 items-center">
        <div className="my-auto justify-self-center md:justify-self-start">
          <Link href="/">
            <LogoIconTransparent />
          </Link>
        </div>
        <div className="md:flex md:col-start-2 md:col-span-1 justify-center md:space-x-8 md:justify-between mx-auto">
          <Link href="/" className="text-sm text-slate-50 font-semibold px-2">
            Home
          </Link>
          <Link
            href="/#projects"
            className="text-sm text-slate-50 font-semibold px-2"
          >
            Projects
          </Link>
          <Link
            href="/#team"
            className="text-sm text-slate-50 font-semibold px-2"
          >
            Team
          </Link>
        </div>

        <div className="flex justify-center md:justify-self-end">
          <Link href="https://twitter.com/bsoft_collectiv">
            <FontAwesomeIcon
              icon={faTwitter}
              className="fa-icon size-4 mx-2"
              color="white"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/beehive-software/">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="fa-icon size-4 mx-2"
              color="white"
            />
          </Link>
          <Link href="https://github.com/Beehive-Software-Consultants">
            <FontAwesomeIcon
              icon={faGithub}
              className="fa-icon size-4 mx-2"
              color="white"
            />{" "}
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-20 max-w-4xl">
        <hr className="text-white" />
        <p className="pt-8 text-sm text-center text-slate-50">
          © Copyright 2024, All Rights Reserved by Beehive.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
