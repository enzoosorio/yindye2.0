"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect, useTransition } from "react";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import { inter_font } from "@/utils/fonts";

export const ButtonsPagination = ({ numberOfPages }) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const page = parseInt(searchParams.get("page")) || 0;
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handlePageChange = (newPage) => {
    startTransition(() => {
      params.set("page", newPage.toString());
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    });
  };

  useEffect(() => {
    if (!params.get("page")) {
      startTransition(() => {
        params.set("page", "0");
        router.replace(`${pathname}?${params.toString()}`);
      });
    }
  }, []);

  return (
    <div className="flex flex-row items-center gap-10 bg-red-400/15 mt-8 w-max m-auto p-4 rounded-xl ">
      <button
        onClick={() => {
          if (page > 0) {
            handlePageChange(page - 1);
          }
        }}
        disabled={page === 0}
        className={`rounded-full p-2 
          ${
            isPending
              ? "bg-gray-500 cursor-default"
              : "bg-third-color-orange hover:bg-third-color-orange-hover"
          }`}
      >
        <FaLessThan className="text-text-menu-mobile text-2xl" />
      </button>
      <p className={`text-text-primary text-lg ${inter_font.className}`}>
        Página {page + 1} de {numberOfPages}
      </p>
      <button
        onClick={() => {
          if (page < numberOfPages - 1) {
            handlePageChange(page + 1);
          }
        }}
        disabled={page === numberOfPages - 1}
        className={`rounded-full p-2 
          ${
            isPending
              ? "bg-gray-500 cursor-default"
              : "bg-third-color-orange hover:bg-third-color-orange-hover"
          }`}
      >
        <FaGreaterThan className="text-text-menu-mobile text-2xl" />
      </button>
    </div>
  );
};
