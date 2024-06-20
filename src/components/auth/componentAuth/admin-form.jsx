"use client";

import { useCurrentRole } from "@/hooks/currentRole";
import { CardAuth } from "../cardAuth/card-auth";
import { RoleGate } from "./role-gate";
import { FormSuccess } from "@/components/form-messages/form-success";
import { useState } from "react";
import { UploadBlog } from "./admin-upload-forms/blog-upload-form";
import { UploadPolo } from "./admin-upload-forms/polo-upload-form";

export const AdminForm = () => {
  const role = useCurrentRole();
  const [option, setOption] = useState("blog");

  if (!role) {
    return (
      <p>
        El usuario no tiene un rol por defecto. Intenta registrarte otra vez.
      </p>
    );
  }

  return (
    <CardAuth
      title={"Administración de la pagina"}
      smallText={"CRUD DE BLOGS"}
      backButtonHref={"/"}
      backButtonLabel={"Volver al"}
      buttonLabelHL={"inicio"}
    >
      <RoleGate allowedRole={"ADMIN"}>
        <FormSuccess successMessage={"Tienes permiso para ver esta pestaña"} />
        <h3 className="mt-5">Contenido de administrador</h3>
        <div
          className={`relative w-40 h-16 bg-gray-400 text-lg text-white p-3 rounded-xl flex items-center justify-center gap-10 shadow-lg mt-8 mb-2 
         `}
        >
          <p
            className={`absolute cursor-pointer left-2 h-5/6 w-5/12 flex items-center justify-center
              hover:font-bold transition-all
              ${option === "blog" ? "rounded-lg font-bold drop-shadow-xl" : ""}
              `}
            onClick={() => {
              setOption("blog");
            }}
          >
            Blogs
          </p>
          <p
            className={`absolute cursor-pointer right-2 h-5/6 w-5/12 flex items-center 
              hover:font-bold transition-all justify-center
               ${option === "polo" ? "rounded-lg font-bold drop-shadow-xl" : ""}
              `}
            onClick={() => {
              setOption("polo");
            }}
          >
            Polos
          </p>
          <p className="absolute left-1/2 -translate-x-1/2 text-4xl">|</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          {option === "blog" ? (
            <UploadBlog />
          ) : option === "polo" ? (
            <UploadPolo />
          ) : null}
        </div>
      </RoleGate>
    </CardAuth>
  );
};
