import { motion } from "framer-motion";
import { MessageCircle, Calendar, FileCheck, Wrench } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "1",
    title: "ENTRE EM CONTATO",
    description: "📱 WhatsApp",
    details: "Envie mensagem pelo WhatsApp e conte o problema da sua geladeira",
  },
  {
    icon: Calendar,
    number: "2",
    title: "AGENDAMOS A VISITA",
    description: "✓ Sem taxa em BH",
    details: "Marcamos horário que melhor se encaixa na sua rotina, sem nenhuma taxa",
  },
  {
    icon: FileCheck,
    number: "3",
    title: "ORÇAMENTO GRATUITO",
    description: "Você decide",
    details: "Nosso técnico avalia o problema e apresenta orçamento sem compromisso",
  },
  {
    icon: Wrench,
    number: "4",
    title: "CONSERTO RÁPIDO",
    description: "Parcele em 6x",
    details: "Aprovado o orçamento, realizamos o conserto com garantia de 90 dias",
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary/5">
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
            Como <span className="text-gradient">Funciona</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Processo simples e transparente em 4 passos
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection line - desktop only */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-primary" 
                 style={{ width: 'calc(100% - 8rem)', marginLeft: '4rem' }} 
            />

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Step number badge */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6 shadow-lg"
                  >
                    <span className="text-2xl font-black text-white">{step.number}</span>
                  </motion.div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>

                    <h3 className="font-bold text-lg mb-2 text-center">{step.title}</h3>
                    <p className="text-sm font-semibold text-primary text-center mb-3">
                      {step.description}
                    </p>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      {step.details}
                    </p>
                  </motion.div>

                  {/* Arrow - mobile only */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <div className="w-1 h-8 bg-gradient-to-b from-primary to-success" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground mb-2">
            ⚡ Processo rápido e sem complicação
          </p>
          <p className="text-2xl font-bold text-primary">
            Da solicitação ao conserto em menos de 24h
          </p>
        </motion.div>
      </div>
    </section>
  );
};
