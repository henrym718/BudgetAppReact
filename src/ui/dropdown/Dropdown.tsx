import { DropdownButton } from "./DropdownButton";
import { DropdownOptions } from "./DropdownOptions";
import { useDropdown } from "./useDropdown";

interface Props {
  defaultValue: string;
  options: string[];
  width: string | number;
  height: string | number;
  contentWidth: string | number;
  onChange: (criteria: string) => void;
}

export function Dropdown({
  defaultValue,
  options,
  width,
  height,
  contentWidth,
  onChange,
}: Props) {
  const { isVisible, selectedItem, selectOption, toggleDropdown, dropdownRef } =
    useDropdown(options, defaultValue);

  const handleSelectOption = (index: number) => {
    selectOption(index);
    onChange(options[index]);
  };

  return (
    <div className="relative w-full h-full" ref={dropdownRef}>
      <DropdownButton
        width={width}
        height={height}
        onClick={toggleDropdown}
        selectedItem={selectedItem}
      />
      {isVisible && (
        <DropdownOptions
          options={options}
          width={contentWidth}
          selectedItem={selectedItem}
          onSelect={handleSelectOption}
        />
      )}
    </div>
  );
}
