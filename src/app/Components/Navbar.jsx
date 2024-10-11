"use client";
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { IoLocationOutline, IoReorderThree } from "react-icons/io5";
import { BiSolidDiscount } from "react-icons/bi";
import {
  FaAngleLeft,
  FaBasketShopping,
  FaFireFlameCurved,
} from "react-icons/fa6";
import { TbDiscount } from "react-icons/tb";
import { CiMobile1 } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../Redux/Category/CategorySlice";
import clsx from "clsx";
export default function Navbar() {
  const [Product, setProduct] = useState({
    id: "1",
    Icon: "CiMobile1",
    CategoryName: "موبایل",
    CategoryItems: [
      {
        id: 1,
        Title: "برند های مختلف گوشی مبایل",
        links: [
          "گوشی آیفون",
          "گوشی سامسونگ",
          "گوشی شیایومی",
          "گوشی نوکیا",
          "گوشی آنر",
          "گوشی ناتینگ فون",
          "گوشی تی سی ال",
        ],
      },
      {
        id: 2,
        Title: "گوشی بر اساس قیمت",
        links: [
          "گوشی مبایل ارزان",
          "گوشی مبایل متوسط",
          "گوشی تا 2 میلیون تومان",
          "گوشی تا 5 میلیون تومان",
          "گوشی تا 7 میلیون تومان",
          "گوشی تا 15 میلیون تومان",
          "گوشی بالای 15 میلیون تومان",
        ],
      },
      {
        id: 3,
        Title: "گوشی براساس عملکرد",
        links: [
          "گوشی گیمینگ",
          "گوشی دکمه ای",
          "گوشی ضد آب",
          "گوشی مناسب عکاسی",
        ],
      },
      {
        id: 4,
        Title: "لوازم جانبی",
        links: [
          "شارژر گوشی",
          "قاب و کاور گوشی",
          "گلس گوشی",
          "هولدر گوشی",
          "کابل و شارژ مبدل",
          "پاور بانک",
        ],
      },
      {
        id: 5,
        Title: "تبلت",
        links: [
          "تبلت اپل",
          "تبلت سامسونگ",
          "تبلت شیایومی",
          "تبلت لنوو",
          "تبلت مایکروسافت",
          "تبلت دانش آموزی",
        ],
      },
    ],
  });
  const [active, setActive] = useState(1);
  const dispatch = useDispatch();
  const { Category } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);
  const hoverEffect = (id) => {
    setActive(id);
    const singleProduct = Category.find((item) => item.id === id);
    setProduct(singleProduct);
  };
  return (
    <div className="w-full flex items-center justify-between px-3">
      <div className="flex items-center space-x-1">
        <span className="text-sm">لطفا شهر خود را وارد کنید</span>
        <IoLocationOutline size={20} />
      </div>
      <div className="flex items-center">
        <div className="flex items-center border-r pr-2 border-gray-600">
          <ul className="flex items-center space-x-4">
            <li>
              <a className="link" href="#">
                !در دیجیکالا بفروشید
              </a>
            </li>
            <li>
              <a className="link" href="#">
                سوالی دارید؟
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center border-r pr-2 pl-2 border-gray-600">
          <ul className="flex items-center space-x-4">
            <li>
              <a className="link flex items-center space-x-1" href="#">
                <span>تخفیف ها و پیشنهاد ها</span>
                <BiSolidDiscount size={20} />
              </a>
            </li>
            <li>
              <a className="link flex items-center space-x-1" href="#">
                <span>پرفروش ترین ها</span>
                <FaFireFlameCurved size={20} />
              </a>
            </li>
            <li>
              <a className="link flex items-center space-x-1" href="#">
                <span>سوپر مارکت </span>
                <FaBasketShopping size={20} />
              </a>
            </li>
            <li>
              <a className="link flex items-center space-x-1" href="#">
                <span>شگفت انگیز ها</span>
                <TbDiscount size={20} />
              </a>
            </li>
          </ul>
        </div>
        <div className="category ">
          <div className=" link text-sm flex items-center pl-2">
            <span className="text-black font-bold"> دسته بندی ها</span>
            <IoReorderThree className="text-black font-bold" size={20} />
          </div>
        </div>
        <div className="categoryContainer absolute right-3 top-[15%]  w-1/2 h-[400px] z-50">
          <div className="flex w-full h-full">
            <div className="catgoryItems flex flex-col items-end justify-between w-4/5 h-full bg-white overflow-y-scroll">
              <a
                className="text-sm text-blue-400 font-semibold mr-4 mt-4"
                href=""
              >
                همه محصولات {Product.CategoryName}
              </a>
              <div className="flex flex-row justify-around items-start flex-wrap">
                {Product.CategoryItems.map((item) => {
                  return (
                    <div className="flex flex-col justify-between items-center flex-wrap">
                      <a
                        className="flex items-center pr-1 font-bold border-r-2 border-red-600"
                        href=""
                      >
                        <FaAngleLeft className="pt-1" />
                        {item.Title}
                      </a>
                      <div className="flex flex-col justify-center items-center">
                        {item.links.map((link) => {
                          return <a href="">{link}</a>;
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col justify-between items-center categoryNames w-1/5 h-full bg-gray-300 overflow-scroll scrollbar-none ">
              {Category.map((elem) => {
                return (
                  <div
                    onMouseOver={() => hoverEffect(elem.id)}
                    key={elem.id}
                    className={clsx(
                      "flex items-center justify-end w-full h-[40px] space-x-3 pr-3 transition duration-100",
                      {
                        "text-red-600  bg-white ": active === elem.id,
                        "text-black": active !== elem.id,
                      }
                    )}
                  >
                    {elem.CategoryName}
                    <CiMobile1 />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
