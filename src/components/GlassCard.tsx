import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  delay?: number;
}

export const GlassCard = ({ children, className, hoverEffect = true, delay = 0 }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={hoverEffect ? { y: -8, scale: 1.02 } : {}}
    >
      <Card
        className={cn(
          "glass-card border-white/20 shadow-lg backdrop-blur-md transition-all duration-300",
          hoverEffect && "hover:shadow-2xl hover:border-primary/30",
          className
        )}
      >
        {children}
      </Card>
    </motion.div>
  );
};
