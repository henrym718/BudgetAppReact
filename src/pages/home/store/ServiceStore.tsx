import { createContext, ReactNode, useContext, useState } from "react";
import { ExtraIten } from "../../../data/services";

export type Customization = {
  id: number;
  title: string;
  count: number;
  price: number;
};

export interface Item {
  id: number;
  title: string;
  price: number;
  discount: number;
  customization?: Customization[];
}

interface ServiceContextProps {
  services: Item[];
  suscriptionPerYear: boolean;
  addItem: (item: Item) => void;
  removeItem: (id: number) => void;
  updateItem: (items: Item[]) => void;
  addItemsCustom: (
    idService: number,
    itemCustom: ExtraIten,
    count: number
  ) => void;
  reset: () => void;
  total: () => number;
  toggleSuscription: (value: boolean) => void;
  updatePrices: (value: boolean) => void;
}

const BudgetContext = createContext<ServiceContextProps | undefined>(undefined);

export function useServiceStore() {
  const contex = useContext(BudgetContext);
  if (!contex) throw new Error("Error de implemnetaciòn del BadgetStore");
  return contex;
}

interface Props {
  children: ReactNode;
}

export function ServiceProvider({ children }: Props) {
  const [services, setServices] = useState<Item[]>([]);
  const [suscriptionPerYear, setSuscriptionPerYear] = useState<boolean>(false);

  const addItem = (item: Item) => {
    setServices((budget) => [...budget, { ...item }]);
  };
  const removeItem = (id: number) => {
    setServices((budget) => budget.filter((item) => item.id !== id));
  };
  const updateItem = (items: Item[]) => {
    setServices([...items]);
  };
  const addItemsCustom = (
    idService: number,
    itemCustom: ExtraIten,
    count: number
  ) => {
    const index = services.findIndex((service) => service.id === idService);

    const copyBudget = [...services];
    const serviceToUpdate = copyBudget[index];

    if (!serviceToUpdate.customization) {
      serviceToUpdate.customization = [];
    }

    const indexCustom = serviceToUpdate.customization.findIndex(
      (custom) => custom.id === itemCustom.id
    );

    const itemCustomToAdd: Customization = {
      id: itemCustom.id,
      title: itemCustom.title,
      price: itemCustom.price,
      count: count,
    };

    indexCustom == -1
      ? serviceToUpdate.customization.push(itemCustomToAdd)
      : (serviceToUpdate.customization[indexCustom].count = count);

    count === 0 &&
      (serviceToUpdate.customization = serviceToUpdate.customization.filter(
        (custom) => custom.id !== itemCustom.id
      ));

    serviceToUpdate.customization.length === 0 &&
      delete serviceToUpdate.customization;

    copyBudget[index] = serviceToUpdate;
    setServices(copyBudget);
  };
  const reset = () => {
    setServices([]);
    setSuscriptionPerYear(false);
  };
  const total = (): number => {
    return services.reduce((acc, service) => {
      const sumaCustom =
        service.customization?.reduce(
          (acc, item) => acc + item.price * item.count,
          0
        ) || 0;

      return acc + service.price + sumaCustom;
    }, 0);
  };

  const toggleSuscription = (value: boolean) => {
    setSuscriptionPerYear(value);
  };

  const updatePrices = (value: boolean) => {
    const newArraySrevices = services.map((service) => ({
      ...service,
      price: value
        ? service.price * (1 - service.discount)
        : !service.price
        ? service.price
        : service.price / (1 - service.discount),
    }));

    setServices(newArraySrevices);
  };

  return (
    <BudgetContext.Provider
      value={{
        services,
        suscriptionPerYear,
        addItem,
        removeItem,
        updateItem,
        addItemsCustom,
        reset,
        total,
        toggleSuscription,
        updatePrices,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
}
