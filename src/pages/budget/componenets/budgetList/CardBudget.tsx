import { Budget } from "../../strore/BudgetStore";
import { Card } from "../../../../ui/Card";
import { Share2 } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  budget: Budget;
}

export function CardBudget({ budget }: Props) {
  const url = `http://localhost:5173/share/${budget.id}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("¡URL copiada al portapapeles!");
    } catch (error) {
      toast.error("No se pudo copiar la URL.");
    }
  };

  return (
    <Card>
      <Share2
        onClick={() => handleCopy()}
        className="absolute -translate-x-0 right-10 top-4 "
        size={15}
      />
      <ToastContainer limit={2} />
      <div className="grid grid-cols-[10fr_15fr_5fr] gap-2 items-center py-12">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold">{budget.name}</h3>
          <p>{budget.email}</p>
          <p>{budget.phone}</p>
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold">Servicios Contratados</h4>
          {budget.services.map((service, index) => (
            <p key={`${budget.name}-service-${index}`}>{service}</p>
          ))}
        </div>
        <div className="flex flex-col">
          <p className="text-lg">Total:</p>
          <p className="text-3xl font-bold">
            {`${budget.total}`} <span className="text-lg">€</span>
          </p>
        </div>
      </div>
    </Card>
  );
}
