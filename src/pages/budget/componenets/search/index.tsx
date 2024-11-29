import { Dropdown } from "../../../../ui/dropdown/Dropdown";
import { InputField } from "../../../../ui/InputField";
import { OrderBy } from "../../strore/BudgetStore";

interface Props {
  onSearch: (term: string) => void;
  onSort: (criteria: string) => void;
  onRestore: () => void;
  value: string;
  selectedFilter: string;
}

export function Search({
  onSearch,
  onSort,
  onRestore,
  value,
  selectedFilter,
}: Props) {
  return (
    <div className="flex justify-end gap-5">
      <div className="w-52">
        <InputField
          onChange={(e) => onSearch(e.target.value)}
          name="search"
          search={true}
          className="h-10 w-56"
          value={value}
        />
      </div>

      <button
        className="w-32 h-10 border rounded-md hover:bg-green-400 px-2"
        onClick={onRestore}
      >
        Restaurar
      </button>

      <div>
        <Dropdown
          onChange={onSort}
          defaultValue={selectedFilter || OrderBy.RECIENTES}
          width={200}
          height={40}
          contentWidth={200}
          options={[OrderBy.RECIENTES, OrderBy.ANTIGUOS, OrderBy.NOMBRE]}
        />
      </div>
    </div>
  );
}
