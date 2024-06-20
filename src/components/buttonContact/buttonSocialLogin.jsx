"use client";

import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const ButtonSocialLogin = ({ isPending }) => {
  const handleSignInSocial = (provider) => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <button
      type="button"
      disabled={isPending}
      className={`group mt-5 rounded-xl border-2 border-orange-400 w-[15ch] mx-auto text-center py-[6px] ${
        isPending ? "bg-gray-200" : ""
      }`}
      onClick={() => {
        handleSignInSocial("google");
      }}
    >
      <FcGoogle
        className={`mx-auto text-2xl transition-all ${
          !isPending ? "group-hover:text-[26px]" : ""
        }`}
      />
    </button>
  );
};
