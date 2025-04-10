"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

type Song = {
  title: string;
  artist: string;
  album: string;
  duration: string;
  image: string;
};

type Playlist = {
  id: string;
  name: string;
  songs: Song[];
};

export default function PlaylistManager() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [creating, setCreating] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const [activePlaylistId, setActivePlaylistId] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchActive, setSearchActive] = useState(false);

  const songs: Song[] = [
    {
      title: "Not Like Us",
      artist: "Kendrick Lamar",
      image: "/notlikeus.jpg",
      album: "Not Like Us Album",
      duration: "3:22",
    },
    {
      title: "After Hours",
      artist: "The Weekend",
      image: "/afterhours.jpg",
      album: "After Hours",
      duration: "3:45",
    },
    {
      title: "Anti-Hero",
      artist: "Taylor Swift",
      image: "/antihero.png",
      album: "Midnights",
      duration: "3:10",
    },
    {
      title: "As It Was",
      artist: "Harry Styles",
      image: "/asitwas.jpg",
      album: "Harry's House",
      duration: "4:12",
    },
    {
      title: "Vampire",
      artist: "Olivia Rodrigo",
      image: "/vampire.jpg",
      album: "Guts",
      duration: "3:38",
    },
    {
      title: "Life is good",
      artist: "Future & Drake",
      image: "/drakefuture.jpg",
      album: "Life is Good",
      duration: "3:55",
    },
    {
      title: "მშვიდი",
      artist: "TAHA",
      image: "/calm.jpg",
      album: "Calm",
      duration: "2:59",
    },
    {
      title: "Numb",
      artist: "Linkin Park",
      image: "/numb.jpg",
      album: "Hybrid Theory",
      duration: "3:06",
    },
    {
      title: "Voices",
      artist: "Kirame X icy nightmare",
      image: "/kirame.jpg",
      album: "Voices",
      duration: "3:19",
    },
    {
      title: "ITALY",
      artist: "Russ",
      image: "/russ.jpeg",
      album: "Italy",
      duration: "3:40",
    },
    {
      title: "WHY",
      artist: "NF",
      image: "/why.jpg",
      album: "The Search",
      duration: "3:08",
    },
    {
      title: "Fuel",
      artist: "Eminem",
      image: "/fuel.jpg",
      album: "Recovery",
      duration: "3:12",
    },
  ];

  const filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const storedPlaylists = localStorage.getItem("playlists");
    if (storedPlaylists) {
      const parsedPlaylists = JSON.parse(storedPlaylists);
      setPlaylists(parsedPlaylists);

      if (parsedPlaylists.length > 0) {
        setActivePlaylistId(parsedPlaylists[0].id);
      }
    }
  }, []);

  const handleCreatePlaylist = () => {
    const newPlaylist: Playlist = {
      id: Date.now().toString(),
      name: newPlaylistName,
      songs: [],
    };
    setPlaylists([...playlists, newPlaylist]);
    setNewPlaylistName("");
    setCreating(false);
    setActivePlaylistId(newPlaylist.id);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setSearchActive(e.target.value !== "");
  };

  const addSongToPlaylist = (song: Song) => {
    if (!activePlaylistId) return;
    setPlaylists((prev) =>
      prev.map((playlist) =>
        playlist.id === activePlaylistId
          ? {
              ...playlist,
              songs: playlist.songs.some((s) => s.title === song.title)
                ? playlist.songs
                : [...playlist.songs, song],
            }
          : playlist
      )
    );
  };

  const handleDeleteSong = (index: number) => {
    setPlaylists((prev) =>
      prev.map((playlist) =>
        playlist.id === activePlaylistId
          ? {
              ...playlist,
              songs: playlist.songs.filter((_, i) => i !== index),
            }
          : playlist
      )
    );
  };

  const handleDeletePlaylist = (id: string) => {
    setPlaylists((prev) => prev.filter((playlist) => playlist.id !== id));
    if (activePlaylistId === id) setActivePlaylistId(null);
  };

  const activePlaylist = playlists.find((p) => p.id === activePlaylistId);

  return (
    <div className="flex flex-col lg:flex-row gap-4 px-4">
      <div className="w-full lg:max-w-[420px] h-auto lg:h-[765px] flex flex-col bg-[#121212] rounded-[10px] gap-6 p-4">
        <div className="YOUR_LIBRARY flex flex-col justify-between gap-3">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <p className="font-bold">Your Library</p>
              <div className="flex items-center gap-2">
                <div
                  className="px-4 rounded-[20px] flex items-center justify-center h-[36px] bg-[#1f1f1f]"
                  onClick={() => setCreating(true)}
                >
                  <button>➕ Create</button>
                </div>
              </div>
            </div>
            <div className="rounded-[20px] bg-[#1f1f1f] w-fit px-4 py-1 text-sm">
              <button>Playlists</button>
            </div>
          </div>

          {creating && (
            <div className="mt-4 flex flex-col gap-2">
              <input
                className="bg-[#2b2b2b] p-2 rounded-[10px] text-white"
                placeholder="Enter playlist name"
                value={newPlaylistName}
                onChange={(e) => setNewPlaylistName(e.target.value)}
              />
              <button
                className="bg-[#1ed760] text-white rounded-[10px] py-2"
                onClick={handleCreatePlaylist}
              >
                Create Playlist
              </button>
              <button
                className="bg-gray-500 text-white rounded-[10px] py-2"
                onClick={() => setCreating(false)}
              >
                Cancel
              </button>
            </div>
          )}

          <div className="mt-4 flex flex-col gap-3 overflow-y-auto max-h-[300px]">
            {playlists.map((playlist) => (
              <div
                key={playlist.id}
                className="flex items-center justify-between w-full"
              >
                <div
                  onClick={() => setActivePlaylistId(playlist.id)}
                  className={`cursor-pointer flex gap-4 p-3 rounded-[10px] w-full ${
                    playlist.id === activePlaylistId
                      ? "border border-[#1ed760]"
                      : ""
                  }`}
                >
                  <Image src={"/music.png"} width={50} height={30} alt="img" />
                  <div className="flex flex-col">
                    <h1 className="text-[#1ed760]">{playlist.name}</h1>
                    <span className="text-sm text-gray-400">
                      Playlist - name
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleDeletePlaylist(playlist.id)}
                  className="ml-2 text-red-500 text-lg"
                  title="Delete Playlist"
                >
                  ❌
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="MAINDIV w-full h-auto lg:h-[765px] gap-4 flex flex-col overflow-y-auto bg-gradient-to-b from-[#3a3939] via-[#3a3939] to-[#121212] rounded-[10px] p-4">
        {activePlaylist ? (
          <>
            <div className="PLAYLISTNAME flex flex-col md:flex-row gap-4 items-center md:items-end">
              <div className="w-[180px] h-[180px] md:w-[223px] md:h-[242px] flex items-center justify-center text-white text-xl rounded-md">
                <Image src={"/music.png"} width={300} height={320} alt="img" />
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-sm text-gray-400">Playlist</span>
                <h1 className="text-[32px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-bold leading-tight">
                  {activePlaylist.name}
                </h1>
                <span className="text-sm">Name</span>
              </div>
            </div>

            <div className="w-full h-[1px] bg-gray-500"></div>

            <div className="flex flex-col gap-3">
              <p className="text-gray-300">
                Let's find something for your playlist
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center w-full gap-2 justify-between">
                <input
                  className="bg-[#2b2b2b] w-full sm:w-[400px] h-[40px] px-4 text-white rounded-md"
                  placeholder="Search for songs or episodes"
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>

              <div className="ADDEDSONG flex flex-col w-full text-sm">
                <div className="flex w-full justify-between text-gray-400 font-medium px-1">
                  <p className="w-1/3"># Title</p>
                  <p className="w-1/4">Album</p>
                  <p className="w-1/4">Date added</p>
                  <p className="w-1/6 text-right">⌚</p>
                </div>
                <div className="w-full h-[1px] bg-gray-500 my-2"></div>

                {searchActive &&
                  (filteredSongs.length === 0 ? (
                    <p className="text-gray-400 p-4">No songs found!</p>
                  ) : (
                    filteredSongs.map((song, index) => (
                      <div
                        key={index}
                        className="flex w-full mt-2 justify-between items-center text-white text-sm"
                      >
                        <div className="w-1/3 flex items-center gap-2">
                          <Image
                            src={song.image}
                            width={30}
                            height={30}
                            alt={song.title}
                          />
                          <p>{index + 1}.</p>
                          <div>
                            <p>{song.title}</p>
                            <span className="text-gray-400">{song.artist}</span>
                          </div>
                        </div>
                        <p className="w-1/4">{song.album}</p>
                        <p className="w-1/4">
                          {new Date().toLocaleDateString()}
                        </p>
                        <div className="w-1/6 text-right">
                          <p>{song.duration}</p>
                        </div>
                        <button
                          className="border text-text px-3 py-1 rounded-[20px] ml-2"
                          onClick={() => addSongToPlaylist(song)}
                        >
                          Add
                        </button>
                      </div>
                    ))
                  ))}

                {activePlaylist.songs.length > 0 && (
                  <div className="mt-4">
                    {activePlaylist.songs.map((song, index) => (
                      <div
                        key={index}
                        className="flex w-full justify-between items-center text-white text-sm mt-2"
                      >
                        <div className="w-1/3 flex items-center gap-2">
                          <p>{index + 1}</p>
                          <Image
                            src={song.image}
                            width={30}
                            height={30}
                            alt={song.title}
                            className="rounded-[5px]"
                          />
                          <div>
                            <p>{song.title}</p>
                            <span className="text-gray-400">{song.artist}</span>
                          </div>
                        </div>
                        <p className="w-1/4">{song.album}</p>
                        <p className="w-1/4">
                          {new Date().toLocaleDateString()}
                        </p>
                        <p className="w-1/6 text-right">{song.duration}</p>

                        <div>
                          <button
                            className="text-red-500"
                            onClick={() => handleDeleteSong(index)}
                          >
                            X
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="text-white text-xl"></div>
        )}
      </div>
    </div>
  );
}
