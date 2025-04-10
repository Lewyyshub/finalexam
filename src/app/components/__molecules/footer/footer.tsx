import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <div className="w-full font-[700] flex flex-col mt-6 text-white px-4">
      <div className="NAV flex flex-col lg:flex-row justify-between flex-wrap gap-6">
        <div className="flex flex-col sm:flex-row flex-wrap gap-6 w-full lg:w-auto">
          <div className="min-w-[150px] flex flex-col gap-1">
            <h1 className="text-white">Company</h1>
            <div className="flex flex-col text-gray-400 gap-1">
              <span>About</span>
              <span>Jobs</span>
              <span>For the Record</span>
            </div>
          </div>

          <div className="min-w-[150px] flex flex-col gap-1">
            <h1>Communities</h1>
            <div className="flex flex-col text-gray-400 gap-1">
              <span>For Artists</span>
              <span>Developers</span>
              <span>Advertising</span>
              <span>Investors</span>
              <span>Vendors</span>
            </div>
          </div>

          <div className="min-w-[150px] flex flex-col gap-1">
            <h1>Useful links</h1>
            <div className="flex flex-col text-gray-400 gap-1">
              <span>Support</span>
              <span>Free Mobile App</span>
            </div>
          </div>

          <div className="min-w-[150px] flex flex-col gap-1">
            <h1>Spotify Plans</h1>
            <div className="flex flex-col text-gray-400 gap-1">
              <span>Premium Individual</span>
              <span>Premium Duo</span>
              <span>Premium Family</span>
              <span>Premium Student</span>
              <span>Spotify Free</span>
            </div>
          </div>
        </div>

        <div className="socials flex gap-4 mt-6 lg:mt-0">
          {["/ig.png", "/x.png", "/fb.jpg"].map((src, index) => (
            <div
              key={index}
              className="w-[40px] h-[40px] bg-gray-500 rounded-full flex items-center justify-center"
            >
              <Image src={src} alt="social" width={25} height={25} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-gray-700 h-[1px] my-6" />
      <h1 className="text-gray-400 text-sm">© 2025 Spotify AB</h1>
    </div>
  );
}

export default Footer;
