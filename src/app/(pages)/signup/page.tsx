import Link from "next/link";
import React from "react";
import Image from "next/image";
function Signup() {
  return (
    <div className="flex justify-center items-center w-full max-w-[326px] min-w-[480px] mx-auto flex-col pt-20 gap-10">
      <div className="flex flex-col items-center">
        <Image src={"/spotify.png"} alt="spotify" width={40} height={40} />
        <h1 className="font-[700]  text-center text-wrap text-[3rem]">
          Sign up to <br />
          start listening
        </h1>
      </div>
      <div className="REGISTER_DIV flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label>Email address</label>
          <input
            className="w-[324px] h-[48px] bg-black pl-2 border rounded-[5px]"
            type="email"
            placeholder="name@domain.com"
          />
        </div>
        <div className="w-[324px] h-[48px] bg-green-500 items-center flex rounded-[50px] justify-center">
          <button className="text-[black] font-[700]">Next</button>
        </div>
      </div>
      <div>
        <span>or</span>
      </div>
      <div className="w-[324px] h-[160px] flex flex-col items-center font-[700] gap-5">
        <div className="w-[324px] h-[48px]  border rounded-[50px] items-center justify-center gap-5 flex">
          <Image src={"/google.svg"} alt="google" width={24} height={24} />
          <button>Sign up with Google</button>
        </div>
        <div className="w-[324px] h-[48px] border rounded-[50px] items-center justify-center gap-5 flex">
          <Image src={"/facebook.svg"} alt="facebook" width={24} height={24} />
          <button>Sign up with Facebook</button>
        </div>
        <div className="w-[324px] h-[48px] border rounded-[50px] items-center justify-center gap-5 flex">
          <Image src={"/apple.svg"} alt="apple" width={24} height={24} />
          <button>Sign up with Apple</button>
        </div>
      </div>
      <div className="w-[324px] h-[1px] bg-[gray]"></div>
      <div className="flex gap-1">
        <p className="text-[gray]">Already have an account?</p>
        <Link href={"/login"} className="underline">
          Log in here
        </Link>
      </div>
    </div>
  );
}

export default Signup;
