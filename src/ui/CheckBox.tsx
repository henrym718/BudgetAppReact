interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

export function CheckBox({ title, type, ...inputProps }: Props) {
  return (
    <label className="flex gap-2">
      <input type="checkbox" {...inputProps} />
      <p>{title}</p>
    </label>
  );
}
