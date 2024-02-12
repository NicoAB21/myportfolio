"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/image/logonico.png";
import github from "../../app/image/logo-github.png";
import linkedin from "@/app/image/logo-linkedin.png";
import twitter from "@/app/image/logo-twitter.png";
import nico from "@/app/image/logonico.png";
import download from "@/app/image/logo-downloaddowload.png";

import "./style.css";

const Navbar = () => {
  return (
    <div>
      <title>Portfolio</title>
      <div className="navbar">
        <div className="link-pages">
          <Link href="/" className="link home">
            <Image src={logo} alt="logo" width={50} height={50} />
          </Link>
          <Link href="/#aboutme" className="link aboutme">
            About Me
          </Link>
          <Link href="/#projects" className="link myprojects">
            My Projects
          </Link>
          <Link href="/#contact" className="link test">
            Contact
          </Link>
        </div>
        <div className="link-medias">
          <a
            href="https://twitter.com/NicoCarameL_"
            target="_blank"
            className="link media"
          >
            <Image src={twitter} width={40} height={40} alt="logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/nicolas-archambault-bonnet"
            target="_blank"
            className="link media"
          >
            <Image src={linkedin} width={40} height={40} alt="logo" />
          </a>
          <a
            href="https://github.com/NicoAB21"
            target="_blank"
            className="link media"
          >
            <Image src={github} width={40} height={40} alt="logo" />
          </a>
          <a href="/CV.pdf" download="CV.pdf" className="link media">
            <Image src={download} width={40} height={40} alt="logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
