import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface PulsingBadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "success";
}

export const PulsingBadge = ({ children, variant = "accent" }: PulsingBadgeProps) => {
  const getColorClasses = () => {
    switch (variant) {
      case "accent":
        return "bg-accent text-accent-foreground shadow-[0_0_20px_rgba(255,107,53,0.5)]";
      case "success":
        return "bg-success text-success-foreground shadow-[0_0_20px_rgba(0,217,163,0.5)]";
      default:
        return "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(0,102,255,0.5)]";
    }
  };

  return (
    <motion.div
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Badge className={`${getColorClasses()} px-4 py-2 text-sm font-bold uppercase tracking-wide`}>
        {children}
      </Badge>
    </motion.div>
  );
};
