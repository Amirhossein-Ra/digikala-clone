import React from "react";
import { TbLogin } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
export default function TopNav() {
  return (
    <div className="flex items-center justify-between space-x-4 py-3 px-2">
      <div className="flex items-center space-x-3 mr-[400px]">
        <div className="">
          <FiShoppingCart size={23} />
        </div>
        <div className="flex items-center border border-gray-600 p-2 space-x-1 rounded-md">
          <span className="text-sm font-semibold border-r-2 border-gray-600 px-2">
            ثبت نام
          </span>
          <span className="text-sm font-semibold  px-1 ">ورود</span>
          <TbLogin size={23} />
        </div>
      </div>
      <div className="w-[40%] flex items-center ltr:flex-1 py-2 px-1 rounded-md bg-[#f0f0f1] space-x-1">
        <input
          className="flex-1 bg-[#f0f0f1]  placeholder:text-gray-600 placeholder:text-sm py-2"
          dir="rtl"
          type="text"
          placeholder="جستوجو"
        />
        <CiSearch size={20} />
      </div>

      <div className=""></div>
      <div className="">
        <img className="h-10" src="./images/full-horizontal.png" alt="Logo" />
      </div>
    </div>
  );
}
