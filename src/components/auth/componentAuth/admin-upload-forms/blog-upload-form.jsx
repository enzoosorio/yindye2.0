"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BlogSchema } from "../../../../schemas/blogSchema";
import { useState, useTransition } from "react";
import { FormError } from "../../../form-messages/form-error";
import { FormSuccess } from "../../../form-messages/form-success";
import { upBlog } from "@/actions/upBlog";
import { useEdgeStore } from "@/lib/edgeStore";

export const UploadBlog = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(BlogSchema),
  });
  const hotkeyBreak = "<br/>";

  const { edgestore } = useEdgeStore();

  const handleSubmitBlogForm = async (data) => {
    setError("");
    setSuccess("");
    const mainImageToServer = data.mainImage?.[0];
    const finalImageToServer = data.finalImage?.[0];

    try {
      const resMainImage = await edgestore.myPublicFiles.upload({
        file: mainImageToServer,
        input: { type: "post" },
      });
      const resFinalImage = finalImageToServer
        ? await edgestore.myPublicFiles.upload({
            file: finalImageToServer,
            input: { type: "post" },
          })
        : null;

      const formData = {
        ...data,
        mainImage: resMainImage?.url,
        finalImage: resFinalImage?.url,
      };

      startTransition(() => {
        upBlog(formData).then((data) => {
          setError(data?.error);
          setSuccess(data?.success);
        });
      });
    } catch (uploadError) {
      setError("Error al subir las imágenes. Intenta nuevamente.");
      console.error(uploadError);
    }
  };

  return (
    <>
      <div className="mt-6 mb-1 flex flex-col gap-2 w-10/12">
        <h3 className="text-2xl text-gray-900">Detalles:</h3>
        <p className="font-medium">
          Recomendamos subir las imágenes en formato WEBP.
        </p>
        <p className="text-gray-900 mt-1">Dimensiones recomendadas:</p>
        <div className="my-2">
          <p>Imagen horizontal : 1080 x 636</p>
          <small>(la imagen de la portada debe tener estas dimensiones)</small>
        </div>
        <div className="my-2">
          <p>Imagen vertical : 1200 x 1600</p>
          <small>
            Puede tener dimensiones proporcionales a las mencionadas. Imagenes
            escalables.
          </small>
        </div>
        <div>
          <p>
            <b>Importante: </b>Para saltos de linea en la descripcion, se debe
            colocar el hotkey : {hotkeyBreak}
          </p>
        </div>
      </div>
      <form
        className="mt-7 flex flex-col gap-3"
        onSubmit={handleSubmit(handleSubmitBlogForm)}
      >
        <label>
          Título del blog
          <input
            type="text"
            placeholder="Blog n°01"
            disabled={isPending}
            className="mt-2 block border-2 rounded-sm py-1 px-2 mx-auto w-[30ch] sm:w-[35ch] md:w-[45ch] transition-all duration-700  outline-orange-400"
            {...register("title")}
          />
          {errors && (
            <FormError errorMessage={errors.title?.message.toString()} />
          )}
        </label>
        <label>
          Descripcion
          <textarea
            type="text"
            placeholder="el blog empieza con..."
            disabled={isPending}
            className="mt-2 block border-2 resize-none rounded-sm py-1 px-2 mx-auto w-[30ch] sm:w-[35ch] md:w-[45ch] transition-all duration-700  outline-orange-400"
            {...register("description")}
          ></textarea>
          {errors && (
            <FormError errorMessage={errors.description?.message.toString()} />
          )}
        </label>
        <label>
          Imagen principal
          <input
            type="file"
            placeholder="Sube la imagen principal del blog aca"
            disabled={isPending}
            className="mt-5 mb-3 flex rounded-sm py-1 px-2 mx-auto w-[30ch] sm:w-[35ch] md:w-[45ch] transition-all duration-700 items-center justify-center outline-orange-400"
            {...register("mainImage")}
          />
          {errors && (
            <FormError errorMessage={errors.mainImage?.message.toString()} />
          )}
        </label>
        <label>
          Alt de Imagen principal
          <input
            type="text"
            placeholder="Sube el ALT de la imagen principal del blog aca"
            disabled={isPending}
            className="mt-2 block border-2 rounded-sm py-1 px-2 mx-auto w-[30ch] sm:w-[35ch] md:w-[45ch] transition-all duration-700 outline-orange-400"
            {...register("altMainImage")}
          />
          {errors && (
            <FormError errorMessage={errors.altMainImage?.message.toString()} />
          )}
        </label>
        <label>
          Imagen final (opcional)
          <input
            type="file"
            placeholder="Sube la imagen principal del blog aca"
            disabled={isPending}
            className="mt-5 mb-3 flex rounded-sm py-1 px-2 mx-auto w-[30ch] sm:w-[35ch] md:w-[45ch] transition-all duration-700 items-center justify-center outline-orange-400"
            {...register("finalImage")}
          />
          {errors && (
            <FormError errorMessage={errors.finalImage?.message.toString()} />
          )}
        </label>
        <label>
          Alt de Imagen final (opcional)
          <input
            type="text"
            placeholder="Sube el ALT de la imagen principal del blog aca"
            disabled={isPending}
            className="mt-2 block border-2 rounded-sm py-1 px-2 mx-auto w-[30ch] sm:w-[35ch] md:w-[45ch] transition-all duration-700 outline-orange-400"
            {...register("altFinalImage")}
          />
          {errors && (
            <FormError
              errorMessage={errors.altFinalImage?.message.toString()}
            />
          )}
        </label>
        <FormError errorMessage={error} />
        <FormSuccess successMessage={success} />
        <button
          className={`mt-5 rounded-xltransition-colors hover:bg-orange-400 text-white w-[15ch] mx-auto py-[6px] transition-custom-ease ${
            isPending ? "bg-gray-400" : "bg-black "
          }`}
          disabled={isPending}
        >
          Subir Blog
        </button>
      </form>
    </>
  );
};
