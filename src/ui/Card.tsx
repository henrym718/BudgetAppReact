import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Card({ children }: Props) {
  const baseStyle =
    "border-t-[1px] border-slate-100 rounded-2xl px-6 shadow-lg w-full relative";

  return <div className={baseStyle}>{children}</div>;
}
