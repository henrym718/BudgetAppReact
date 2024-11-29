import { Card } from "../../../../ui/Card";
import { InputField } from "../../../../ui/InputField";
import { useForm } from "../../hooks/useForm";
import { useSubmit } from "../../hooks/useSubmit";

export function FormBudget() {
  const { handleOnChange, value, isLoading, errors, isSubmitDisabled } =
    useForm();
  const { handleSubmit } = useSubmit(value);

  return (
    <Card>
      <div className="flex flex-col py-10 gap-5">
        <h2 className="text-2xl font-bold">Solicitar Presupuesto</h2>
        <form className="flex gap-2 justify-between">
          <InputField
            isLoading={isLoading.name}
            error={errors.errName}
            onChange={handleOnChange}
            value={value.name}
            name="name"
            placeholder="Nombre"
            autoComplete="off"
            className="h-10 w-[150px]"
          />
          <InputField
            isLoading={isLoading.phone}
            error={errors.errPhone}
            onChange={handleOnChange}
            value={value.phone}
            name="phone"
            placeholder="Phone"
            autoComplete="off"
            className="h-10 w-[150px]"
          />
          <InputField
            isLoading={isLoading.email}
            error={errors.errEmail}
            onChange={handleOnChange}
            value={value.email}
            name="email"
            placeholder="Email"
            autoComplete="off"
            className="h-10 w-[150px]"
          />

          <button
            className="bg-green-600 rounded-lg h-10 px-6 text-white flex-shrink-0 w-[120px] text-center disabled:bg-black disabled:bg-opacity-5 disabled:text-black"
            onClick={handleSubmit}
            disabled={isSubmitDisabled}
          >
            Solicitar
          </button>
        </form>
      </div>
    </Card>
  );
}
