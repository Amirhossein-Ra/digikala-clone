"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStories } from "../Redux/Stories/StorySlice";

export default function Stories() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStories());
  }, []);
  const { Stories } = useSelector((state) => state.stories);

  return (
    <div className=" flex flex-row items-center justify-between w-full h-[180px] pr-[100px overflow-x-scroll space-x-7 scrollbar-none ">
      {Stories.map((elem) => {
        return (
          <div key={elem.id} className="flex flex-col items-center">
            <div className="flex items-center w-[90px] h-[90px] rounded-full p-[3px] border-[3px] border-purple-400">
              <img
                className="w-full h-full rounded-full"
                src={elem.image}
                alt={elem.Title}
              />
            </div>
            <div className=" text-[12px] font-semibold text-center">
              {elem.Title}
            </div>
          </div>
        );
      })}
    </div>
  );
}
