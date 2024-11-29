/**
 * Este hook se encarga de gesitonar el estado del formulario
 */

import { useState } from "react";

type State = {
  name: string;
  phone: string;
  email: string;
};

export function useFormState(initialState: State) {
  const [value, setValue] = useState<State>(initialState);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return {
    value,
    handleOnChange,
  };
}
