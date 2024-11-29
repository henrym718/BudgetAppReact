import { Item } from "../store/ServiceStore";
import { Budget } from "../../budget/strore/BudgetStore";

const buildStringServices = (budget: Item[]): string[] => {
  return budget.map((item) => {
    const customizations = item.customization
      ?.map((custom) => `${custom.count} ${custom.title}`)
      .join(", ");

    return `${item.title}${customizations ? ` (${customizations})` : ""}`;
  });
};

export const buildItemReport = (
  value: { name: string; phone: string; email: string },
  budget: Item[],
  totalBudget: () => number,
  id: number
): Budget => {
  console.log({ budget });
  return {
    id: `id-${id}`,
    name: value.name,
    email: value.email,
    phone: value.phone,
    date: new Date(),
    total: totalBudget(),
    services: buildStringServices(budget),
  };
};
