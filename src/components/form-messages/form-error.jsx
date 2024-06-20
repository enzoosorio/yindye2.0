import { FaExclamationTriangle } from "react-icons/fa";

export const FormError = ({ errorMessage }) => {
  if (!errorMessage) {
    return null;
  }

  return (
    <div className="text-red-500/90 p-2 rounded-md mt-5 mb-1 flex items-center justify-center gap-x-2 text-sm">
      <FaExclamationTriangle className="w-4 h-4" />
      <p>{errorMessage}</p>
    </div>
  );
};
