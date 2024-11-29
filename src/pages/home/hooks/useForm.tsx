/**
 * Hook que une la gestion del estado del formulario
 * con sus validaciones, separarando la logica del
 * negocio de la UI
 */

import { useFormState } from "./useFormState";
import { useFormValidation } from "./useFormValidation";
import { useButtonState } from "./useButtonState";
import { useServiceStore } from "../store/ServiceStore";

export function useForm() {
  const INITIAL_STATE = { name: "", phone: "", email: "" };
  const { services } = useServiceStore();
  const { handleOnChange, value } = useFormState(INITIAL_STATE);
  const { errors, isLoading } = useFormValidation(value);
  const { isSubmitDisabled } = useButtonState({
    errors,
    isLoading,
    total: services.length,
  });
  return { value, handleOnChange, errors, isLoading, isSubmitDisabled };
}
