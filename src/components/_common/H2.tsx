import { ReactNode } from "react";

const H2 = ({ children, className = "", centerAccent = false }: H2Props) => {
  return (
    <div className="mb-8 lg:mb-12">
      <h2
        className={`font-bold tracking-tight text-2xl md:text-3xl lg:text-4xl ${className}`}
      >
        {children}
      </h2>
      <div
        className={`mt-3 w-12 h-[3px] bg-brand rounded-full ${centerAccent ? "mx-auto" : ""}`}
      />
    </div>
  );
};

export default H2;

interface H2Props {
  children: ReactNode;
  className?: string;
  centerAccent?: boolean;
}
