import { ChevronDown } from "lucide-react";

interface Props {
  width: string | number;
  height: string | number;
  onClick: () => void;
  selectedItem: string;
}

export function DropdownButton({
  width,
  height,
  selectedItem,
  onClick,
}: Props) {
  return (
    <div className="relative w-full h-full">
      <div
        className="flex px-2 py-1 items-center justify-between gap-2 cursor-pointer hover:bg-black hover:bg-opacity-5 hover:rounded-sm"
        style={{ width, height }}
        onClick={onClick}
      >
        <span>{selectedItem}</span>
        <ChevronDown strokeWidth={1} size={25} />
      </div>
    </div>
  );
}
