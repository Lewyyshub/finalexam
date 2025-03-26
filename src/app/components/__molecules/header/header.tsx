import Link from "next/link";
import React from "react";
import Image from "next/image";
function Header() {
  return (
    <div className="w-[full] h-[64px]  p-2 flex items-center justify-around">
      <div className="FIRST_DIV max-w-[546px]  h-[48px] w-full flex gap-5">
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
      <div className="SECOND_DIV text-[#656565] flex gap-3 items-center font-[700]">
        <Link href={"https://www.spotify.com/ge/premium/"}>Premium</Link>
        <Link href={"https://support.spotify.com/ge/"}>Support</Link>
        <Link href={"https://www.spotify.com/ge/download/windows/"}>
          Download
        </Link>
        <div className="w-[2px] h-[25px] bg-[#656565]"></div>
        <a href="https://open.spotify.com/download">InstallApp</a>
        <div className="LOGIN_SIGNUP w-[180px] h-[48px] flex gap-1 font-[700]">
          <Link href={"/signup"} className="w-[72px] flex items-center">
            Sigun Up
          </Link>
          <Link
            href={"/login"}
            className="w-[108px] h-[48px] text-[black] rounded-[50px] bg-[white] flex items-center justify-center"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
