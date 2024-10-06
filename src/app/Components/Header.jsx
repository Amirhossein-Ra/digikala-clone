import React from "react";
import TopNav from "./TopNav";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className=" shadow-md shadow-gray-300 pb-3">
      <TopNav />
      <Navbar />
    </div>
  );
}
