"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect, useTransition } from "react";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import { inter_font } from "@/utils/fonts";

export const ButtonsPagination = ({ numberOfPages, numberOfFavoritePages }) => {
  const searchParams = useSearchParams();
  const isFavoriteSelected = searchParams.get("searchindex") === "favoritos";

  const page = parseInt(searchParams.get("page")) || 0;
  const favoritepage = parseInt(searchParams.get("favoritepage")) || 0;

  const actualFormatPage = isFavoriteSelected ? favoritepage : page;
  console.log(actualFormatPage);
  const actualNumberOfPages = isFavoriteSelected
    ? numberOfFavoritePages
    : numberOfPages;
  console.log(actualFormatPage);
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  console.log(pathname);

  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(searchParams);
    if (isFavoriteSelected) {
      console.log("dentro");
      startTransition(() => {
        console.log("afuera");
        params.set("favoritepage", newPage.toString());
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      });
    } else {
      startTransition(() => {
        params.set("page", newPage.toString());
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      });
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (isFavoriteSelected) {
      params.delete("page");
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      if (!params.get("favoritepage")) {
        startTransition(() => {
          params.set("favoritepage", "0");
          router.replace(`${pathname}?${params.toString()}`, { scroll: false });
        });
      }
    } else {
      params.delete("favoritepage");
      if (!params.get("page")) {
        startTransition(() => {
          params.set("page", "0");
          router.replace(`${pathname}?${params.toString()}`, { scroll: false });
        });
      }
    }
  }, [isFavoriteSelected, pathname, router, startTransition]);

  return (
    <div
      className={`flex flex-row items-center gap-10 ${
        isFavoriteSelected ? "bg-yellow-400/20" : "bg-red-400/15"
      } mt-8 w-max m-auto p-4 rounded-xl `}
    >
      <button
        onClick={() => {
          if (actualFormatPage > 0) {
            handlePageChange(actualFormatPage - 1);
          }
        }}
        disabled={actualFormatPage === 0 || isPending}
        className={`rounded-full p-2 
          ${
            actualFormatPage === 0 || isPending
              ? "bg-gray-500 cursor-default"
              : "bg-third-color-orange hover:bg-third-color-orange-hover"
          }`}
      >
        <FaLessThan className="text-text-menu-mobile text-2xl" />
      </button>
      <p className={`text-text-primary text-lg ${inter_font.className}`}>
        Página {actualFormatPage + 1} de {actualNumberOfPages}
      </p>
      <button
        onClick={() => {
          if (actualFormatPage < actualNumberOfPages - 1) {
            handlePageChange(actualFormatPage + 1);
          }
        }}
        disabled={actualFormatPage === actualNumberOfPages - 1 || isPending}
        className={`rounded-full p-2 ${
          actualFormatPage === actualNumberOfPages - 1 || isPending
            ? "bg-gray-500 cursor-default"
            : "bg-third-color-orange hover:bg-third-color-orange-hover"
        }`}
      >
        <FaGreaterThan className="text-text-menu-mobile text-2xl" />
      </button>
    </div>
  );
};
