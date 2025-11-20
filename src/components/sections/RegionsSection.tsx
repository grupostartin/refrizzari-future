import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { MapPin } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";

const regions = [
  {
    name: "🏙️ REGIÃO CENTRO",
    neighborhoods: ["Centro", "Savassi", "Funcionários", "Lourdes", "Santo Agostinho", "Santa Efigênia"],
  },
  {
    name: "🌳 REGIÃO PAMPULHA",
    neighborhoods: ["Pampulha", "São Luiz", "Castelo", "Ouro Preto", "Jaraguá", "Dona Clara"],
  },
  {
    name: "🏘️ REGIÃO SUL",
    neighborhoods: ["Saúde", "Santa Amélia", "Mangabeiras", "Belvedere", "Serra", "Sion"],
  },
  {
    name: "🌆 REGIÃO NORTE",
    neighborhoods: ["Venda Nova", "Cachoeirinha", "Floresta", "Prado Lopes", "Ribeiro de Abreu", "Aarão Reis"],
  },
  {
    name: "🏡 REGIÃO OESTE",
    neighborhoods: ["Barreiro", "Lindéia", "Calafate", "Padre Eustáquio", "Carlos Prates", "Nova Suíça"],
  },
  {
    name: "🌄 REGIÃO LESTE",
    neighborhoods: ["Santa Tereza", "Serra do Curral", "Horto", "Taquaril", "São Geraldo", "Sagrada Família"],
  },
];

const metropolitanCities = [
  "Contagem", "Nova Lima", "Betim", "Ibirité", 
  "Ribeirão Neves", "Santa Luzia", "Sabará", "Vespasiano", "Lagoa Santa"
];

export const RegionsSection = () => {
  const handleCTAClick = () => {
    const phoneNumber = "5531999999999";
    const message = "Olá! Gostaria de confirmar se vocês atendem minha região em BH para conserto de geladeira. Não cobram taxa de visita mesmo?";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="regioes" className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3 mb-6">
            <MapPin className="h-6 w-6 text-primary" />
            <span className="font-bold text-primary">ATENDIMENTO COMPLETO</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            📍 Atendemos Toda
            <br />
            <span className="text-gradient">Belo Horizonte</span>
            <br />
            <span className="text-gradient">e Região Metropolitana</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cobertura completa em todas as regiões de BH com atendimento rápido em menos de 24h
          </p>
        </motion.div>

        {/* Regions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {regions.map((region, index) => (
            <GlassCard key={index} delay={index * 0.1}>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">{region.name}</h3>
                <ul className="space-y-2">
                  {region.neighborhoods.map((neighborhood, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-success" />
                      {neighborhood}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center bg-gradient-to-r from-primary/10 via-success/10 to-accent/10 rounded-3xl p-8"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ⚡ Atendimento em menos de 24h
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Escolha sua região acima e solicite seu orçamento gratuito agora!
            </p>
            <CTAButton onClick={handleCTAClick} variant="success">
              SOLICITAR ORÇAMENTO GRÁTIS
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
