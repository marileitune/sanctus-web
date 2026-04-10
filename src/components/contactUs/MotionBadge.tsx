import { JSX } from "react";
import { motion, TargetAndTransition } from "framer-motion";

const MotionBadge = ({
  href,
  src,
  alt,
  className,
  initial,
  animate,
  transition,
  children,
}: MotionBadgeProps) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
    initial={initial}
    animate={animate}
    transition={transition}
    viewport={{ once: true }}
  >
    <img src={src} alt={alt} width={160} height={62} className="w-40" />
    {children}
  </motion.a>
);

export default MotionBadge;

interface MotionBadgeProps {
  href: string;
  src: string;
  alt: string;
  className: string;
  initial: boolean | TargetAndTransition;
  animate: boolean | TargetAndTransition;
  transition: object;
  children?: JSX.Element | JSX.Element[];
}
