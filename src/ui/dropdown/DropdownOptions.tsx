import { Check } from "lucide-react";
import { useState } from "react";

interface Props {
  options: string[];
  width: string | number;
  selectedItem: string;
  onSelect: (index: number) => void;
}

export function DropdownOptions({
  options,
  width,
  selectedItem,
  onSelect,
}: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const handleMouseEnter = (index: number) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <ul
      className="absolute left-1/2 -translate-x-1/2  mt-2 py-3 bg-white border rounded-md shadow-sm z-10"
      style={{ width }}
    >
      {options.map((opt, index) => (
        <li
          key={index}
          className={`flex items-center cursor-pointer py-2 pr-4 gap-2 rounded-md mx-2 ${
            hoveredIndex === index ? "bg-black bg-opacity-5" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => onSelect(index)}
        >
          <Check
            size={20}
            strokeWidth={1}
            className={`${selectedItem === opt ? "visible" : "invisible"}`}
          />
          <span>{opt}</span>
        </li>
      ))}
    </ul>
  );
}
