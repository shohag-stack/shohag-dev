import google from "@/icons/google.svg";
import meta from "@/icons/meta.svg";
import {
  FaDribbble,
  FaBehance,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import youtube from "@/icons/youtube.svg";
import { FaXTwitter } from "react-icons/fa6";
import designCourse from "@/icons/designCourse.svg";
import XD from "@/icons/tools/xd.svg";

export const socials = [
  // {
  //   icon: FaXTwitter,
  //   label: "X (formerly twitter)",
  //   handle: "@shohag4y",
  //   bg: "#141414",
  //   url: "https://x.com/shohag4y",
  // },
  {
    icon: FaGithub,
    label: "GitHub",
    handle: "shohag-stack",
    bg: "#141414",
    url: "https://github.com/shohag-stack",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    handle: "@shohag-stack",
    bg: "#161b22",
    url: "https://linkedin.com/in/shohag4y",
  },
  {
    icon: FaDribbble,
    label: "Dribbble",
    handle: "@shohag4y",
    bg: "#ea4c89",
    url: "https://dribbble.com/shohag4y",
  },
  {
    icon: FaBehance,
    label: "Behance",
    handle: "@shohag4y",
    bg: "#0057ff",
    url: "https://behance.net/shohag4y",
  },
];

export const achievements = [
  {
    icon: google,
    bg: "#4285f4",
    title: "Foundations of User Experience (UX) Design",
    date: "April 2021",
    link: "https://www.coursera.org/account/accomplishments/verify/LB58P9JBU4JG",
  },
  {
    icon: meta,
    bg: "#0081fb",
    title: "Programming with JavaScript",
    date: "Feb 2024",
    link: "https://www.coursera.org/account/accomplishments/verify/75CDKL4CT9TE",
  },
];

export const featured = [
  {
    icon: designCourse,
    bg: "#2d2d2d",
    title: "DesignCourse",
    date: "Feb 2021",
    brand: youtube,
    link: "https://www.youtube.com/watch?v=nL5M0qGN5RM",
  },
  {
    icon: XD,
    bg: "#ff61f6",
    title: "Adobe XD",
    date: "April 2020",
    brand: FaXTwitter,
    link: "https://x.com/AdobeXD/status/1245848732131889153?fbclid=IwAR17WS8qIlR15Ng18pi0MqYtq01iWPOvi8CO2TvzBe4YgeBnvvnpq5tJTks",
  },
];
