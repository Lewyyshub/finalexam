"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { redirect } from "next/dist/server/api-utils";

type Step = 1 | 2 | 3;

type FormData = {
  email: string;
  birthdate: string;
  password: string;
};


const emailSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

const birthdateSchema = yup.object().shape({
  birthdate: yup
    .string()
    .required("Birthdate is required")
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Format: YYYY-MM-DD"),
});

const passwordSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Minimum 6 characters"),
});

function Signup(): JSX.Element {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<Partial<FormData>>({});

  const currentSchema =
    step === 1 ? emailSchema : step === 2 ? birthdateSchema : passwordSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(currentSchema),
  });

  const onSubmit = (data: Partial<FormData>) => {
    if (step === 1) {
      setFormData({ ...formData, email: data.email });
      setStep(2);
    } else if (step === 2) {
      setFormData({ ...formData, birthdate: data.birthdate });
      setStep(3);
    } else if (step === 3) {
      const finalData: FormData = {
        email: formData.email || "",
        birthdate: formData.birthdate || "",
        password: data.password || "",
      };

      localStorage.setItem("user", JSON.stringify(finalData));
      alert("✅ რეგისტრაცია წარმატებით დასრულდა!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-center items-center w-full max-w-[326px] min-w-[480px] mx-auto flex-col pt-20 gap-10"
    >
      <div className="flex flex-col items-center">
        <Image src="/spotify.png" alt="spotify" width={40} height={40} />
        <h1 className="font-[700] text-center text-wrap text-[2.5rem] leading-tight">
          Sign up to <br />
          start listening
        </h1>
      </div>

      <div className="REGISTER_DIV flex flex-col gap-3 w-full items-center">
        {step === 1 && (
          <div className="w-[324px] flex flex-col gap-1">
            <label>Email address</label>
            <input
              {...register("email")}
              className="h-[48px] bg-black text-white pl-2 border rounded-[5px]"
              type="email"
              placeholder="name@domain.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
        )}

        {step === 2 && (
          <div className="w-[324px] flex flex-col gap-1">
            <label>Date of Birth</label>
            <input
              {...register("birthdate")}
              className="h-[48px] bg-black text-white pl-2 border rounded-[5px]"
              type="date"
            />
            {errors.birthdate && (
              <p className="text-red-500 text-sm">{errors.birthdate.message}</p>
            )}
          </div>
        )}

        {step === 3 && (
          <div className="w-[324px] flex flex-col gap-1">
            <label>Password</label>
            <input
              {...register("password")}
              className="h-[48px] bg-black text-white pl-2 border rounded-[5px]"
              type="password"
              placeholder="Enter password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
        )}

        <button
          type="submit"
          className="w-[324px] h-[48px] mt-3 bg-green-500 rounded-[50px] text-black font-[700]"
        >
          {step === 3 ? "Sign up" : "Next"}
        </button>
      </div>

      {step === 1 && (
        <>
          <div>
            <span>or</span>
          </div>
          <div className="w-[324px] flex flex-col font-[700] gap-4">
            <div className="border rounded-[50px] flex gap-5 items-center justify-center h-[48px]">
              <Image src="/google.svg" alt="google" width={24} height={24} />
              <button type="button">Sign up with Google</button>
            </div>
            <div className="border rounded-[50px] flex gap-5 items-center justify-center h-[48px]">
              <Image
                src="/facebook.svg"
                alt="facebook"
                width={24}
                height={24}
              />
              <button type="button">Sign up with Facebook</button>
            </div>
            <div className="border rounded-[50px] flex gap-5 items-center justify-center h-[48px]">
              <Image src="/apple.svg" alt="apple" width={24} height={24} />
              <button type="button">Sign up with Apple</button>
            </div>
          </div>
        </>
      )}

      <div className="w-[324px] h-[1px] bg-[gray]"></div>

      <div className="flex gap-1">
        <p className="text-[gray]">Already have an account?</p>
        <Link href="/login" className="underline">
          Log in here
        </Link>
      </div>
    </form>
  );
}

export default Signup;
