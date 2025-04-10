"use client";
import Sidebar from "@/app/components/__organisms/sidebar/sidebar";
import { useParams } from "next/navigation";
import Image from "next/image";
import { podcastCategories } from "../../../podcasts";

interface Podcast {
  image: string;
  title: string;
  author: string;
  description?: string;
}

interface Category {
  slug: string;
  name: string;
  podcasts: Podcast[];
}

function PodcastCategoryPage() {
  const params = useParams();
  const slug = params?.slug;

  const category: Category | undefined = podcastCategories.find(
    (cat) => cat.slug === slug
  );

  if (!category) {
    return (
      <div className="flex gap-2">
        <Sidebar />
        <div className="MAINDIV w-full p-5 h-[765px] gap-20 flex flex-col overflow-y-auto bg-gradient-to-b from-[#1f1f1f] via-[rgb(18,18,18)] to-[rgb(18,18,18)] rounded-[10px]">
          <div className="text-white p-5 w-full h-[365px] flex items-end bg-red-500">
            <h1 className="text-[86px] font-bold">Category Not Found</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4 px-4">
      <div className="w-full lg:max-w-[420px] h-auto lg:h-[765px]">
        <Sidebar />
      </div>

      <div className="w-full p-5 h-auto lg:h-[765px] gap-10 flex flex-col overflow-y-auto bg-gradient-to-b from-[#1f1f1f] via-[rgb(18,18,18)] to-[rgb(18,18,18)] rounded-[10px]">
        <div className="text-white p-5 w-full h-[250px] sm:h-[300px] lg:h-[365px] rounded-[20px] flex items-end">
          <h1 className="text-[40px] sm:text-[64px] lg:text-[86px] font-[700] capitalize">
            {category.name}
          </h1>
        </div>

        <div className="w-full flex flex-wrap justify-center sm:justify-start gap-5 mt-4">
          {category.podcasts.map((podcast: Podcast, index: number) => (
            <div
              key={index}
              className="w-full sm:w-[220px] md:w-[240px] p-4 bg-[#2a2a2a] rounded-[10px] hover:bg-[#3c3c3c] transition"
            >
              <Image
                src={podcast.image}
                alt={podcast.title}
                width={300}
                height={300}
                className="rounded-[10px] object-cover w-full h-[200px]"
              />
              <div className="mt-4">
                <h2 className="text-[16px] sm:text-[18px] font-semibold text-white">
                  {podcast.title}
                </h2>
                <p className="text-[13px] sm:text-[14px] text-gray-400">
                  {podcast.author}
                </p>
                {podcast.description && (
                  <p className="text-[11px] sm:text-[12px] text-gray-500 mt-2">
                    {podcast.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PodcastCategoryPage;
