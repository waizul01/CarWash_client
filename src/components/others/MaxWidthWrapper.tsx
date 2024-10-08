import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

const MaxWidthWrapper = ({ className, children }: Props) => {
  return (
    <div className={cn("mx-auto w-full max-w-screen-xl px-2", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
