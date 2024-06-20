"use client";

import { useCurrentRole } from "../../../hooks/currentRole";
import { FormError } from "../../form-messages/form-error";

export const RoleGate = ({ children, allowedRole }) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormError errorMessage={"no tienes permiso para ver este contenido"} />
    );
  }

  return <>{children}</>;
};
