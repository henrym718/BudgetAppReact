import { useNavigate } from "react-router-dom";
import { buildItemReport } from "../utils/reportUtils";
import { useServiceStore } from "../store/ServiceStore";
import { useBudgetStore } from "../../budget/strore/BudgetStore";

type State = {
  name: string;
  phone: string;
  email: string;
};

export function useSubmit(value: State) {
  const { services, total } = useServiceStore();
  const { budget } = useBudgetStore();
  const { addItem } = useBudgetStore();
  const { reset } = useServiceStore();

  const navigate = useNavigate();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const report = buildItemReport(value, services, total, budget.length + 1);
    addItem(report);
    reset();
    navigate("/budget");
  };

  return { handleSubmit };
}
