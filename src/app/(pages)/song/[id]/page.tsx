"use client";
import { useParams, useRouter } from "next/navigation";
import { trendingSongs } from "../../../songs";
import Sidebar from "@/app/components/__organisms/sidebar/sidebar";
import { useMemo } from "react";

interface Song {
  album: string;
  id: string;
  title: string;
  artist: string;
  image: string;
  duration?: string;
  dateAdded?: string;
}

export default function SongPage() {
  const router = useRouter();
  const { id } = useParams();

  const song: any | undefined = trendingSongs.find((s) => s.id === id);

  const otherSongsByArtist: any[] = useMemo(() => {
    if (!song) return [];
    return trendingSongs.filter(
      (s) => s.artist === song.artist && s.id !== song.id
    );
  }, [song]);

  if (!song) return <div className="text-white p-5">Song not found</div>;

  return (
    <div className="p-5 text-white flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-[500px]">
        <Sidebar />
      </div>

      <div className="MAINDIV w-full p-5 h-auto gap-4 flex flex-col overflow-y-auto bg-gradient-to-b from-[#1f1f1f] via-[#121212] to-[#121212] rounded-[10px]">
        <div className="flex flex-col lg:flex-row gap-6 mt-10 items-center lg:items-start">
          <img
            src={song.image}
            alt={song.title}
            className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] rounded-lg object-cover"
          />

          <div className="flex flex-col justify-end gap-4 text-center lg:text-left">
            <p className="text-sm text-gray-400">Public Playlist</p>
            <h1
              className="
          font-bold leading-tight
          text-[32px]
          sm:text-[40px]
          md:text-[48px]
          lg:text-[64px]
          xl:text-[84px]
          max-w-[90vw]
        "
            >
              {song.title}
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">
              by {song.artist}
            </p>
          </div>
        </div>

        <div className="w-full h-[1px] bg-gray-600 my-8" />

        <div className="flex flex-col gap-4">
          {otherSongsByArtist.length > 0 ? (
            otherSongsByArtist.map((s, index) => (
              <div
                key={s.id}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-5 bg-[#2a2a2a] hover:bg-[#3c3c3c] p-4 rounded-lg transition-all duration-200 cursor-pointer"
                onClick={() => router.push(`/song/${s.id}`)}
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <p className="min-w-[24px] text-gray-400">{index + 1}</p>
                  <div className="flex flex-col">
                    <p className="font-semibold text-white truncate">
                      {s.title}
                    </p>
                    <span className="text-sm text-gray-400 truncate">
                      {s.artist}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:gap-10 text-sm text-gray-400 w-full sm:w-auto">
                  <p>{s.artist}</p>
                  <p>
                    {s.dateAdded
                      ? new Date(s.dateAdded).toLocaleDateString()
                      : "N/A"}
                  </p>
                  <p>{s.duration}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">
              No other songs by this artist.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
