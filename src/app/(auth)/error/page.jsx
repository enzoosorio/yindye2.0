import { CardAuth } from "@/components/auth/cardAuth/card-auth";

export default function ErrorPage() {
  return (
    <CardAuth
      title={"Error"}
      smallText={"Al parecer hubo un error al momento de loguearte"}
      backButtonLabel={"Regresar al"}
      buttonLabelHL={"login"}
      backButtonHref={"/login"}
    >
      <p className="mt-5 text-2xl text-orange-500">
        Intenta contactar con nosotros para ayudarte!
      </p>
    </CardAuth>
  );
}
