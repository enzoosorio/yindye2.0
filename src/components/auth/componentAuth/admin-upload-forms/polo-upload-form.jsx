"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PoloSchema } from "@/schemas/poloSchema";
import { FormError } from "@/components/form-messages/form-error";
import { FormSuccess } from "@/components/form-messages/form-success";
import { useState, useTransition } from "react";
import { useEdgeStore } from "@/lib/edgeStore";
import { upPolo } from "@/actions/upPolo";

export const UploadPolo = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(PoloSchema),
  });

  const { edgestore } = useEdgeStore();

  const handleSubmitPoloForm = async (data) => {
    setError("");
    setSuccess("");

    const uploadImages = async (images, type) => {
      if (!images || !images.length) {
        return [];
      }

      const promises = Array.from(images).map((image) =>
        edgestore.myPublicFiles.upload({
          file: image,
          input: { type: "product" },
        })
      );
      return Promise.all(promises);
    };

    try {
      const normalImageResponses = await uploadImages(data.normalImages);
      const smallImageResponses = await uploadImages(data.smallImages);

      const imageUrls = [
        ...normalImageResponses.map((res) => res.url),
        ...smallImageResponses.map((res) => res.url),
      ];

      const formData = {
        ...data,
        normalImages: [],
        smallImages: [],
      };

      startTransition(() => {
        upPolo(formData, imageUrls).then((data) => {
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
      <div className="mt-6 mb-1 flex flex-col gap-3 w-10/12">
        <h3 className="text-2xl text-gray-900">Detalles:</h3>
        <p className="font-medium">
          Recomendamos tener las imágenes en las dimensiones grandes y pequeñas
          para que no se vea distorsionado al momento de usarlas en la página.
        </p>
        <p>
          Imágenes comprimidas, usar formato
          <span className="font-medium"> JPG o WEBP</span>.
        </p>
        <p className="text-gray-900 mt-1">Dimensiones recomendadas:</p>
        <div className="my-2">
          <p>Dimensiones de las imágenes grandes:</p>
          <p>563 x 845 (Vertical)</p>
        </div>
        <div className="my-2">
          <p>Dimensiones de las imágenes pequeñas:</p>
          <p>135 x 203 (Vertical)</p>
        </div>
      </div>
      <form
        className="mt-7 flex flex-col gap-3"
        onSubmit={handleSubmit(handleSubmitPoloForm)}
      >
        <label>
          Nombre del producto
          <input
            type="text"
            placeholder="Polo oversized tie dye"
            disabled={isPending}
            className="mt-2 block border-2 rounded-sm py-1 px-2 mx-auto w-[30ch] sm:w-[35ch] md:w-[45ch] transition-all duration-700  outline-orange-400"
            {...register("nameProduct")}
          />
          {errors && (
            <FormError errorMessage={errors.nameProduct?.message.toString()} />
          )}
        </label>
        <label>
          Sub nombre del producto (especificar colores)
          <input
            type="text"
            placeholder="PEACH ROSE MAGENTA tie dye"
            disabled={isPending}
            className="mt-2 block border-2 rounded-sm py-1 px-2 mx-auto w-[30ch] sm:w-[35ch] md:w-[45ch] transition-all duration-700  outline-orange-400"
            {...register("smallNameProduct")}
          />
          {errors && (
            <FormError
              errorMessage={errors.smallNameProduct?.message.toString()}
            />
          )}
        </label>
        <label>
          Precio
          <input
            type="text"
            placeholder="55.50"
            disabled={isPending}
            className="mt-2 block border-2 rounded-sm py-1 px-2 mx-auto w-[30ch] sm:w-[35ch] md:w-[45ch] transition-all duration-700 outline-orange-400"
            {...register("price")}
          />
          {errors && (
            <FormError errorMessage={errors.price?.message.toString()} />
          )}
        </label>
        <label>
          Descripción
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
        <h3>Tallas disponibles</h3>
        <div className="grid grid-cols-2">
          <label className="col-span-1 mt-1">
            Talla S
            <input
              type="text"
              placeholder="0"
              disabled={isPending}
              className="mt-2 text-center block border-2 rounded-sm py-1 px-2 mx-auto transition-all duration-700 outline-orange-400"
              {...register("sizeS")}
            />
            {errors && (
              <FormError errorMessage={errors.sizeS?.message.toString()} />
            )}
          </label>
          <label className="col-span-1 mt-1">
            Talla M
            <input
              type="text"
              placeholder="3"
              disabled={isPending}
              className="mt-2 text-center block border-2 rounded-sm py-1 px-2 mx-auto transition-all duration-700 outline-orange-400"
              {...register("sizeM")}
            />
            {errors && (
              <FormError errorMessage={errors.sizeM?.message.toString()} />
            )}
          </label>
          <label className="col-span-1 mt-2">
            Talla L
            <input
              type="text"
              placeholder="6"
              disabled={isPending}
              className="mt-2 text-center block border-2 rounded-sm py-1 px-2 mx-auto transition-all duration-700 outline-orange-400"
              {...register("sizeL")}
            />
            {errors && (
              <FormError errorMessage={errors.sizeL?.message.toString()} />
            )}
          </label>
          <label className="col-span-1 mt-2">
            Talla XL
            <input
              type="text"
              placeholder="9"
              disabled={isPending}
              className="mt-2 text-center block border-2 rounded-sm py-1 px-2 mx-auto transition-all duration-700 outline-orange-400"
              {...register("sizeXL")}
            />
            {errors && (
              <FormError errorMessage={errors.sizeXL?.message.toString()} />
            )}
          </label>
        </div>
        <label>
          Imagenes Grandes (sube las 7)
          <input
            type="file"
            placeholder="Sube las imagenes grandes aca"
            multiple
            disabled={isPending}
            className="mt-5 mb-3 flex rounded-sm py-1 px-2 mx-auto w-[30ch] sm:w-[35ch] md:w-[45ch] transition-all duration-700 items-center justify-center outline-orange-400"
            {...register("normalImages")}
          />
          {errors && (
            <FormError errorMessage={errors.normalImages?.message.toString()} />
          )}
        </label>
        <label>
          Imagenes Pequeñas (sube las 7)
          <input
            type="file"
            placeholder="Sube las imagenes pequeñas aca"
            multiple
            disabled={isPending}
            className="mt-5 mb-3 flex rounded-sm py-1 px-2 mx-auto w-[30ch] sm:w-[35ch] md:w-[45ch] transition-all duration-700 items-center justify-center outline-orange-400"
            {...register("smallImages")}
          />
          {errors && (
            <FormError errorMessage={errors.smallImages?.message.toString()} />
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
          Subir Polo
        </button>
      </form>
    </>
  );
};
