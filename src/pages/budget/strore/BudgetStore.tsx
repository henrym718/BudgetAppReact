import { createContext, ReactNode, useContext, useState } from "react";

interface ReportContext {
  budget: Budget[];
  addItem: (item: Budget) => void;
}

const reportContext = createContext<ReportContext | undefined>(undefined);

export function useBudgetStore() {
  const context = useContext(reportContext);
  if (!context) throw new Error("Error de implementacion del contexto");
  return context;
}

export enum OrderBy {
  RECIENTES = "Más recientes",
  ANTIGUOS = "Más antiguos",
  NOMBRE = "Nombre",
  RESTAURAR = "Restaurar",
}

export interface Budget {
  id: string;
  name: string;
  email: string;
  phone: string;
  services: string[];
  total: number;
  date: Date;
}

interface Props {
  children: ReactNode;
}

export function BudgetProvider({ children }: Props) {
  const [budget, setBudget] = useState<Budget[]>([
    {
      id: "id-1",
      name: "Mayra Campos",
      email: "Henrym.718@gmail.com",
      phone: "623743719",
      services: ["Seo (1 Keywords)", "Web (1 lenguajes)"],
      date: new Date(),
      total: 500,
    },
    {
      id: "id-2",
      name: "Jariel Bravo",
      email: "Henrym.718@gmail.com",
      phone: "623743719",
      services: ["Web"],
      date: new Date(),
      total: 600,
    },
    {
      id: "id-3",
      name: "Isabel Mosquera",
      email: "Henrym.718@gmail.com",
      phone: "623743719",
      services: ["Ads"],
      date: new Date(),
      total: 200,
    },
  ]);

  const addItem = (item: Budget): void => {
    setBudget((itemReport) => [...itemReport, item]);
  };

  return (
    <reportContext.Provider value={{ budget, addItem }}>
      {children}
    </reportContext.Provider>
  );
}
