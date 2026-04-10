import { ArrowRight } from "lucide-react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  withArrow = true,
  responsiveArrow = false,
  className = "",
  onClick,
  ...props
}: ButtonProps) => {
  const variants = {
    primary:
      "bg-[#C73434] text-white rounded-lg transition-all duration-300 hover:bg-[#B02E2E] active:bg-[#9A2828] ",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm md:px-4 md:py-2",
    md: "px-4 py-2 text-base md:px-6 md:py-3",
    lg: "px-6 py-3 text-lg md:px-8 md:py-4",
  };

  return (
    <button
      className={
        `flex items-center gap-2 rounded-lg transition-all font-semibold text-sm sm:text-base md:text-lg lg:text-xl sm:px-6 md:px-7 lg:px-8 xl:px-10 sm:py-3 md:py-4 lg:py-5 ` +
        variants[variant] +
        " " +
        sizes[size] +
        " " +
        className
      }
      {...props}
      onClick={onClick}
    >
      {children}
      {withArrow && (
        <span className={responsiveArrow ? "hidden md:inline" : ""}>
          <ArrowRight className="w-5 h-5" />
        </span>
      )}
    </button>
  );
};

export default Button;

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  responsiveArrow?: boolean;
  className?: string;
  onClick?: () => void;
}
