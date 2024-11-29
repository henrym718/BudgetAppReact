import { IServices } from "../../../../data/services";
import { ItemService } from "./ItemService";
import { Item } from "../../store/ServiceStore";
import { useServiceStore } from "../../store/ServiceStore";
import { Card } from "../../../../ui/Card";
import { CheckBox } from "../../../../ui/CheckBox";

interface Props {
  service: IServices;
}

export function CardService({ service }: Props) {
  const { services, addItem, removeItem, suscriptionPerYear } =
    useServiceStore();
  const isChecked = services.some((item) => item.id === service.id);

  const handleCheckboxChange = (checked: boolean): void => {
    const newItem: Item = {
      id: service.id,
      title: service.title,
      price: suscriptionPerYear
        ? service.price * (1 - service.discount)
        : service.price,
      discount: service.discount,
    };
    checked ? addItem({ ...newItem }) : removeItem(newItem.id);
  };

  const currentPrice = suscriptionPerYear
    ? service.price * (1 - service.discount)
    : service.price;

  return (
    <Card>
      <div className="grid grid-cols-[10fr_4fr_2fr] gap-2 items-center pt-12">
        <div className="flex flex-col">
          <h3 className="font-bold text-xl">{service.title} </h3>
          <p>{service.description} </p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="flex flex-col relative">
            {suscriptionPerYear && (
              <span className="absolute top-[-25px] left-[-20px] text-sm text-green-600 font-semibold w-32">{`Ahorras un ${
                service.discount * 100
              }%`}</span>
            )}
            <span className="font-bold text-3xl">{currentPrice}</span>
          </div>

          <span>{service.currency}</span>
        </div>
        <CheckBox
          title="Seleccionar"
          id={`checkbox-${service.id}`}
          onChange={(e) => handleCheckboxChange(e.target.checked)}
        />
      </div>
      <div className="pb-4 pt-6">
        {service.customization &&
          isChecked &&
          service.customization.map((item) => (
            <div key={item.id} className="flex justify-end">
              <ItemService key={item.id} item={item} idService={service.id} />
            </div>
          ))}
      </div>
    </Card>
  );
}
