import React from "react";
import {  BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { FiInstagram, FiMail } from "react-icons/fi";
import { bannerImg } from "../../assets/index";

const Left = () => {
  return (
    <div className="w-5/12 h-full bg-bodyColor rounded-2xl">
      <div className="w-full h-3/5">
        <img
          className="w-[full] h-full object-cover rounded-2xl"
          src={bannerImg}
          alt="bannerImg"
        />
      </div>
      <div className="w-full h-2/5">
        {/* contain the intro */}
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-texColor text-4xl font-semibold">Christian Awelakoue</h1>
          <p className="text-base text-designColor tracking-wide">SysAdmin</p>
          <div className="flex gap-2 justify-center mt-2">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">< FaGithub /></span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">< FaLinkedin /></span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">< SiYoutubemusic /></span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">< BsFacebook  /></span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">< FiInstagram /></span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">< FiMail /></span>
          </div>
        </div>
        {/* buttons */}
        <div></div>
      </div>
    </div>
  );
};

export default Left;
