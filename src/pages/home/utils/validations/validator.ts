import { errorMessages } from "./messages";
import { matchesPattern, isMinLength } from "./validationUtils";

type ValidatorFunction = (value: string) => Promise<string | null>;

export const validators: Record<string, ValidatorFunction> = {
  name: async (name: string) => {
    if (!isMinLength(name, 4)) return errorMessages.name.minLength;

    if (!matchesPattern(name, /^[a-zA-Z\s]+$/))
      return errorMessages.name.invalidCharacters;

    return null;
  },

  phone: async (phone: string) => {
    if (!matchesPattern(phone, /^\d{9}$/)) return errorMessages.phone.invalid;

    return null;
  },

  email: async (email: string) => {
    if (!matchesPattern(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      return errorMessages.email.invalid;

    return null;
  },
};
