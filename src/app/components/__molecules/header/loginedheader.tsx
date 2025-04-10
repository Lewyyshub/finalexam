import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

function LoginedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [userInitial, setUserInitial] = useState<string>("");
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      try {
        const parsedUser = JSON.parse(user);

        if (parsedUser?.email) {
          const firstLetter = parsedUser.email.charAt(0).toUpperCase();
          setUserInitial(firstLetter);
        }
      } catch (error) {
        console.error(error);
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    window.location.href = "/login";
  };

  return (
    <div className="w-full h-[64px] p-2 flex items-center justify-between relative">
      <div className="FIRST_DIV flex gap-5 justify-between lg:justify-start w-full max-w-[546px] pl-4 h-[48px]">
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
      </div>

      <div className="flex w-[600px] gap-4 justify-between items-center">
        <Link
          href={"/"}
          className="bg-[#1f1f1f] text-[#b3b3b3] text-[10px] w-[68px] h-[48px] rounded-[50px] flex items-center justify-center"
        >
          <Image
            className="invert"
            src="/home.svg"
            alt="Home Icon"
            width={22}
            height={20}
          />
        </Link>

        <div className="relative w-full">
          <input
            type="text"
            className="peer max-w-[474px] w-full h-[48px] rounded-full bg-[#1f1f1f] pl-[15px] hidden lg:block transition-all duration-300 focus:w-[90%] focus:outline-none focus:placeholder-transparent"
            placeholder="What do you want to play?"
          />
          <input
            type="text"
            className="w-[50px] h-[50px] rounded-full bg-[#1f1f1f] pl-[10px] items-center justify-center flex lg:hidden transition-all duration-300 focus:w-[90%] focus:outline-none focus:placeholder-transparent"
            placeholder="🔍"
          />
        </div>
      </div>

      <div className="SECOND_DIV text-[#b3b3b3] flex gap-3 items-center pr-4 font-[700]">
        <div className="w-[132px] h-[32px] rounded-[20px] bg-white p-1 hidden xl:block">
          <button className="text-[14px] text-[black]">Explore Premium</button>
        </div>
        <div className="hidden xl:block w-[2px] h-[25px] bg-[#656565]" />
        <a className="hidden xl:block" href="https://open.spotify.com/download">
          InstallApp
        </a>
        <div className="flex gap-3">
          <div className="flex items-center justify-center">
            <p>🔔</p>
          </div>
          <div className="w-[48px] h-[48px] flex items-center justify-center bg-gray-500 rounded-[30px]">
            <button
              onClick={toggleMenu}
              className="bg-red-500 w-[33px] h-[33px] text-[black] text-[15px] rounded-[30px]"
            >
              {userInitial}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute z-10 top-[64px] w-[196px] h-[316px] right-[20px] lg:right-[150px] bg-[#1f1f1f] text-white rounded-[8px] p-4 flex flex-col items-center gap-3"
        >
          <ul className="flex flex-col justify-between gap-4">
            <li>Account</li>
            <li>Profile</li>
            <li>Upgrade to Premium</li>
            <li>Support</li>
            <li>Download</li>
            <li>Settings</li>
            <div className="flex flex-col gap-3 items-start">
              <div className="w-full h-[1px] bg-[gray]" />
              <button onClick={handleLogout}>Log out</button>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default LoginedHeader;
