import { ReactNode } from "react";

const H3 = ({ children, className = "" }: H3Props) => {
  return (
    <h3 className={`font-semibold tracking-tight text-lg lg:text-xl ${className}`}>
      {children}
    </h3>
  );
};

export default H3;

interface H3Props {
  children: ReactNode;
  className?: string;
}
