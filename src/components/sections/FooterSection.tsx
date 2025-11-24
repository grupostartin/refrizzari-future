import { motion } from "framer-motion";
import { CTAButton } from "@/components/CTAButton";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const FooterSection = () => {
  const handleCTAClick = () => {
    window.open("https://api.whatsapp.com/send/?phone=5531981121874&text&type=phone_number&app_absent=0", "_blank");
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

          {/* Google Map and Business Section */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            {/* Map */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 h-[300px] w-full bg-white"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240099.3624343523!2d-44.10413656279286!3d-19.90266149238534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa690cacacf2c33%3A0x5b35795e3ad23997!2sBelo%20Horizonte%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1650000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Belo Horizonte"
              />
            </motion.div>

            {/* Google Business Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl text-center border border-white/20"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md p-3">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Refrizzari no Google</h3>
              <p className="text-gray-600 mb-8">
                Confira nossa localização e o que nossos clientes dizem sobre nossos serviços em BH.
              </p>
              <a 
                href="https://share.google/YYQLoJThd1cBGFmGH" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#4285F4] hover:bg-[#3367D6] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <MapPin className="w-5 h-5" />
                VER NO GOOGLE EMPRESAS
              </a>
            </motion.div>
          </div>
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
                <li>📞 (31) 98112-1874</li>
                <li>📧 hugohungari@gmail.com</li>
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
                <li className="font-bold text-success">Atendimento 24/7</li>
                <li>Segunda a Domingo</li>
                <li>Inclusive Feriados</li>
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
            <p>© 2025 Refrizzari - Conserto de Geladeiras BH. Todos os direitos reservados.</p>
            <p className="mt-2 text-sm">
              Atendimento em Belo Horizonte e Região Metropolitana • Sem Taxa de Visita • Parcelamento em 6x
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};
