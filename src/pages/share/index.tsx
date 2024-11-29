import { useParams } from "react-router-dom";
import { CardBudget } from "../budget/componenets/budgetList/CardBudget";
import { useBudgetStore } from "../budget/strore/BudgetStore";

export default function Share() {
  const { budget } = useBudgetStore();
  const { id } = useParams();
  const validBudget = budget.find((b) => b.id === id);

  return (
    <div className="w-3/4 mx-auto flex items-center h-screen">
      {validBudget ? (
        <CardBudget budget={validBudget} />
      ) : (
        <h1 className="text-3xl text-center w-[70%] mx-auto">
          Presupuesto no encontrado ya que la data no persiste en una base de
          datos, intenta con los id: id-1 al id-3
        </h1>
      )}
    </div>
  );
}
