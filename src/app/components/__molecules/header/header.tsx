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
    <div className="w-[full] h-[64px]  p-2 flex items-center justify-between">
      <div className="FIRST_DIV max-w-[546px] pl-4 h-[48px] w-full flex gap-5">
        <div className="flex items-center justify-center">
          <Link href={"/"}>
            <Image
              src={"/spotify.png"}
              alt="spotify"
              width={40}
              height={30}
              className="w-full"
            />
          </Link>
        </div>
        <div>
          <Link
            href={"/"}
            className="bg-[#1f1f1f] text-[#b3b3b3] text-[10px] w-[48px] h-[48px] rounded-[50px] items-center flex justify-center"
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
          className="max-w-[474px] w-full h-[48px] rounded-[50px] bg-[#1f1f1f] pl-[15px]"
          placeholder="What do you want to play?"
        />
      </div>
      <div className="SECOND_DIV text-[#b3b3b3] flex gap-3 items-center pr-40 font-[700]">
        <Link href={"https://www.spotify.com/ge/premium/"}>Premium</Link>
        <Link href={"https://support.spotify.com/ge/"}>Support</Link>
        <Link href={"https://www.spotify.com/ge/download/windows/"}>
          Download
        </Link>
        <div className="w-[2px] h-[25px] bg-[#656565]"></div>
        <a href="https://open.spotify.com/download">InstallApp</a>
        <div className="LOGIN_SIGNUP w-[180px] h-[48px] flex gap-3 text-center text-nowrap font-[700]">
          <Link href={"/signup"} className="w-[72px] flex items-center">
            Sigun Up
          </Link>
          <Link
            href={"/login"}
            className="w-[108px] h-[48px] text-[black] text-[14px] rounded-[50px] bg-[white] flex items-center justify-center"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;

