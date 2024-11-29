import { ReactNode, useState } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  children: ReactNode;
}

export function Popover({ content, children }: Props) {
  const [isopen, setIsopen] = useState<boolean>(false);

  return (
    <div className="relative ">
      {isopen && (
        <div className="absolute min-w-[200px] bg-white z-50 p-2 -translate-x-[12%] right-[5px] -translate-y-[95%] border shadow-md">
          {content}
        </div>
      )}
      <div
        onMouseEnter={() => setIsopen(true)}
        onMouseLeave={() => setIsopen(false)}
      >
        {children}
      </div>
    </div>
  );
}
