import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Vocês cobram taxa de visita em BH?",
    answer: "Não! Não cobramos taxa de visita em toda Belo Horizonte e região metropolitana. O orçamento é 100% gratuito e sem compromisso. Você só paga se aprovar o serviço.",
  },
  {
    question: "Atendem minha região em Belo Horizonte?",
    answer: "Sim! Atendemos todas as regiões de Belo Horizonte (Centro, Pampulha, Savassi, Barreiro, Venda Nova, etc) e toda região metropolitana (Contagem, Betim, Nova Lima, Ribeirão das Neves, Santa Luzia, entre outras).",
  },
  {
    question: "Posso parcelar o pagamento?",
    answer: "Sim! Você pode parcelar em até 6x sem juros no cartão de crédito. Também aceitamos outras formas de pagamento como PIX, débito e dinheiro.",
  },
  {
    question: "Quanto tempo demora para atender?",
    answer: "Atendemos em menos de 24 horas em qualquer região de Belo Horizonte. Em casos de emergência, priorizamos o atendimento para resolver seu problema o mais rápido possível.",
  },
  {
    question: "O serviço tem garantia?",
    answer: "Sim! Todos os nossos serviços têm garantia de 90 dias. Trabalhamos apenas com peças de qualidade e técnicos certificados para garantir a durabilidade do conserto.",
  },
  {
    question: "Atendem quais marcas de geladeira?",
    answer: "Atendemos todas as marcas: Brastemp, Consul, Electrolux, Samsung, LG, Panasonic, Esmaltec, Continental, Dako, entre outras. Nossos técnicos são especializados em diversos modelos.",
  },
  {
    question: "Como funciona o agendamento?",
    answer: "É muito simples! Basta entrar em contato pelo WhatsApp, informar o problema e sua região em BH. Agendamos um horário que melhor se encaixe na sua rotina para fazer o orçamento gratuito.",
  },
  {
    question: "Vocês trabalham com freezer também?",
    answer: "Sim! Além de geladeiras, também fazemos conserto de freezers de todas as marcas e modelos. O atendimento segue o mesmo padrão: sem taxa de visita e com garantia.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-muted/30 to-white">
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
            <span className="text-gradient">Dúvidas</span> Frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Respostas para as perguntas mais comuns sobre nosso serviço em BH
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white rounded-2xl px-6 border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-bold text-lg hover:text-primary py-6">
                    ❓ {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-muted-foreground">
            Não encontrou sua dúvida? Entre em contato pelo WhatsApp!
          </p>
        </motion.div>
      </div>
    </section>
  );
};
