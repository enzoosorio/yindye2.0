"use client";

import { useState, useTransition } from "react";
import { CardAuth } from "../cardAuth/card-auth";
import { LoginSchema } from "../../../schemas/loginSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError } from "../../form-messages/form-error";
import { FormSuccess } from "../../form-messages/form-success";
import { FormAdvertisement } from "../../form-messages/form-advertisement";
import { login } from "../../../actions/login";
import { ButtonSocialLogin } from "@/components/buttonContact/buttonSocialLogin";
import { useSearchParams } from "next/navigation";

export const LoginFormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [advertisement, setAdvertisement] = useState();

  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "El email esta vinculado a otro proveedor!"
      : "";

  const handleSubmitLoginForm = (data) => {
    setError("");
    setSuccess("");
    setAdvertisement("");

    startTransition(() => {
      login(data).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
        setAdvertisement(data?.advertisement);
      });
    });
  };

  return (
    <CardAuth
      title={"Iniciar sesión"}
      smallText={
        "Inicia sesión para poder reaccionar y opinar en nuestro blog!"
      }
      backButtonLabel={"Aún no tienes una cuenta?"}
      buttonLabelHL={"Regístrate aquí"}
      backButtonHref={"/register"}
    >
      <form
        onSubmit={handleSubmit(handleSubmitLoginForm)}
        className="mt-7 flex flex-col gap-3"
      >
        <label>
          Correo electrónico
          <input
            type="email"
            {...register("email")}
            placeholder="juan.perez@gmail.com"
            className="mt-2 block border-2 rounded-sm py-1 px-2 mx-auto w-[30ch] sm:w-[35ch] md:w-[45ch] transition-all duration-700  outline-orange-400"
            disabled={isPending}
          />
          {errors && (
            <FormError errorMessage={errors.email?.message.toString()} />
          )}
        </label>
        <label>
          Contraseña
          <input
            type="password"
            {...register("password")}
            placeholder={"******"}
            className="mt-2 block border-2 rounded-sm py-1 px-2 mx-auto w-[30ch] sm:w-[35ch] md:w-[45ch] transition-all duration-700 outline-orange-400"
            disabled={isPending}
          />
          {errors && (
            <FormError errorMessage={errors.password?.message.toString()} />
          )}
        </label>
        <FormError errorMessage={error || urlError} />
        <FormSuccess successMessage={success} />
        <FormAdvertisement advertisementMessage={advertisement} />
        <div className="flex flex-col md:flex-row">
          <button
            disabled={isPending}
            className={`mt-5 rounded-xl bg-black transition-colors text-white w-[15ch] mx-auto py-[6px] transition-custom-ease ${
              isPending ? "bg-gray-200" : "hover:bg-orange-400"
            }`}
          >
            Iniciar sesión
          </button>
          <ButtonSocialLogin isPending={isPending} />
        </div>
      </form>
    </CardAuth>
  );
};
