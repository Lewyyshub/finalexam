"use client";
import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { redirect, useRouter } from "next/navigation";
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
      className="LOGIN_DIV flex container items-center flex-col mx-auto max-w-[734px] w-full h-[800px] gap-10 pt-20 mt-16 bg-[#121212]"
    >
      <div className="flex flex-col items-center">
        <Image src={"/spotify.png"} alt="spotify" width={36} height={36} />
        <h1 className="text-[35px] font-[700]">Log in to Spotify</h1>
      </div>

      <div className="w-[324px] h-[160px] flex flex-col items-center font-[700] gap-5">
        <div className="w-[324px] h-[48px] border rounded-[50px] flex items-center justify-center gap-5">
          <Image src={"/google.svg"} alt="google" width={24} height={24} />
          <button type="button">Sign up with Google</button>
        </div>
        <div className="w-[324px] h-[48px] border rounded-[50px] flex items-center justify-center gap-5">
          <Image src={"/facebook.svg"} alt="facebook" width={24} height={24} />
          <button type="button">Sign up with Facebook</button>
        </div>
        <div className="w-[324px] h-[48px] border rounded-[50px] flex items-center justify-center gap-5">
          <Image src={"/apple.svg"} alt="apple" width={24} height={24} />
          <button type="button">Sign up with Apple</button>
        </div>
      </div>

      <div className="w-[534px] h-[1px] bg-[gray]"></div>

      <div className="LOGIN_DIV w-[324px] h-[318px] items-center flex flex-col gap-5">
        <div className="EMAIL flex-col flex gap-1">
          <label>Email or username</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-[324px] h-[48px] border rounded-[5px] bg-[#121212] pl-4 text-white"
            placeholder="Email or username"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">Email is required</span>
          )}
        </div>
        <div className="PASSWORD flex flex-col gap-1">
          <label>Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-[324px] h-[48px] border rounded-[5px] bg-[#121212] pl-4 text-white"
            placeholder="Password"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">Password is required</span>
          )}
        </div>
        <div className="rounded-[50px] bg-[#1ed760] flex items-center justify-center w-[324px] h-[48px]">
          <button type="submit" className="text-[black] font-bold">
            Log In
          </button>
        </div>
        <p>If you don't have an account</p>
        <Link href={"/signup"} className="underline">
          Create account Here
        </Link>
      </div>
    </form>
  );
}

export default Login;
