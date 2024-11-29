interface Props {
  errors: {
    [key: string]: string | boolean | null;
  };
  isLoading: {
    [key: string]: boolean;
  };
  total: number;
}

export function useButtonState({ errors, isLoading, total }: Props) {
  const noErrors: boolean = Object.values(errors).every((e) => e === null);
  const noLoading: boolean = Object.values(isLoading).every((load) => !load);
  const hasValidTotal: boolean = total > 0;
  const isSubmitDisabled: boolean = !(noErrors && noLoading && hasValidTotal);

  return { isSubmitDisabled };
}
