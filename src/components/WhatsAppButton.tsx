import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export const WhatsAppButton = ({ 
  phoneNumber = "5531999999999",
  message = "Olá! Preciso de um orçamento para conserto de geladeira em BH. Vi que vocês não cobram taxa de visita e parcelam em 6x sem juros. Gostaria de agendar uma visita!"
}: WhatsAppButtonProps) => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
    >
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Button
          size="lg"
          onClick={handleWhatsAppClick}
          className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full h-16 w-16 p-0 shadow-2xl hover:shadow-[0_0_40px_rgba(37,211,102,0.6)]"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      </motion.div>
    </motion.div>
  );
};
