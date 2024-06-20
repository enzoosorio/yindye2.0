"use client";

import { registerUser } from "../../../actions/register";
import { CardAuth } from "../cardAuth/card-auth";
import { FormError } from "../../form-messages/form-error";
import { FormSuccess } from "../../form-messages/form-success";
import { RegisterSchema } from "../../../schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

export const RegisterFormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const handleSubmitRegisterForm = (data) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      registerUser(data).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <CardAuth
      title={"Registrarse"}
      smallText={"Registrate para poder reaccionar y opinar en nuestro blog!"}
      backButtonLabel={"¿Tienes una cuenta creada?"}
      buttonLabelHL={"Inicia sesión"}
      backButtonHref={"/login"}
    >
      <form
        className="mt-7 flex flex-col gap-3"
        onSubmit={handleSubmit(handleSubmitRegisterForm)}
      >
        <label>
          Nombre
          <input
            type="text"
            placeholder="Juan Perez"
            disabled={isPending}
            className="mt-2 block border-2 rounded-sm py-1 px-2 mx-auto w-[30ch] sm:w-[35ch] md:w-[45ch] transition-all duration-700  outline-orange-400"
            {...register("name")}
          />
          {errors && (
            <FormError errorMessage={errors.name?.message.toString()} />
          )}
        </label>
        <label>
          Correo electrónico
          <input
            type="email"
            placeholder="juan.perez@gmail.com"
            disabled={isPending}
            className="mt-2 block border-2 rounded-sm py-1 px-2 mx-auto w-[30ch] sm:w-[35ch] md:w-[45ch] transition-all duration-700  outline-orange-400"
            {...register("email")}
          />
          {errors && (
            <FormError errorMessage={errors.email?.message.toString()} />
          )}
        </label>
        <label>
          Contraseña
          <input
            type="password"
            placeholder="******"
            disabled={isPending}
            className="mt-2 block border-2 rounded-sm py-1 px-2 mx-auto w-[30ch] sm:w-[35ch] md:w-[45ch] transition-all duration-700 outline-orange-400"
            {...register("password")}
          />
          {errors && (
            <FormError errorMessage={errors.password?.message.toString()} />
          )}
        </label>
        <FormError errorMessage={error} />
        <FormSuccess successMessage={success} />
        <button className="mt-5 rounded-xl bg-black transition-colors hover:bg-orange-400 text-white w-[15ch] mx-auto py-[6px] transition-custom-ease">
          Registrarse
        </button>
      </form>
    </CardAuth>
  );
};
