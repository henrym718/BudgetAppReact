import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Options = {
  id: number;
  title: string;
};

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  initialValue: number;
  options: Options[];
  width: string | number;
  height: string | number;
  contentWidth: string | number;
  default?: number;
}

interface State {
  isVisible: boolean;
}

export function Dropdown({
  initialValue = 0,
  options = [],
  width,
  height,
  contentWidth,
  ...rest
}: Props) {
  const [isVisible, setIsVisible] = useState<State["isVisible"]>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<string>(
    options[initialValue].title
  );

  const handleOnClickButton = () => {
    setIsVisible((prev) => !prev);
  };
  const handleMouseLeave = () => setHoveredIndex(null);

  const handleMouseEnter = (index: number) => setHoveredIndex(index);

  const handleMouseClick = (index: number) => {
    setHoveredIndex(null);
    setSelectedItem(options[index].title);
    setIsVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = dropdownRef.current;
      if (dropdown && !dropdown.contains(event.target as Element)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full h-full" ref={dropdownRef} {...rest}>
      {/* Botón del Dropdown */}
      <div
        className="flex px-2 py-1 items-center justify-between gap-2 cursor-pointer hover:bg-black hover:bg-opacity-5 hover:rounded-sm"
        style={{ width, height }}
        onClick={handleOnClickButton}
      >
        <span>{selectedItem || options[initialValue].title}</span>
        <ChevronDown strokeWidth={1} size={25} />
      </div>

      {/* Lista del Dropdown */}
      {isVisible ? (
        <ul
          className="absolute left-1/2 -translate-x-1/2  mt-2 py-3 bg-white border rounded-md shadow-sm z-10"
          style={{ width: contentWidth }}
        >
          {options.map((opt, index) => (
            <li
              key={opt.id}
              className={`flex items-center justify-center cursor-pointer p-2 gap-2 rounded-md mx-2 ${
                hoveredIndex === index ? "bg-black bg-opacity-5" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleMouseClick(index)}
            >
              <Check
                size={20}
                strokeWidth={1}
                className={`${
                  selectedItem === opt.title ? "visible" : "invisible"
                }`}
              />
              <span>{opt.title}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
