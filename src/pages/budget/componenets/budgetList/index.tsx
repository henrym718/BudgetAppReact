import { Budget } from "../../strore/BudgetStore";
import { CardBudget } from "./CardBudget";

interface Props {
  budgets: Budget[];
}

export function BudgetList({ budgets }: Props) {
  return (
    <div className="flex flex-col gap-4 justify-center">
      {budgets.map((budget, index) => (
        <CardBudget key={budget.name || index} budget={budget} />
      ))}
    </div>
  );
}
