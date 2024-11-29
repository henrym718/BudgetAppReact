import { LoaderCircle } from "lucide-react";
import { clsx } from "clsx";
import { Search } from "lucide-react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
  error?: string | boolean | null;
  search?: boolean;
}

export function InputField({
  isLoading,
  error,
  search,
  className,
  onChange,
  ...inputProps
}: Props) {
  /** Estilos globales del button */
  const baseStyles = "flex items-center gap-2 text-slate-600 outline-none px-2";
  const borderStyles = "border border-black border-opacity-10 rounded-lg";
  const focusStyle = "focus-within:border-[#817e7e] focus-within:border-2";
  const errorStyles = "!border-red-400";

  const inputClassName = clsx(
    baseStyles,
    borderStyles,
    focusStyle,
    { [errorStyles]: !!error },
    className
  );

  return (
    <div className="flex flex-col w-full h-auto gap-1">
      <div className={inputClassName}>
        <input
          className="w-full h-full outline-none"
          onChange={onChange}
          {...inputProps}
        />
        {isLoading && (
          <LoaderCircle
            color="#817e7e"
            strokeWidth={1.5}
            className="animate-spin"
          />
        )}
        {search && <Search color="#817e7e" strokeWidth={1} />}
      </div>
      <span className="text-sm text-red-500 w-full min-h-[1.25rem]">
        {error || ""}
      </span>
    </div>
  );
}
