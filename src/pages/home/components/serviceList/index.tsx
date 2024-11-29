import { IServices } from "../../../../data/services";
import { useServiceStore } from "../../store/ServiceStore";
import { FormBudget } from "../form";
import { CardService } from "./CardService";

interface Props {
  services: Array<IServices>;
}
export function ServiceList({ services }: Props) {
  const { total } = useServiceStore();

  return (
    <div className="flex flex-col gap-4">
      <div className="max-h-[600px] overflow-y-auto gap-6 flex flex-col px-10 py-6">
        {services.map((service) => (
          <CardService key={service.id} service={service} />
        ))}
      </div>
      <div className=" flex justify-end gap-6 pr-2 font-bold text-xl items-center">
        <p className="select-none">Precio propuesto:</p>
        <p className="select-none text-2xl">{`${total()} €`}</p>
      </div>
      <FormBudget />
    </div>
  );
}
