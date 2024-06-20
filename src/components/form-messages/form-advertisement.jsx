import { FaExclamationTriangle } from "react-icons/fa";

export const FormAdvertisement = ({ advertisementMessage }) => {
  if (!advertisementMessage) {
    return null;
  }

  return (
    <div className="text-yellow-400 p-2 rounded-md mt-5 mb-1 flex items-center justify-center gap-x-2 text-sm">
      <FaExclamationTriangle className="w-4 h-4" />
      <p>{advertisementMessage}</p>
    </div>
  );
};
