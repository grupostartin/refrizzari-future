import { motion } from "framer-motion";
import { CTAButton } from "@/components/CTAButton";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const FooterSection = () => {
  const handleCTAClick = () => {
    const phoneNumber = "5531999999999";
    const message = "Olá! Quero solicitar meu orçamento gratuito para conserto de geladeira em BH!";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-primary to-success relative">
        {/* Animated background */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white">
              🚀 Atendemos Toda BH!
            </h2>

            <div className="grid md:grid-cols-4 gap-6 mb-10">
              {[
                { icon: "❌", text: "SEM TAXA DE VISITA" },
                { icon: "💳", text: "6X SEM JUROS" },
                { icon: "📍", text: "TODAS AS REGIÕES" },
                { icon: "⚡", text: "ATENDIMENTO IMEDIATO" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <p className="font-bold text-white">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center"
            >
              <CTAButton onClick={handleCTAClick} variant="accent" size="lg">
                SOLICITAR ORÇAMENTO GRÁTIS
              </CTAButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-black mb-4 text-gradient">Refrizzari</h3>
              <p className="text-white/80 leading-relaxed">
                Especialistas em conserto de geladeiras e freezers em Belo Horizonte e região metropolitana.
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Contato
              </h4>
              <ul className="space-y-2 text-white/80">
                <li>📞 (31) 9XXXX-XXXX</li>
                <li>📧 contato@refrizzari.com.br</li>
              </ul>
            </motion.div>

            {/* Schedule */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Horário
              </h4>
              <ul className="space-y-2 text-white/80">
                <li>Seg-Sex: 8h - 18h</li>
                <li>Sábado: 8h - 12h</li>
                <li>WhatsApp 24/7</li>
              </ul>
            </motion.div>

            {/* Coverage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Atendemos
              </h4>
              <p className="text-white/80 leading-relaxed">
                Todas as regiões de Belo Horizonte: Centro, Pampulha, Savassi, Barreiro, Venda Nova e região metropolitana.
              </p>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/10 text-center text-white/60">
            <p>© 2024 Refrizzari - Conserto de Geladeiras BH. Todos os direitos reservados.</p>
            <p className="mt-2 text-sm">
              Atendimento em Belo Horizonte e Região Metropolitana • Sem Taxa de Visita • Parcelamento em 6x
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};
