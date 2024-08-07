"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Logo from "../assets/imagenesyotrosrecursos/parte_del_logo/Logo_transparent_yindye_.webp";
import Logo_cat_transparent from "../assets/imagenesyotrosrecursos/parte_del_logo/gato_caminando_parte_del_logo.webp";
import { hepta_slab_font } from "../utils/fonts";
import { IoLogoOctocat } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { useStorePannel } from "@/store/useUserPressedNavbar";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useCurrentRole } from "@/hooks/currentRole";
import ThemeSwitch from "@/components/buttonContact/buttonToggleTheme";
import { useTheme } from "next-themes";
import { useToggleTheme } from "@/store/useToggleTheme";

export default function Navbar({ session }) {
  const pathname = usePathname();
  const [isPressed, setIsPressed] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  const roleUser = useCurrentRole();
  const notSession = !session?.user;

  const { userIsPressed, toggleUserIsPressed, setUserIsPressed } =
    useStorePannel();

  const { toggleThemeIsDark } = useToggleTheme();

  useEffect(() => {
    if (userIsPressed) {
      setUserIsPressed(false);
    }
  }, [pathname]);

  return (
    <nav
      className={`relative flex items-center bg-transparent justify-between px-1 md:px-6 xl:px-0 mt-10 xl:w-[1080px] mx-auto ${
        userIsPressed ? "mb-56" : ""
      }`}
    >
      <div className="relative">
        <Link
          onClick={() => {
            isPressed ? setIsPressed(!isPressed) : "";
          }}
          href={"/"}
        >
          <Image src={Logo} width={140} alt="logo YinDye" />
          <Image
            src={Logo_cat_transparent}
            width={70}
            className={`absolute top-2 -left-1 md:-left-5 -z-10 drop-shadow-custom`}
            alt="Cat part of logo YinDye"
          />
        </Link>
      </div>
      <button
        onClick={() => {
          toggleThemeIsDark;
        }}
        className="block md:hidden absolute cursor-pointer hover:scale-110 w-max"
        style={{ left: "calc(50% + 60px)" }}
      >
        <ThemeSwitch />
      </button>
      <button
        onClick={() => {
          toggleThemeIsDark;
        }}
        className="hidden md:block xl:hidden absolute cursor-pointer hover:scale-110 w-max"
        style={{ left: "calc(40% - 35px)" }}
      >
        <ThemeSwitch />
      </button>
      <button
        onClick={() => {
          toggleThemeIsDark;
        }}
        className="hidden xl:block absolute cursor-pointer hover:scale-110 w-max"
        style={{ left: "calc(60% - 35px)" }}
      >
        <ThemeSwitch />
      </button>
      <ul className="hidden md:flex items-center justify-center text-text-primary gap-9 pr-2">
        <li
          className={`hover:scale-110 transition-transform ${
            resolvedTheme === "dark" ? "neon-effect" : ""
          } `}
        >
          <Link href={"/2024_collection"}>2024 collection</Link>
        </li>
        <li
          className={`hover:scale-110 transition-transform ${
            resolvedTheme === "dark" ? "neon-effect" : ""
          } `}
        >
          <Link href={"/artgallery"}>ArtGallery</Link>
        </li>
        <li
          className={`hover:scale-110 transition-transform ${
            resolvedTheme === "dark" ? "neon-effect" : ""
          } `}
        >
          <Link href={"/artblog"}>ArtBlog</Link>
        </li>
        {notSession ? (
          <li className="hover:scale-110 transition-transform cursor-pointer ">
            <Link href={"/login"}>
              <FaUser className="text-3xl fill-third-color-orange ml-2" />
            </Link>
          </li>
        ) : (
          <>
            <li
              onClick={toggleUserIsPressed}
              className="relative hover:scale-110 transition-transform cursor-pointer "
            >
              <IoLogoOctocat className="text-4xl fill-third-color-orange" />
            </li>

            <ul
              className={`absolute w-[37ch] hidden md:flex top-14 right-0 bg-third-color-orange md:mr-7 xl:mr-0 text-text-menu-mobile drop-shadow-xl font-semibold flex-col 
              items-center justify-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                userIsPressed
                  ? "opacity-100 h-max"
                  : "opacity-0 pointer-events-none h-0"
              } `}
            >
              <li
                className={`text-pretty  text-center ${
                  resolvedTheme === "dark" ? "neon-effect" : ""
                }`}
              >
                Hola {session?.user?.name}!!!
              </li>
              <li
                className={`text-pretty cursor-pointer text-center ${
                  resolvedTheme === "dark" ? "neon-effect" : ""
                }`}
              >
                <Link href={"/artblog"}>Blogs</Link>
              </li>
              <li
                className={`text-pretty cursor-pointer text-center ${
                  resolvedTheme === "dark" ? "neon-effect" : ""
                }`}
              >
                <Link href={"/dashboard/settings"}>Configuración</Link>
              </li>
              {roleUser === "ADMIN" && (
                <li
                  className={`text-pretty cursor-pointer text-center ${
                    resolvedTheme === "dark" ? "neon-effect" : ""
                  }`}
                >
                  <Link href={"/dashboard/admin"}>Administracion</Link>
                </li>
              )}
              <li
                className={`text-pretty cursor-pointer text-center ${
                  resolvedTheme === "dark" ? "neon-effect" : ""
                }`}
                onClick={() => {
                  signOut({
                    callbackUrl: "/login",
                  });
                }}
              >
                Cerrar sesión
              </li>
            </ul>
          </>
        )}
      </ul>
      <ul className={`md:hidden absolute -top-0 left-1/2 transition-opacity`}>
        {notSession ? (
          <li className="hover:scale-110 transition-transform ">
            <Link href={"/login"}>
              <FaUser className="text-3xl fill-third-color-orange" />
            </Link>
          </li>
        ) : (
          <>
            <li
              onClick={toggleUserIsPressed}
              className="relative hover:scale-110 transition-transform cursor-pointer "
            >
              <IoLogoOctocat className={`text-4xl fill-third-color-orange`} />
            </li>
            <ul
              className={`absolute w-[20ch] md:hidden top-14 left-1/2 -translate-x-1/2 text-text-menu-mobile bg-third-color-orange font-semibold flex flex-col 
                items-center justify-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                  userIsPressed
                    ? "opacity-100 h-max"
                    : "opacity-0 pointer-events-none h-0"
                } `}
            >
              <li
                className={`text-pretty  text-center ${
                  resolvedTheme === "dark" ? "neon-effect" : ""
                }`}
              >
                Hola {session?.user?.name}!
              </li>
              <li
                className={`text-pretty cursor-pointer text-center ${
                  resolvedTheme === "dark" ? "neon-effect" : ""
                }`}
              >
                <Link href={"/artblog"}>Blogs</Link>
              </li>
              <li
                className={`text-pretty cursor-pointer text-center ${
                  resolvedTheme === "dark" ? "neon-effect" : ""
                }`}
              >
                <Link href={"/dashboard/settings"}>Configuración</Link>
              </li>
              {roleUser === "ADMIN" && (
                <li
                  className={`text-pretty cursor-pointer text-center ${
                    resolvedTheme === "dark" ? "neon-effect" : ""
                  }`}
                >
                  <Link href={"/dashboard/admin"}>Administracion</Link>
                </li>
              )}
              <li
                className={`text-pretty cursor-pointer text-center ${
                  resolvedTheme === "dark" ? "neon-effect" : ""
                }`}
                onClick={() => {
                  signOut({
                    callbackUrl: "/login",
                  });
                }}
              >
                Cerrar sesión
              </li>
            </ul>
          </>
        )}
      </ul>
      <button
        className={`md:hidden bg-third-color-orange rounded-md hover:scale-110 transition-transform`}
        onClick={() => {
          setIsPressed(!isPressed);
        }}
      >
        {!isPressed ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
            className="p-1"
          >
            <path
              fill="#ffffff"
              d="M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12M40 76h176a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24m176 104H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 56 56"
            className="p-1"
          >
            <path
              fill="#ffffff"
              d="M10.023 43.023c-.796.797-.82 2.157 0 2.954c.82.796 2.157.796 2.977 0l15-15l15 15c.797.796 2.156.82 2.977 0c.796-.82.796-2.157 0-2.954L30.953 28l15.024-15c.796-.797.82-2.156 0-2.953c-.844-.82-2.18-.82-2.977 0l-15 15l-15-15c-.82-.82-2.18-.844-2.977 0c-.796.82-.796 2.156 0 2.953l15 15Z"
            />
          </svg>
        )}
      </button>

      <ul
        className={clsx(
          `md:hidden fixed top-0 w-full h-screen flex flex-col pt-10 items-center justify-center gap-12 bg-third-color-orange text-text-menu-mobile
         opacity-0 -z-50 transition-all ${hepta_slab_font.className}`,
          {
            "opacity-100 z-[100] left-0": isPressed,
            "opacity-0 -z-50 left-full": !isPressed,
          }
        )}
      >
        <button
          onClick={() => {
            setIsPressed(!isPressed);
          }}
          className="absolute top-[44px] right-7"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 56 56"
            className="p-1"
          >
            <path
              fill="#ffffff"
              d="M10.023 43.023c-.796.797-.82 2.157 0 2.954c.82.796 2.157.796 2.977 0l15-15l15 15c.797.796 2.156.82 2.977 0c.796-.82.796-2.157 0-2.954L30.953 28l15.024-15c.796-.797.82-2.156 0-2.953c-.844-.82-2.18-.82-2.977 0l-15 15l-15-15c-.82-.82-2.18-.844-2.977 0c-.796.82-.796 2.156 0 2.953l15 15Z"
            />
          </svg>
        </button>
        <li
          className={`text-xl font-bold hover:text-2xl transition-all ${
            resolvedTheme === "dark" ? "neon-effect" : ""
          } `}
        >
          <Link
            onClick={() => {
              setIsPressed(!isPressed);
            }}
            href={"/"}
          >
            Inicio
          </Link>
        </li>

        <li
          className={`text-xl font-bold hover:text-2xl transition-all ${
            resolvedTheme === "dark" ? "neon-effect" : ""
          } `}
        >
          <Link
            onClick={() => {
              setIsPressed(!isPressed);
            }}
            href={"/2024_collection"}
          >
            2024 collection
          </Link>
        </li>
        <li
          className={`text-xl font-bold hover:text-2xl transition-all ${
            resolvedTheme === "dark" ? "neon-effect" : ""
          } `}
        >
          <Link
            onClick={() => {
              setIsPressed(!isPressed);
            }}
            href={"/artgallery"}
          >
            ArtGallery
          </Link>
        </li>
        <li
          className={`text-xl font-bold hover:text-2xl transition-all ${
            resolvedTheme === "dark" ? "neon-effect" : ""
          } `}
        >
          <Link
            onClick={() => {
              setIsPressed(!isPressed);
            }}
            href={"/artblog"}
          >
            ArtBlog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
