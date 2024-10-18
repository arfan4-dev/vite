import { ttCommonsMedium } from "@/utils/fonts";
import React from "react";

const TableHeader = ({ data }: any) => {
  return (
    <div>
      <div className="flex items-center justify-between pb-5 pt-4 px-10">
        <p
          className={`text-[20px] font-medium text-[#282F5A] ${ttCommonsMedium.className}`}
        >
          {" "}
          {data}
        </p>

        <form>
          <label className="mb-2 text-[12px]  font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4  dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className={`block w-[279.17px] ps-10 p-2 text-[14px]  text-gray-900 border-b border-gray-300  focus:ring-blue-500 focus:border-b-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-b-blue-500`}
              placeholder="Search"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TableHeader;
