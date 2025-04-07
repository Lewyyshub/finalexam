import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <div className="w-full h-[393px] font-[700] gap-10 flex flex-col mt-6">
      <div className="NAV flex justify-between">
        <div className="flex">
          <div className="w-[226px] flex flex-col gap-1">
            <h1 className="text-white">Company</h1>
            <div className="flex flex-col text-[gray] gap-1">
              <span>About</span>
              <span>Jobs</span>
              <span>For the Record</span>
            </div>
          </div>
          <div className="w-[226px] flex flex-col gap-1">
            <h1>Communities</h1>
            <div className="flex flex-col text-[gray] gap-1">
              <span>For Artists</span>
              <span>Developers</span>
              <span>Advertising</span>
              <span>Investors</span>
              <span>Vendors</span>
            </div>
          </div>
          <div className="w-[226px] flex flex-col gap-1">
            <h1>Useful links</h1>
            <div className="flex flex-col text-[gray] gap-1">
              <span>Support</span>
              <span>Free Mobile App</span>
            </div>
          </div>
          <div className="w-[226px] flex flex-col gap-1">
            <h1>Spotify Plans</h1>
            <div className="flex flex-col text-[gray] gap-1">
              <span>Premium Individual</span>
              <span>Premium Duo</span>
              <span>Premium Family</span>
              <span>Premium Student</span>
              <span>Spotify Free</span>
            </div>
          </div>
        </div>
        <div className="socials flex gap-6">
          <div className="w-[40px] h-[40px] bg-[gray] rounded-[50px] flex items-center justify-center">
            <Image src={"/ig.png"} alt="ig" width={25} height={25} />
          </div>
          <div className="w-[40px] h-[40px] bg-[gray] rounded-[50px] flex items-center justify-center">
            <Image src={"/x.png"} alt="x" width={25} height={25} />
          </div>
          <div className="w-[40px] h-[40px] bg-[gray] rounded-[50px] flex items-center justify-center">
            <Image src={"/fb.jpg"} alt="fb" width={25} height={25} />
          </div>
        </div>
      </div>
      <div className="w-[full] bg-[gray] h-[1px]"></div>
      <h1 className="text-[gray]">© 2025 Spotify AB</h1>
    </div>
  );
}

export default Footer;
