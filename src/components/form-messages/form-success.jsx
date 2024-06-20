import { FaCheck } from "react-icons/fa";

export const FormSuccess = ({ successMessage }) => {
  if (!successMessage) {
    return null;
  }

  return (
    <div className="text-emerald-500/90 p-2 rounded-md mt-5 mb-1 flex items-center justify-center gap-x-2 text-sms">
      <FaCheck className="w-4 h-4" />
      <p>{successMessage}</p>
    </div>
  );
};
