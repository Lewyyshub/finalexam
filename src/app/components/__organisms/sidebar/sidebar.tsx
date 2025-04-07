"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Sidebar() {
  const router = useRouter();
  const [showError, setShowError] = useState(false);

  const handleCreatePlaylist = () => {
    const user = localStorage.getItem("user");
    if (!user) {
      setShowError(true);
      return;
    }
    router.push("/playlists");
  };

  return (
    <div className="w-full max-w-[420px] h-[765px] ml-2 flex flex-col bg-[rgb(18,18,18)] rounded-[10px] gap-10">
      <div className="YOUR_LIBRARY flex justify-between p-5">
        <p className="font-[700]">Your Library</p>
        <button>➕</button>
      </div>

      <div className="flex gap-5 flex-col  pl-2">
        <div className="CREATE_PLAYLIST font-[700] w-full max-w-[404px] min-h-[150px] flex flex-col items-start p-5 gap-4 bg-[#1f1f1f] rounded-[5px] relative">
          <div className="gap-1 flex flex-col">
            <h1>Create your first playlist</h1>
            <p className="text-[13px]">It's easy, we'll help you</p>
          </div>

          <div
            onClick={handleCreatePlaylist}
            className="cursor-pointer w-[125px] h-[32px] bg-[white] text-[black] rounded-[20px] flex items-center justify-center"
          >
            <span className="font-[700] text-[13px]">Create playlist</span>
          </div>

          {showError && (
            <div className="absolute right-1 w-[332px] h-[138px] top-4 bg-[#4cb3ff] text-black flex-col flex p-4 gap-2 rounded-[10px]">
              <div className="flex flex-col gap-2">
                <h1 className="text-[16px]">Create a playlist</h1>
                <span className="text-[14px]">
                  Log in to create and share a playlists.
                </span>
              </div>
              <div className="flex mt-3 gap-4 text-nowrap justify-end">
                <button
                  onClick={() => setShowError(false)}
                  className="text-black text-[14px]"
                >
                  Not now
                </button>
                <Link
                  href={"/login"}
                  className="text-black items-center justify-center text-[14px] inherit flex bg-white w-[77px] h-[32px] rounded-[20px]"
                >
                  Log in
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="CREATE_PLAYLIST font-[700] w-full max-w-[404px] h-[134px] flex flex-col items-start p-5 gap-4 bg-[#1f1f1f] rounded-[5px]">
          <div className="flex flex-col gap-1">
            <h1>Let's find some podcasts below</h1>
            <p className="text-[13px]">
              We'll keep you updated on new episodes
            </p>
          </div>
          <div className="w-[142px] h-[32px] bg-[white] text-[black] rounded-[20px] flex items-center justify-center">
            <Link href={"/podcasts"} className="text-[13px]">
              Browse podcasts
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[420px] h-[208px] mt-40 pl-4">
        <div className="flex flex-col gap-2">
          <div className="text-[11px] text-[#b3b3b3] gap-4 flex flex-wrap">
            <span>Legal</span>
            <span>Safety & Privacy Center</span>
            <span>Privacy Policy</span>
            <span>Cookies</span>
          </div>
          <div className="text-[11px] text-[#b3b3b3] gap-4 flex flex-wrap">
            <span>About Ads</span>
            <span>Accessibility</span>
          </div>
          <div className="text-[11px]">
            <p className="text-[12px]">Cookies</p>
          </div>
        </div>
        <div className="mt-5 w-[100px] h-[32px] rounded-[20px] border flex items-center justify-center">
          <button className="font-[700] text-[15px]">🌐 English</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
