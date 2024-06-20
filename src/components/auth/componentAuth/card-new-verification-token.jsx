"use client";

import { CardAuth } from "../cardAuth/card-auth";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { NewVerification } from "@/actions/new-verification";
import { FormError } from "@/components/form-messages/form-error";
import { FormSuccess } from "@/components/form-messages/form-success";

export const NewVerificationTokenCard = () => {
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const params = useSearchParams();
  const token = params.get("token");

  const onTokenSubmit = useCallback(() => {
    if (!token) {
      setError("El token no existe!");
      return;
    }

    NewVerification(token)
      .then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      })
      .catch(() => {
        setError("Algo fue mal");
      });
  }, [token]);

  useEffect(() => {
    onTokenSubmit();
  }, []);

  return (
    <CardAuth
      title={"Verificación de correo electrónico"}
      backButtonLabel={"Volver al inicio"}
      backButtonHref={"/"}
    >
      <div
        className={`${
          !error && !success ? "mt-5" : ""
        } flex flex-col items-center w-full justify-center`}
      >
        {!error && !success && <BeatLoader />}
        <FormError errorMessage={error} />
        <FormSuccess successMessage={success} />
      </div>
    </CardAuth>
  );
};
