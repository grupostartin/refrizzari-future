import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "success" | "accent";
  showIcon?: boolean;
}

export const CTAButton = ({ 
  children, 
  onClick, 
  size = "lg", 
  variant = "success",
  showIcon = true 
}: CTAButtonProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "success":
        return "bg-success hover:bg-success/90 text-success-foreground shadow-lg hover:shadow-[0_0_30px_rgba(0,217,163,0.5)]";
      case "accent":
        return "bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-[0_0_30px_rgba(255,107,53,0.5)]";
      default:
        return "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-[0_0_30px_rgba(0,102,255,0.5)]";
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        size={size}
        onClick={onClick}
        className={`${getVariantClasses()} font-bold text-base rounded-full px-8 transition-all duration-300`}
      >
        {children}
        {showIcon && <ArrowRight className="ml-2 h-5 w-5" />}
      </Button>
    </motion.div>
  );
};
