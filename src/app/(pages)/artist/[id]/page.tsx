"use client";
import { useParams } from "next/navigation";
import { popularArtists, trendingSongs } from "../../../songs";
import Sidebar from "@/app/components/__organisms/sidebar/sidebar";
import router from "next/router";

export default function ArtistPage() {
  const { id } = useParams();
  const artist = popularArtists.find((a) => a.id === id);

  if (!artist) return <div>Artist not found</div>;

  const artistSongs = trendingSongs.filter((song) => song.artist === id);

  return (
    <div className="p-5 text-white flex">
      <Sidebar />
      <div className="MAINDIV w-full p-5 h-[765px] gap-4 flex flex-col overflow-y-auto bg-gradient-to-b from-[#1f1f1f] via-[rgb(18,18,18)] to-[rgb(18,18,18)] rounded-[10px]">
        <div className="flex gap-5 mt-20">
          <div className="flex flex-col justify-end gap-4">
            <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[95px] font-bold">
              {artist.name}
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">{artist.role}</p>
          </div>
        </div>

        <div className="flex w-full h-[36px] justify-between text-gray-400 text-sm sm:text-base">
          <div className="title">
            <p># Title</p>
          </div>
          <div className="artist">
            <p>Artist</p>
          </div>
          <div className="Dateadded">
            <p>Date added</p>
          </div>
          <div className="duration">
            <p>⌚</p>
          </div>
        </div>

        <div className="w-full h-[1px] bg-gray-500"></div>
        <div className="OTHERMUSIC mt-4">
          <div className="flex flex-col gap-4">
            {artistSongs.map((song, index) => (
              <div
                key={song.id}
                className="flex w-full mt-4 h-auto sm:h-[36px] justify-between items-center p-3 cursor-pointer hover:bg-[rgb(40,40,40)] transition"
                onClick={() => router.push(`/song/${song.id}`)}
              >
                <div className="flex items-center gap-5 overflow-hidden">
                  <p className="min-w-[20px]">{index + 1}</p>
                  <div className="truncate">
                    <p className="text-sm sm:text-md font-semibold truncate">
                      {song.title}
                    </p>
                    <span className="text-xs sm:text-sm text-gray-400 truncate">
                      {song.artist}
                    </span>
                  </div>
                </div>
                <div className="artist hidden sm:block">
                  <p className="text-sm text-gray-400">{song.artist}</p>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm text-gray-400">
                    {new Date().toLocaleDateString()}
                  </p>
                </div>
                <div className="hidden sm:block">
                  {/* <p className="text-sm text-gray-400">{song.duration}</p> */}
                </div>
              </div>
            ))}
            {artistSongs.length === 0 && (
              <p className="text-gray-500">No songs by this artist.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
