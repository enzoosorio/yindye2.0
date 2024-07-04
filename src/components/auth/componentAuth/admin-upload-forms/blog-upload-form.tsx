"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BlogSchema } from "../../../../schemas/blogSchema";
import { useRef, useState, useTransition } from "react";
import { FormError } from "../../../form-messages/form-error";
import { FormSuccess } from "../../../form-messages/form-success";
import { upBlog } from "@/actions/upBlog";
import { useEdgeStore } from "@/lib/edgeStore";
import { Editor as TinyMCEEditor } from "tinymce";
import {Editor } from '@tinymce/tinymce-react'
import * as z from 'zod'

export const UploadBlog = () => {
  const editorRef = useRef<TinyMCEEditor | null>(null);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof BlogSchema>>({
    resolver: zodResolver(BlogSchema),
  });

  const { edgestore } = useEdgeStore();

  const handleSubmitBlogForm: SubmitHandler<z.infer<typeof BlogSchema>>= async (data) => {
    setError("");
    setSuccess("");
    const mainImageToServer = data.mainImage?.[0];
    const finalImageToServer = data.finalImage?.[0];

    try {

      if(!editorRef.current){
        setError('Debes agregar contenido de descripcion al blog! ')
        return
      }

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

      if (!editorRef.current.getContent()) {
        setError("no has escrito una descripcion en el editor!");
        return;
      }

      const editorText = editorRef.current.getContent();

      const tagsInput = data.tags.split(',').map(tag => tag.trim());

      const formData = {
        ...data,
        mainImage: resMainImage?.url,
        finalImage: resFinalImage?.url,
      };

      startTransition(() => {
        upBlog(formData, editorText, tagsInput).then((data) => {
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
      </div>
      <form
        className="mt-7 flex flex-col gap-3"
        onSubmit={handleSubmit (handleSubmitBlogForm)}
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
            <FormError errorMessage={errors.title?.message?.toString()} />
          )}
        </label>
        <label>Descripción</label>
        <Editor
          apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
          onInit={(_evt, editor) => (editorRef.current = editor)}
          init={{
            height: 500,
            menubar: false,
            plugins:
              "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
            toolbar:
              "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
            tinycomments_mode: "embedded",
            tinycomments_author: "Author name",
            mergetags_list: [
              { value: "First.Name", title: "First Name" },
              { value: "Email", title: "Email" },
            ],
          }}
          initialValue="Ingresa aca el contenido del blog!"
        />
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
            <FormError errorMessage={errors.mainImage?.message?.toString()} />
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
            <FormError errorMessage={errors.altMainImage?.message?.toString()} />
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
            <FormError errorMessage={errors.finalImage?.message?.toString()} />
          )}
        </label>
        <label>
          Alt de Imagen final (opcional)
          <input
            type="text"
            placeholder="Sube el ALT de la imagen final del blog aca"
            disabled={isPending}
            className="mt-2 block border-2 rounded-sm py-1 px-2 mx-auto w-[30ch] sm:w-[35ch] md:w-[45ch] transition-all duration-700 outline-orange-400"
            {...register("altFinalImage")}
          />
          {errors && (
            <FormError
              errorMessage={errors.altFinalImage?.message?.toString()}
            />
          )}
        </label>
        <label>
          Etiquetas del blog <small>Por favor escribelo de esta manera : Música,Deporte,Personal </small>
          <input
            type="text"
            placeholder="Sube los tags que deseas tener en tu blog"
            disabled={isPending}
            className="mt-2 block border-2 rounded-sm py-1 px-2 mx-auto w-[30ch] sm:w-[35ch] md:w-[45ch] transition-all duration-700 outline-orange-400"
            {...register("tags")}
          />
          {errors && (
            <FormError
              errorMessage={errors.tags?.message?.toString()}
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
