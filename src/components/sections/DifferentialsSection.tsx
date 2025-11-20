import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Ban, CreditCard, MapPin, Shield, Clock, ThumbsUp } from "lucide-react";

const differentials = [
  {
    icon: Ban,
    title: "❌ SEM TAXA DE VISITA",
    description: "Em toda Belo Horizonte",
    details: "Você só paga se aprovar o serviço. Orçamento totalmente gratuito sem compromisso.",
    color: "text-accent",
    glow: "group-hover:shadow-[0_0_30px_rgba(255,107,53,0.3)]",
  },
  {
    icon: CreditCard,
    title: "💳 PARCELAMENTO 6X",
    description: "Sem juros, sem burocracia",
    details: "Parcele em até 6x sem juros no cartão. Conserto profissional que cabe no seu bolso.",
    color: "text-success",
    glow: "group-hover:shadow-[0_0_30px_rgba(0,217,163,0.3)]",
  },
  {
    icon: MapPin,
    title: "📍 COBERTURA TOTAL BH",
    description: "Todas as regiões",
    details: "Centro, Pampulha, Barreiro, Venda Nova e toda região metropolitana. Atendimento rápido onde você estiver.",
    color: "text-primary",
    glow: "group-hover:shadow-[0_0_30px_rgba(0,102,255,0.3)]",
  },
  {
    icon: Shield,
    title: "🛡️ GARANTIA 90 DIAS",
    description: "Serviço garantido",
    details: "Todos os nossos serviços têm garantia de 90 dias. Trabalho com qualidade e segurança.",
    color: "text-primary",
    glow: "group-hover:shadow-[0_0_30px_rgba(0,102,255,0.3)]",
  },
  {
    icon: Clock,
    title: "⚡ ATENDIMENTO 24H",
    description: "Rapidez quando você precisa",
    details: "Atendemos sua solicitação em até 24 horas. Emergências priorizadas em toda BH.",
    color: "text-accent",
    glow: "group-hover:shadow-[0_0_30px_rgba(255,107,53,0.3)]",
  },
  {
    icon: ThumbsUp,
    title: "👨‍🔧 TÉCNICOS CERTIFICADOS",
    description: "Profissionais especializados",
    details: "Equipe treinada e certificada para todas as marcas de geladeiras e freezers.",
    color: "text-success",
    glow: "group-hover:shadow-[0_0_30px_rgba(0,217,163,0.3)]",
  },
];

export const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-20 bg-gradient-to-b from-muted/30 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Por Que Escolher a
            <br />
            <span className="text-gradient">Refrizzari</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Diferenciais que fazem toda a diferença no seu atendimento
          </p>
        </motion.div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <GlassCard key={index} delay={index * 0.1} className="group">
                <div className={`p-8 transition-all duration-300 ${item.glow}`}>
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                  >
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br from-${item.color}/10 to-${item.color}/5`}>
                      <Icon className={`h-10 w-10 ${item.color}`} />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  
                  {/* Description */}
                  <p className={`text-sm font-semibold mb-3 ${item.color}`}>
                    {item.description}
                  </p>

                  {/* Details */}
                  <p className="text-muted-foreground leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
