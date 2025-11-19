import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Star, MapPin } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    location: "Savassi",
    rating: 5,
    text: "Excelente serviço! Atenderam super rápido aqui na Savassi e realmente não cobraram taxa de visita. O técnico foi muito profissional e explicou tudo direitinho. Minha geladeira voltou a funcionar perfeitamente!",
  },
  {
    name: "João Santos",
    location: "Pampulha",
    rating: 5,
    text: "Sem taxa de visita mesmo! Achei que era pegadinha, mas não. Vieram aqui na Pampulha, fizeram o orçamento de graça e o preço estava ótimo. Parcelei em 6x sem juros. Recomendo para toda região!",
  },
  {
    name: "Ana Paula Costa",
    location: "Barreiro",
    rating: 5,
    text: "Melhor experiência que já tive com assistência técnica! Atenderam no Barreiro em menos de 24h. O técnico foi super educado e resolveu o problema da minha geladeira rapidinho. Nota 10!",
  },
  {
    name: "Carlos Eduardo",
    location: "Centro",
    rating: 5,
    text: "Precisava de urgência e eles atenderam! Moro no Centro e em poucas horas já tinha um técnico aqui. Serviço rápido, preço justo e com garantia. Muito satisfeito com o atendimento!",
  },
  {
    name: "Juliana Martins",
    location: "Venda Nova",
    rating: 5,
    text: "Atendimento impecável na Venda Nova! Adorei a transparência do orçamento e a possibilidade de parcelar. A geladeira está funcionando perfeitamente há 3 meses. Super recomendo!",
  },
  {
    name: "Roberto Lima",
    location: "Contagem",
    rating: 5,
    text: "Mesmo morando em Contagem fui muito bem atendido. Equipe pontual, serviço de qualidade e preço honesto. A garantia de 90 dias me passou muita segurança. Empresa séria!",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-muted/30">
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
            O Que Dizem Nossos
            <br />
            <span className="text-gradient">Clientes em BH</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Avaliações reais de clientes satisfeitos em toda Belo Horizonte
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <GlassCard key={index} delay={index * 0.1}>
              <div className="p-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author info */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                  <div className="text-3xl">⭐</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3">
            <Star className="h-6 w-6 fill-accent text-accent" />
            <span className="text-2xl font-bold text-primary">4.9/5.0</span>
            <span className="text-muted-foreground">• Mais de 1.500 avaliações em BH</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
