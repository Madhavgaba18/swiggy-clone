import Image from "next/image";
import React from "react";

export default async function Cards(data: any) {
  console.log(data, "--------");

  return (
    <div className="flex justify-between mx-8">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Image
          width={500}
          height={500}
          className="p-8 rounded-t-lg"
          src="/next.svg"
          alt="product image"
        />

        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              $599
            </span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Image
          width={500}
          height={500}
          className="p-8 rounded-t-lg"
          src="/next.svg"
          alt="product image"
        />

        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              $599
            </span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Image
          width={500}
          height={500}
          className="p-8 rounded-t-lg"
          src="/next.svg"
          alt="product image"
        />

        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              $599
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
