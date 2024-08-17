import React from "react";
import Link from "next/link";

import homeIcon from "../../../public/assets/icons/home.svg";
import userIcon from "../../../public/assets/icons/user.svg";
import Image from "next/image";

function Navbar({ useParams }) {
  const links = [
    {
      icon: homeIcon,
      link: "/",
    },
    {
      icon: userIcon,
      link: "/profile",
    },
  ];
  return (
    <nav>
      <ul className="flex flex-row items-center">
        {links.map((link) => {
          return (
            <li key={link.link} className="px-4">
              <Image src={link.icon} alt={link.link}>
                <Link href={link.link}>{link.link}</Link>
              </Image>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
