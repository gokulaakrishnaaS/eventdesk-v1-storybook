import React from "react";
import { Search } from "lucide-react";
import clsx from "clsx";

interface SearchBarProps {
  size?: "small" | "medium" | "large";
  color?: "gray" | "blue" | "indigo";
  placeholder?: string;
}

const sizeStyles = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2.5 text-sm",
  large: "px-5 py-3 text-base",
};

const colorStyles = {
  gray: "border-gray-300 focus:ring-gray-500",
  blue: "border-blue-300 focus:ring-blue-500",
  indigo: "border-indigo-300 focus:ring-indigo-500",
};

const SearchBar: React.FC<SearchBarProps> = ({
  size = "medium",
  color = "gray",
  placeholder = "Search Event...",
}) => {
  return (
    <div className="flex items-center gap-2 rounded-md shadow-sm bg-white border w-full max-w-lg px-3">
      <Search className="w-4 h-4 text-gray-500" />
      <input
        type="text"
        placeholder={placeholder}
        className={clsx(
          "flex-1 focus:outline-none focus:ring-2 bg-transparent",
          sizeStyles[size],
          colorStyles[color]
        )}
      />
    </div>
  );
};

export default SearchBar;
