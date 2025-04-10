"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LoginedHeader from "./loginedheader";

function Header() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  if (pathname === "/login" || pathname === "/signup") return null;

  if (isLoggedIn) {
    return <LoginedHeader />;
  }

  return (
    <div className="w-full h-16 p-2 flex items-center justify-between  lg:flex-nowrap">
      <div className="FIRST_DIV max-w-[546px] pl-4 h-[48px] w-full flex gap-5 flex-wraps">
        <div className="flex items-center justify-center">
          <Link href={"/"}>
            <Image
              src={"/spotify.png"}
              alt="spotify"
              width={40}
              height={30}
              className="w-full object-cover"
            />
          </Link>
        </div>
        <div>
          <Link
            href={"/"}
            className="bg-[#1f1f1f] text-[#b3b3b3] text-[10px] w-[48px] h-[48px] rounded-full items-center flex justify-center"
          >
            <Image
              className="invert"
              src="/home.svg"
              alt="Home Icon"
              width={22}
              height={20}
            />
          </Link>
        </div>
        <input
          type="text"
          className="max-w-[474px] w-full h-[48px] rounded-full bg-[#1f1f1f] pl-[15px] hidden lg:block"
          placeholder="What do you want to play?"
        />

        <input
          type="text"
          className="w-[50px] h-[50px] rounded-full bg-[#1f1f1f] pl-[10px] items-center justify-center flex lg:hidden transition-all duration-300 focus:w-[90%] focus:outline-none focus:placeholder-transparent"
          placeholder="🔍"
        />
      </div>
      <div className="SECOND_DIV text-[#b3b3b3] flex gap-3 items-center pr-10 font-bold flex-wrap lg:flex-nowrap">
        <div className="hidden lg:flex gap-3 items-center">
          <Link href={"https://www.spotify.com/ge/premium/"}>Premium</Link>
          <Link href={"https://support.spotify.com/ge/"}>Support</Link>
          <Link href={"https://www.spotify.com/ge/download/windows/"}>
            Download
          </Link>
          <div className="w-[2px] h-[25px] bg-[#656565]"></div>
          <a href="https://open.spotify.com/download">InstallApp</a>
        </div>

        <div className="LOGIN_SIGNUP w-full sm:w-[180px] h-[48px] flex gap-3 text-center font-bold mt-4 sm:mt-0">
          <Link
            href={"/signup"}
            className="w-[72px] flex items-center justify-center"
          >
            Sign Up
          </Link>
          <Link
            href={"/login"}
            className="w-[108px] h-[48px] text-black text-[14px] rounded-full bg-white flex items-center justify-center"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
