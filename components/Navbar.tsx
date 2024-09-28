"use client";
import Link from "next/link";
import { useState } from "react";
import { BsSearch, BsCart } from "react-icons/bs";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  const cartItems = ["Search", "Offers", "Help"]

  return (
    <div>
      <div className="w-full h-20 top-0 flex justify-between items-center sticky shadow-md bg-white z-[1001]">
      <div className="container mx-auto max-w-screen-xl flex justify-between p-6">
        <Link href="/">
          <div className="text-2xl font-bold text-primaryRed">QuickBite</div>
        </Link>

        <div className="md:hidden flex items-center gap-3">
          <Link
            href="/cart"
            className="flex items-center gap-2 text-lg hover:text-hoverRed"
            onClick={()=>setOpen(false)}
          >
            <BsCart /> Cart {`(${cartItems.length})`}
          </Link>
          <button >
            {open ? (
              <MdOutlineClose className="text-2xl" />
            ) : (
              <AiOutlineMenu className="text-2xl" />
            )}
          </button>
        </div>

        <ul className="hidden md:flex items-center gap-10 lg:gap-15">
          <Link href="/search">
            <li className="flex items-center gap-2 text-lg hover:text-hoverRed">
              <BsSearch /> Search
            </li>
          </Link>
          <Link href="/offers">
            <li className="flex items-center gap-2 text-lg hover:text-hoverRed">
              <RiDiscountPercentLine />
              Offers
            </li>
          </Link>
          <Link href="/help">
            <li className="flex items-center gap-2 text-lg hover:text-hoverRed">
              <IoHelpBuoyOutline /> Help
            </li>
          </Link>
          <Link href="/signin">
            <li className="flex items-center gap-2 text-lg hover:text-hoverRed">
              <FaRegUser /> Sign In
            </li>
          </Link>
          <Link href="/cart">
            <li className="flex items-center gap-2 text-lg hover:text-hoverRed">
              <BsCart /> Cart {`(${cartItems.length})`}
            </li>
          </Link>
        </ul>
        {open && (
          <div
            className={`md:hidden fixed top-[75px] right-0 h-full w-3/4 bg-white shadow-lg overflow-y-auto z-[1000] transform transition-all duration-30000s`}
          >
            <ul className="my-6 space-y-4 text-lg">
              <li className="px-4 py-2 border-b">
                <Link
                  href="/search"
                  className="w-auto block"
                  
                >
                  Search
                </Link>
              </li>
              <li className="px-4 py-2 border-b">
                <Link
                  href="/offers"
                  className="w-auto block"
                  
                >
                  Offers
                </Link>
              </li>
              <li className="px-4 py-2 border-b">
                <Link
                  href="/help"
                  className="w-auto block"
                  
                >
                  Help
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}
