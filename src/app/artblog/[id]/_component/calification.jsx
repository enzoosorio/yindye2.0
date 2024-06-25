"use client";
import { calificateBlog } from "@/actions/calificateBlog";
import { useState, useTransition } from "react";
import { useParams } from "next/navigation";
import { toast, Bounce } from "react-toastify";
import { useRouter } from "next/navigation";

export const Calification = ({ notSession, valueCalification }) => {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [valueStar, setValueStar] = useState(valueCalification || 0);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const params = useParams();
  const { id } = params;

  const handleStarClick = (calification) => {
    setValueStar(calification + 1);
  };

  const handleSubmitStart = () => {
    startTransition(() => {
      calificateBlog(valueStar, id).then((data) => {
        if (data?.error) {
          toast.error(`${data?.error}`, {
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
        if (data?.success) {
          toast.success(`${data?.success}`, {
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
        router.refresh();
      });
    });
  };

  return (
    <>
      <ul
        className={`flex items-center justify-around mx-auto mt-10 w-8/12  md:max-w-[800px] ${
          notSession ? "bg-gray-500" : "bg-blue-500"
        } rounded-xl py-2 px-3`}
      >
        {[0, 1, 2, 3, 4].map((index, value) => (
          <li
            key={index}
            className={`
              w-8
              md:w-12
              lg:w-16
              xl:w-[70px]
              ${
                index <= (hoverIndex !== -1 ? hoverIndex : valueStar - 1) &&
                !notSession
                  ? "fill-orange-400 cursor-pointer"
                  : "fill-white"
              }`}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
            onClick={() => {
              handleStarClick(value);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z" />
            </svg>
          </li>
        ))}
      </ul>
      {notSession ? (
        <h3 className="mt-10 text-sm font-semibold">
          Debes iniciar sesión para poder guardar y calificar el blog!
        </h3>
      ) : (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmitStart(valueStar);
          }}
        >
          <button
            type="submit"
            disabled={isPending}
            className="mt-10 text-sm bg-blue-500 hover:bg-blue-600/90 hover:scale-110 transition-all text-white py-3 px-4 rounded-2xl"
          >
            Enviar calificación
          </button>
        </form>
      )}
    </>
  );
};
