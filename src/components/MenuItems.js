import { FaHome } from "react-icons/fa";
// import { FaInfo } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { MdEvent } from "react-icons/md";
import { IoAlbums } from "react-icons/io5";
import { BsInfoSquareFill } from "react-icons/bs";

export const MenuItems = [
  {
    title: "Start",
    url: "/",
    cName: "nav-links",
    icon: <FaHome />,
  },
  {
    title: "O nas",
    url: "/about",
    cName: "nav-links",
    icon: <BsInfoSquareFill />,
  },
  {
    title: "Plany",
    url: "/plany",
    cName: "nav-links",
    icon: <MdEvent />,
  },
  {
    title: "Kontakt",
    url: "/kontakt",
    cName: "nav-links",
    icon: <MdContactMail />,
  },
  {
    title: "Fototeka",
    url: "",
    cName: "nav-links",
    icon: <IoAlbums />,
    submenu: [
      { title: "Armenia", url: "/armenia", cName: "dropdown-link" },
      {
        title: "Wietnam",
        url: "/wietnam",
        cName: "dropdown-link",
      },
      {
        title: "Kambodża",
        url: "/kambodza",
        cName: "dropdown-link",
      },
      { title: "RPA", url: "/rpa", cName: "dropdown-link" },
    ],
  },
];
