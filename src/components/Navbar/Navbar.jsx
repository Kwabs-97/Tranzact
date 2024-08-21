"use client";
import MenuIcon from "@/assets/icons/MenuIcon";
import ShoppingCartIcon from "@/assets/icons/ShoppingCartIcon";
import Profile from "@/assets/icons/UserRoundIcon";
import React from "react";

function Navbar({ useParams }) {
  return (
    <nav className="px-6 py-6 flex flex-row items-center justify-between w-screen">
      <div className="border border-orange-500 border-solid p-2 rounded-md">
        <span>DixstroBags</span>
      </div>
      <div className="flex flex-row gap-8">
        <ShoppingCartIcon />
        <Profile />
      </div>
    </nav>
  );
}

export default Navbar;
