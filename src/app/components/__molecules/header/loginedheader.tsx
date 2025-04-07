import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function LoginedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [userInitial, setUserInitial] = useState<string>("");

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      try {
        const parsedUser = JSON.parse(user);

        if (parsedUser && parsedUser.email) {
          const firstLetter = parsedUser.email.charAt(0).toUpperCase();
          setUserInitial(firstLetter);
        } else {
          console.log("User data doesn't have a valid email field.");
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    } else {
      console.log("No user data found in localStorage.");
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    window.location.href = "/login";
  };

  return (
    <div className="w-full h-[64px] p-2 flex items-center justify-between">
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
      </div>
      <div className="flex w-[600px] gap-4">
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
        <input
          type="text"
          className="max-w-[474px] w-full h-[48px] rounded-[50px] bg-[#1f1f1f] pl-[15px]"
          placeholder="What do you want to play?"
        />
      </div>
      <div className="SECOND_DIV text-[#b3b3b3] flex gap-3 items-center pr-40 font-[700]">
        <div className="w-[132px] h-[32px] rounded-[20px] bg-white flex items-center justify-center">
          <button className="text-[14px] text-[black]">Explore Premium</button>
        </div>
        <div className="w-[2px] h-[25px] bg-[#656565]"></div>
        <a href="https://open.spotify.com/download">InstallApp</a>
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
        <div className="absolute z-10 top-[64px] w-[196px] h-[316px] right-[150px] bg-[#1f1f1f] text-white rounded-[8px] p-4 flex flex-col items-center gap-3">
          <ul className="flex flex-col justify-between gap-4">
            <li>Account</li>
            <li>Profile</li>
            <li>Upgrade to Premium</li>
            <li>Support</li>
            <li>Download</li>
            <li>Settings</li>
            <div className="flex flex-col gap-3 items-start">
              <div className="w-full h-[1px] bg-[gray]"></div>
              <button onClick={handleLogout}>Log out</button>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default LoginedHeader;
