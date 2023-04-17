import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsFacebook, BsCloudLightning } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import { bannerImg } from "../../assets/index";
import CV from "../../assets/work/Christian_Awelakoue.pdf";

const Left = () => {
  const [job] = useTypewriter({
    words: ["Linux SysAdmin", "FrontEnd Dev", "Aspiring DevOps"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

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
          <h1 className="text-texColor text-4xl font-semibold px-2">
            Christian Awelakoue
          </h1>
          <p className="text-base text-designColor tracking-wide">
            {job}
            <Cursor cursorBlinking="false" cursorStyle=" | " />
          </p>
          <div className="flex gap-2 justify-center mt-2">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaGithub />
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaLinkedin />
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <AiFillTwitterCircle />
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <BsFacebook />
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FiInstagram />
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FiMail />
            </span>
          </div>
        </div>
        {/* buttons */}
        <div className="flex h-14">
          <a
            className="w-1/2 borderRight borderTop text-sm tracking-wide hover:text-designColor duration-300"
            href={CV}
            target="_blank"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center  items-center gap-2 uppercase">
              Download CV <BsCloudLightning />
            </button>
          </a>
          <button className="w-1/2 h-full flex justify-center items-center gap-2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase hover:text-designColor duration-300">
            Contact me <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
