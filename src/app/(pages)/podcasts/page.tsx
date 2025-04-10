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
    <>
      <div className="flex flex-col lg:flex-row gap-4 px-4">
        <div className="w-full lg:max-w-[420px] h-auto lg:h-[765px] flex flex-col bg-[#121212] rounded-[10px] gap-6 p-4">
          <Sidebar />
        </div>

        <div className="w-full h-auto lg:h-[765px] gap-4 flex flex-col overflow-y-auto bg-gradient-to-b from-[#467885b7] via-[rgb(18,18,18)] to-[rgb(18,18,18)] rounded-[10px] p-5">
          <div className="mt-10 w-full">
            <h1 className="text-[48px] lg:text-[96px] font-[700] text-center lg:text-left">
              Podcasts
            </h1>
          </div>

          <div className="CATEGORIESMAINDIV flex flex-col gap-3">
            <h3 className="text-[20px] lg:text-[25px] font-[700]">
              Categories
            </h3>
            <div className="flex flex-wrap transition gap-5 font-[600] justify-center lg:justify-start">
              {podcastCategories.map((cat, index) => (
                <div
                  key={index}
                  onClick={() => handleClick(cat.slug)}
                  className="cursor-pointer w-full max-w-[340px] h-[200px] rounded-[10px] text-[20px] lg:text-[25px] p-4"
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
    </>
  );
}

export default Podcasts;
