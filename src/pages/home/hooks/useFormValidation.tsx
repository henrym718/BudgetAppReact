/**
 * Hook que gestiona las validaciones del formulario
 * con la esrategia de debounce para dar feedback al usuario
 * en tiempo real.
 */

import { validators } from "../utils/validations/validator";
import { useDebouncedValidation } from "./useDebounce";
validators;

export function useFormValidation(value: {
  name: string;
  phone: string;
  email: string;
}) {
  const { error: errName, isLoading: name } = useDebouncedValidation(
    value.name,
    validators.name,
    700
  );

  const { error: errPhone, isLoading: phone } = useDebouncedValidation(
    value.phone,
    validators.phone,
    700
  );
  const { error: errEmail, isLoading: email } = useDebouncedValidation(
    value.email,
    validators.email,
    700
  );

  return {
    errors: { errName, errPhone, errEmail },
    isLoading: { name, phone, email },
  };
}
