// components/Footer.js
import React from "react";
import { FaInstagram, FaPinterest, FaTiktok, FaYoutube } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiGlobe,
  FiYoutube,
} from "react-icons/fi";

const socialLinks = [
  {
    id: 1,
    icon: <FaInstagram />,
    url: "https://www.instagram.com/mindful.manifesters",
  },
  {
    id: 2,
    icon: <FaPinterest />,
    url: "https://za.pinterest.com/mindfulmanifesters/",
  },
  {
    id: 3,
    icon: <FaTiktok />,
    url: "https://www.tiktok.com/@mindful.manifeste",
  },
  {
    id: 4,
    icon: <FaYoutube />,
    url: "https://www.youtube.com/channel/UCm57A4zeMQqhA_LQYjFEG9A",
  },
  {
    id: 4,
    icon: <MdOutlineMailOutline />,
    url: "https://mailto:lyd.research@gmail.com",
  },
];

const Footer = () => {
  return (
    <div className="container mx-auto" style={{ marginTop: -90 }}>
      <div className="pt-10 sm:pt-10 pb-2 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
        {/* Footer social links */}
        <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
          <p className="text-xl sm:text-xl font-semibold text-primary-dark dark:text-primary-light mb-5">
            © 2024 Mindful
          </p>
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
              >
                <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
