import Sidebar from "@/app/components/__organisms/sidebar/sidebar";
import React from "react";

function Playlists() {
  return (
    <div className="flex gap-2">
      <div className="w-full max-w-[420px] h-[765px] ml-2 flex flex-col bg-[rgb(18,18,18)]  rounded-[10px] gap-10">
        <div className="YOUR_LIBRARY flex flex-col justify-between p-2">
          <div className="flex flex-col p-3">
            <div className="flex justify-between">
              <p className="font-[700]">Your Library</p>
              <div className="w-[200px] flex justify-evenly">
                <div className="w-[110px] rounded-[20px] flex items-center justify-evenly h-[36px] bg-[#1f1f1f]">
                  <button>➕ Create</button>
                </div>
                <button>➡️</button>
              </div>
            </div>
            <div className="rounded-[20px] mt-3 bg-[#1f1f1f] w-[80px] h-[30px] items-center justify-center flex">
              <button className="text-[14px]">Playlists</button>
            </div>
            <div className="SEARCH_RECENT flex justify-between mt-4">
              <div>🔍</div>
              <div>
                <p>Recents</p>
              </div>
            </div>
          </div>
          <div className="w-[404px] h-[64px] bg-[#2b2b2b] flex gap-4 p-3 rounded-[10px] mt-3">
            <div>
              <p>IMG</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-[#1ed760]">My Playlist #1</h1>
              <span>Playlist - name</span>
            </div>
          </div>
        </div>
      </div>
      <div className="MAINDIV w-full p-5 h-[765px] gap-4 flex flex-col overflow-y-auto bg-gradient-to-b from-[#3a3939] via-[#3a3939] to-[rgb(18,18,18)] rounded-[10px]">
        <div className="PLAYLISTNAME flex w-full h-[273px] p-3 gap-5">
          <div className="w-[223px] h-[242px] bg-[red] flex items-center justify-center">
            <h1>IMAGE</h1>
          </div>
          <div className="flex flex-col justify-end">
            <span>Playlist</span>
            <h1 className="text-[96px] font-[700]">My Playlist #1</h1>
            <span>Name</span>
          </div>
        </div>
        <div className="w-full h-0.5 bg-[gray]"></div>
        <div className="flex flex-col w-full gap-3">
          <div>
            <p>Let's find something for your playlist</p>
          </div>
          <div className="flex items-center w-full justify-between">
            <input
              className="bg-[#2b2b2b] w-[400px] h-[40px] pl-10"
              placeholder="Search for songs or episodes"
              type="text"
            />
            <p>X</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playlists;
