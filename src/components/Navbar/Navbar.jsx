"use client";
import MenuIcon from "@/assets/icons/MenuIcon";
import ShoppingCartIcon from "@/assets/icons/ShoppingCartIcon";
import Profile from "@/assets/icons/UserRoundIcon";
import React from "react";
import { useAppSelector } from "@/lib/hooks";
import { selectCart } from "@/lib/features/cart/cart-slice";

function Navbar({ useParams }) {
  const cartValue = useAppSelector(selectCart);
  return (
    <nav className="px-6 py-6 flex flex-row items-center justify-between w-screen">
      <div className="border border-orange-500 border-solid p-2 rounded-md">
        <span>DixstroBags</span>
      </div>
      <div className="flex flex-row gap-8">
        <div id="cart" className=" relative">
          {cartValue > 0 && (
            <div className="rounded-full bg-gray-200 text-black absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center text-xs">
              {cartValue}
            </div>
          )}

          <ShoppingCartIcon />
        </div>
        <Profile />
      </div>
    </nav>
  );
}

export default Navbar;
