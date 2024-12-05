import { SearchInputProps } from "../../@types/search-input.types";

export default function SearchInput({ height, placeholder, width }: SearchInputProps) {
  return (
    <div className="md:w-[80%] relative">
      <input
        type="text"
        placeholder={placeholder}
        className={`
          inter-home-search-input
          rounded-2xl
          ${height}
          ${width}
          outline-none
          border
          border-gray-300
          bg-white
          text-center
          text-gray-700
          shadow-sm
          transition-all
          duration-300
          focus:ring-2
          focus:ring-blue-200
          placeholder-gray-400
          pr-10
        `}
      />
      <div
        className={`
          absolute 
          right-4
          top-1/2 
          transform 
          -translate-y-1/2 
          text-gray-400
          cursor-pointer
          ${height === "h-10" ? "w-4 h-4" :
            height === "h-12" ? "w-5 h-5" :
              height === "h-14" ? "w-6 h-6" :
                height === "h-16" ? "w-7 h-7" : "w-5 h-5"}
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>
    </div>
  );
}
