"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { podcastCategories } from "../../podcasts";
import Footer from "@/app/components/__molecules/footer/footer";
import Sidebar from "@/app/components/__organisms/sidebar/sidebar";

function Podcasts() {
  const router = useRouter();

  const handleClick = (slug: string) => {
    router.push(`/podcasts/${slug}`);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="MAINDIV w-full p-5 h-[765px] gap-4 flex flex-col overflow-y-auto bg-gradient-to-b from-[#467885b7] via-[rgb(18,18,18)] to-[rgb(18,18,18)] rounded-[10px]">
        <div className="mt-20">
          <h1 className="text-[96px] font-[700]">Podcasts</h1>
        </div>

        <div className="CATEGORIESMAINDIV flex flex-col gap-3">
          <h3 className="text-[25px] font-[700]">Categories</h3>
          <div className="flex flex-wrap gap-5 font-[600]">
            {podcastCategories.map((cat, index) => (
              <div
                key={index}
                onClick={() => handleClick(cat.slug)}
                className="cursor-pointer w-full max-w-[340px] h-[200px] rounded-[10px] text-[25px] p-4"
                style={{ backgroundColor: cat.color }}
              >
                <p>{cat.name}</p>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Podcasts;
