import { motion } from "framer-motion";
import { CTAButton } from "@/components/CTAButton";
import { CheckCircle2 } from "lucide-react";

const guarantees = [
  "Orçamento sem compromisso",
  "Sem taxa de visita em BH",
  "Parcele em até 6x sem juros",
  "Garantia de 90 dias",
  "Técnicos certificados",
  "Cobertura toda BH e região",
  "Atendimento 24/7",
  "Peças originais",
];

export const GuaranteesSection = () => {
  const handleCTAClick = () => {
    const phoneNumber = "5531999999999";
    const message = "Olá! Quero solicitar meu orçamento gratuito para conserto de geladeira. Vocês realmente não cobram taxa de visita em BH?";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="garantias" className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-success" />
      
      {/* Animated shapes */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white">
            🛡️ GARANTIAS E FACILIDADES
          </h2>

          <p className="text-xl text-white/90 mb-12">
            Trabalhamos com total transparência e qualidade garantida
          </p>

          {/* Guarantees Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-8 w-8 text-success" />
                </div>
                <span className="text-lg font-semibold text-white text-left">
                  {guarantee}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Pronto para resolver o problema da sua geladeira?
            </h3>
            <p className="text-lg text-white/90 mb-6">
              Atendimento imediato em toda Belo Horizonte
            </p>
            <div className="flex justify-center">
              <CTAButton onClick={handleCTAClick} variant="accent" size="lg">
                QUERO MEU ORÇAMENTO GRÁTIS
              </CTAButton>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
