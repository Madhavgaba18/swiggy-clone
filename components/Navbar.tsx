"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <nav className="bg-white sticky w-full z-20 top-0 start-0 shadow-md">
        <div className="flex items-center justify-between py-4 md:px-6 px-3">
          <div className="text-primaryRed font-okra text-2xl font-bold">
            QuickBite
          </div>
          <div>
            <div className="flex md:hidden space-x-1 md:space-x-0">
              <Link
                href={"/cart"}
                className="inline-flex justify-between gap-1 hover:text-primaryRed font-normal rounded-lg text-lg md:text-xl pl-4 py-2 text-center"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6  "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </div>
                <div>Cart</div>
                <div>(0)</div>
              </Link>

              <button
                onClick={() => setOpen(!open)}
                type="button"
                className="items-center p-2 w-10 h-10 justify-center text-sm rounded-lg hover:bg-gray-100 "
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`${
                open ? "inline-flex" : "hidden"
              } w-full md:flex md:w-auto`}
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium shadow-md md:shadow-none rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                <Link
                  href={"/search"}
                  className="block py-2 px-3 rounded md:p-0 hover:text-primaryRed cursor-pointer"
                >
                  Search
                </Link>
                <Link
                  href={"/offers"}
                  className="block py-2 px-3 rounded md:p-0 hover:text-primaryRed cursor-pointer"
                >
                  Offers
                </Link>
                <Link
                  href={"/help"}
                  className="block py-2 px-3 rounded md:p-0 hover:text-primaryRed cursor-pointer"
                >
                  Help
                </Link>
                <Link
                  href={"/signin"}
                  className="block py-2 px-3 rounded md:p-0 hover:text-primaryRed cursor-pointer"
                >
                  Sign In
                </Link>
                <Link
                  href={"/signin"}
                  className="flex justify-between gap-1 py-2 px-3 rounded md:p-0 hover:text-primaryRed cursor-pointer"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </div>
                  <div>Cart</div>
                  <div>(0)</div>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
