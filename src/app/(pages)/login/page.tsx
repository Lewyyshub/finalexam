"use client";
import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";

type LoginForm = {
  email: string;
  password: string;
};
function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const onSubmit = (data: LoginForm) => {
    const savedUser = localStorage.getItem("user");
    if (!savedUser) {
      alert("No registered user found.");
      return;
    }
    const parsedUser = JSON.parse(savedUser);
    if (
      parsedUser.email === data.email &&
      parsedUser.password === data.password
    ) {
      router.push("/");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="LOGIN_DIV flex container items-center flex-col mx-auto w-full max-w-[734px] h-auto gap-10 pt-10 sm:pt-16 mt-10 sm:mt-16 bg-[#121212] px-4 sm:px-8 pb-10 rounded-xl"
    >
      <div className="flex flex-col items-center text-center">
        <Image src={"/spotify.png"} alt="spotify" width={36} height={36} />
        <h1 className="text-[28px] sm:text-[35px] font-bold mt-2">
          Log in to Spotify
        </h1>
      </div>
      <div className="w-full max-w-[324px] flex flex-col items-center font-bold gap-4">
        {[
          { icon: "/google.svg", text: "Sign up with Google" },
          { icon: "/facebook.svg", text: "Sign up with Facebook" },
          { icon: "/apple.svg", text: "Sign up with Apple" },
        ].map(({ icon, text }, i) => (
          <div
            key={i}
            className="w-full h-[48px] border rounded-full flex items-center justify-center gap-3 hover:bg-[#1a1a1a] transition"
          >
            <Image src={icon} alt={text} width={24} height={24} />
            <button type="button">{text}</button>
          </div>
        ))}
      </div>
      <div className="w-full max-w-[534px] h-[1px] bg-gray-500"></div>
      <div className="LOGIN_DIV w-full max-w-[324px] flex flex-col items-center gap-5">
        <div className="EMAIL w-full flex-col flex gap-1">
          <label>Email or username</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full h-[48px] border rounded-md bg-[#121212] pl-4 text-white"
            placeholder="Email or username"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">Email is required</span>
          )}
        </div>
        <div className="PASSWORD w-full flex flex-col gap-1">
          <label>Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full h-[48px] border rounded-md bg-[#121212] pl-4 text-white"
            placeholder="Password"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">Password is required</span>
          )}
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="w-full h-[48px] bg-[#1ed760] text-black font-bold rounded-full hover:bg-[#1fdf64] transition"
          >
            Log In
          </button>
        </div>
        <p className="text-sm text-center">If you dont have an account</p>
        <Link href="/signup" className="underline text-sm">
          Create account Here
        </Link>
      </div>
    </form>
  );
}

export default Login;
