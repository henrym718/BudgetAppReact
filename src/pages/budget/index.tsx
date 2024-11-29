import { ChevronLeft } from "lucide-react";
import { BudgetList } from "./componenets/budgetList";
import { Search } from "./componenets/search";
import { OrderBy, useBudgetStore } from "./strore/BudgetStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Budget() {
  const { budget } = useBudgetStore();
  const [filterTitle, setFilterTitle] = useState("");
  const [sortCriteria, setSortCriteria] = useState<string>(OrderBy.RECIENTES);

  const navigate = useNavigate();

  const onSort = (criterio: string) => {
    setSortCriteria(criterio);
  };

  const restoreBudget = () => {
    setSortCriteria(OrderBy.RECIENTES);
    setFilterTitle("");
  };

  const filteredReport = filterTitle.length
    ? budget.filter((item) => {
        return item.name.toLowerCase().includes(filterTitle.toLowerCase());
      })
    : budget;

  const sortedReport = () => {
    return filteredReport.sort((a, b) => {
      switch (sortCriteria) {
        case OrderBy.RECIENTES:
          return new Date(b.date).getTime() - new Date(a.date).getTime();

        case OrderBy.ANTIGUOS:
          return new Date(a.date).getTime() - new Date(b.date).getTime();

        case OrderBy.NOMBRE:
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
  };

  return (
    <div className="flex flex-col gap-10 min-h-screen max-w-screen-lg mx-auto mt-8 w-2/3 py-10">
      <a className="flex gap-1 items-center" onClick={() => navigate("/")}>
        <ChevronLeft className="text-start" />
        <span>Home</span>
      </a>
      <Search
        onSearch={(e) => setFilterTitle(e)}
        onSort={onSort}
        onRestore={restoreBudget}
        value={filterTitle}
        selectedFilter={sortCriteria}
      />
      <BudgetList budgets={sortedReport()} />
    </div>
  );
}
