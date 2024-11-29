import { useEffect, useRef, useState } from "react";

export function useDropdown(options: string[], defaultValue: string) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>(defaultValue || "");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsVisible((prev) => !prev);
  };

  const selectOption = (index: number) => {
    setSelectedItem(options[index]);
    setIsVisible(false);
  };

  useEffect(() => {
    setSelectedItem(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = dropdownRef.current;
      if (dropdown && !dropdown.contains(event.target as HTMLElement)) {
        setIsVisible(false);
      }
    };
    const handlePressScape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsVisible(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handlePressScape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handlePressScape);
    };
  }, []);

  return {
    toggleDropdown,
    selectOption,
    isVisible,
    selectedItem,
    dropdownRef,
  };
}
