"use client";

import { useRouter } from "next/navigation";

interface AlertProps {
  onClose: () => void;
}

export default function Alert({onClose }: AlertProps) {
  const router = useRouter();

  const handleClose = () => {
    onClose();
    router.replace("/");
  };

  return (
    <div className="fixed top-15 right-15 z-50 lg:right-6 md:right-6">
      <div className="bg-error rounded-lg shadow-lg px-4 py-3 flex items-center gap-3 min-w-[300px] max-w-[400px]">
        {/* Alert Icon */}
        <div className="shrink-0">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L2 20h20L12 2z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M12 9v4M12 17h.01"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Alert text */}
<p className="text-text-primary text-sm font-normal min-w-0 max-w-[200px]">
            A coffee with the same name already exists</p>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="shrink-0 text-text-primary hover:text-text-gray transition-colors"
          aria-label="Close alert"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 5L5 15M5 5l10 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
