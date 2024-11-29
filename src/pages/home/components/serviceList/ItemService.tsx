import { CirclePlus, CircleMinus, CircleHelp } from "lucide-react";
import { useState } from "react";
import { ExtraIten } from "../../../../data/services";
import { useServiceStore } from "../../store/ServiceStore";
import { Popover } from "../../../../ui/Popover";

interface Props {
  item: ExtraIten;
  idService: number;
}

export function ItemService({ item, idService }: Props) {
  const { addItemsCustom } = useServiceStore();
  const [value, setValue] = useState<number>(0);

  const increment = (): void => {
    if (value !== 10) {
      setValue((prev) => prev + 1);
      addItemsCustom(idService, item, value + 1);
    }
  };

  const decrement = (): void => {
    if (value !== 0) {
      setValue((prev) => prev - 1);
      addItemsCustom(idService, item, value - 1);
    }
  };

  return (
    <div className="flex pb-2 items-center">
      <div className="relative">
        <Popover content={item.detail}>
          <CircleHelp
            className="mr-2 cursor-pointer"
            strokeWidth={2}
            size={15}
          />
        </Popover>
      </div>
      <p className="pr-6 text-sm leading-5 select-none">
        {`Numero de ${item.title}:`}
      </p>
      <div className="flex justify-center items-center gap-1">
        <CircleMinus onClick={decrement} size={20} strokeWidth={0.5} />
        <div className="w-11 h-7 border rounded-lg text-center select-none">
          {value}
        </div>
        <CirclePlus onClick={increment} size={20} strokeWidth={0.5} />
      </div>
    </div>
  );
}
