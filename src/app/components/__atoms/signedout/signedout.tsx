"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function Signedout() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const pathname = usePathname();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      setIsLoggedIn(false);
    }
  }, []);

  if (isLoggedIn || pathname === "/signup" || pathname === "/login") {
    return null;
  }

  return (
    <div className="w-full h-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0 p-4 md:p-5 mt-2 bg-gradient-to-r from-[#af2896] to-[#509bf5]">
      <div className="flex flex-col text-center md:text-left">
        <p className="text-[12px] md:text-[14px] font-[700]">
          Preview of Spotify
        </p>
        <h1 className="text-[13px] md:text-[16px] font-[500]">
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </h1>
      </div>

      <div className="w-full md:w-[153px] h-[40px] md:h-[48px] bg-white text-black flex items-center justify-center rounded-[50px] font-[700] text-[14px] md:text-[16px]">
        <Link href="/signup">Sign up free</Link>
      </div>
    </div>
  );
}

export default Signedout;
