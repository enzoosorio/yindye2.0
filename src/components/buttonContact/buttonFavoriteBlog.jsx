"use client";

import { useState, useTransition } from "react";
import {
  addFavoriteBlog,
  removeFavoriteBlog,
} from "../../actions/favoriteBlog";
import { useRouter } from "next/navigation";
import { toast, Bounce } from "react-toastify";

export const ButtonFavoriteBlog = ({
  notSession,
  idUser,
  idBlog,
  initialFavorite,
}) => {
  const [isPending, startTransition] = useTransition();
  const [isFavorite, setIsFavorite] = useState(initialFavorite);
  const router = useRouter();

  const handleFavoriteToggle = () => {
    if (notSession) return;

    if (isFavorite) {
      startTransition(() => {
        removeFavoriteBlog(idUser, idBlog);
        setIsFavorite(false);
        router.refresh();
      });
      toast.info("Blog removido de favoritos", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      startTransition(() => {
        addFavoriteBlog(idUser, idBlog);
        setIsFavorite(true);
        router.refresh();
      });
      toast.success("Blog guardado en favoritos", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <button
      onClick={handleFavoriteToggle}
      className={`group border-2 ${
        notSession ? "border-gray-400" : "border-orange-400"
      } p-2 rounded-lg`}
      disabled={notSession || isPending}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        className={`fill-none stroke-current ${
          notSession || isPending
            ? "text-gray-400"
            : isFavorite
            ? "text-orange-400 fill-orange-400"
            : "text-orange-400 group-hover:fill-orange-400"
        }`}
      >
        <path d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z" />
      </svg>
    </button>
  );
};
