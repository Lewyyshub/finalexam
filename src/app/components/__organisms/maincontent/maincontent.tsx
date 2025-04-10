"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "../../__molecules/footer/footer";
import { trendingSongs, popularArtists } from "../../../songs";
import { useRouter } from "next/navigation";

function Maincontent() {
  const [showAllSongs, setShowAllSongs] = useState(false);
  const [showAllArtists, setShowAllArtists] = useState(false);
  const router = useRouter();

  const toggleShowAllSongs = () => setShowAllSongs(!showAllSongs);
  const toggleShowAllArtists = () => setShowAllArtists(!showAllArtists);

  return (
    <div className="MAINDIV w-full p-5 h-[765px] gap-4 flex flex-col overflow-y-auto bg-gradient-to-b from-[#1f1f1f] via-[rgb(18,18,18)] to-[rgb(18,18,18)] rounded-[10px]">
      <div className="TRENDINGS w-full gap-3 flex flex-col">
        <div className="flex justify-between items-center w-full">
          <h1 className="font-[900] text-[18px] md:text-[21px]">
            Trending Songs
          </h1>
          <span
            className="font-[600] text-[13px] md:text-[14px] text-[gray] cursor-pointer"
            onClick={toggleShowAllSongs}
          >
            {showAllSongs ? "Show less" : "Show all"}
          </span>
        </div>
        <div className="SONGS flex gap-4 md:gap-5 mt-4 justify-center flex-wrap sm:items-center">
          {trendingSongs
            .slice(0, showAllSongs ? trendingSongs.length : 5)
            .map((song, index) => (
              <div
                key={index}
                onClick={() => router.push(`/song/${song.id}`)}
                className="flex flex-col p-2 w-[140px] sm:w-[290px] md:w-[220px] h-auto gap-1 hover:bg-[rgb(30,30,30)] transition rounded-[5px] cursor-pointer"
              >
                <div className="flex flex-col gap-1 group relative">
                  <Image
                    className="rounded-[5px] object-scale-down w-[280px] h-[240px]"
                    src={song.image}
                    alt={song.title}
                    width={220}
                    height={220}
                  />
                  <Image
                    className="absolute top-[55%] right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    src={"/icon.png"}
                    alt="Play Button"
                    width={50}
                    height={50}
                  />
                  <h1 className="hover:underline text-[14px] md:text-[15px] font-[700] truncate">
                    {song.title}
                  </h1>
                  <span className="font-[700] text-[11px] md:text-[12px] text-[gray] truncate">
                    {song.artist}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="POPULARS w-full gap-3 flex flex-col mt-10">
        <div className="flex justify-between items-center w-full">
          <h1 className="font-[900] text-[18px] md:text-[21px]">
            Popular Artists
          </h1>
          <span
            className="font-[600] text-[13px] md:text-[14px] text-[gray] cursor-pointer"
            onClick={toggleShowAllArtists}
          >
            {showAllArtists ? "Show less" : "Show all"}
          </span>
        </div>
        <div className="SONGS flex gap-4 md:gap-5 mt-4 flex-wrap justify-center sm:gap-6">
          {popularArtists
            .slice(0, showAllArtists ? popularArtists.length : 5)
            .map((artist, index) => (
              <div
                key={index}
                onClick={() => router.push(`/artist/${artist.id}`)}
                className="flex flex-col p-2 w-[140px] sm:w-[180px] md:w-[220px] h-[auto] gap-1 hover:bg-[rgb(30,30,30)] transition rounded-[5px] cursor-pointer"
              >
                <div className="flex flex-col gap-1 group relative">
                  <Image
                    className="rounded-full"
                    src={artist.image}
                    alt={artist.name}
                    width={220}
                    height={220}
                  />
                  <Image
                    className="absolute top-[55%] right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    src={"/icon.png"}
                    alt="Play Button"
                    width={50}
                    height={50}
                  />
                  <h1 className="text-[14px] md:text-[15px] font-[700] truncate">
                    {artist.name}
                  </h1>
                  <span className="text-[11px] md:text-[12px] text-[gray] truncate">
                    {artist.role}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Maincontent;
