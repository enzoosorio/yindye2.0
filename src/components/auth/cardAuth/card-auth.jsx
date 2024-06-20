import { jost_font } from "../../../utils/fonts";
import Link from "next/link";

export const CardAuth = ({
  title,
  smallText,
  backButtonLabel,
  buttonLabelHL,
  backButtonHref,
  children,
}) => {
  return (
    <section
      className={`w-11/12 sm:w-7/12 md:w-[55ch] 2xl:w-[1080px] mb-10 mt-20 py-10 mx-auto flex flex-col items-center justify-center text-center border-2 rounded-xl ${jost_font.className}`}
    >
      <h2 className="text-3xl">{title}</h2>
      <small>{smallText}</small>
      {children}
      <Link
        href={backButtonHref}
        className={`mt-7 text-sm underline decoration-dotted tracking-wide `}
      >
        {backButtonLabel}
        <span className={"font-medium"}>&nbsp;{buttonLabelHL}</span>
      </Link>
    </section>
  );
};
