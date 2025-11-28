import { motion } from "framer-motion";
import { PulsingBadge } from "@/components/PulsingBadge";
import { CTAButton } from "@/components/CTAButton";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { CheckCircle2, Clock, Users, Star } from "lucide-react";
import funcionarioImage from "@/assets/funcionario.png";

export const HeroSection = () => {
  const handleCTAClick = () => {
    window.open("https://api.whatsapp.com/send/?phone=5531981121874&text&type=phone_number&app_absent=0", "_blank");
  };

  return (
    <section id="inicio" className="relative min-h-screen flex justify-center overflow-hidden bg-gradient-hero pt-12 lg:pt-12">
      {/* Floating shapes background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-success/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Pulsing Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start mb-6"
            >
              <PulsingBadge variant="accent">
                🔥 ATENDIMENTO EM ATÉ 2H • SEM TAXA DE VISITA
              </PulsingBadge>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            >
              Conserto de{" "}
              <span className="text-gradient">Geladeira</span>
              <br />
              <span className="text-gradient">a Domicílio</span>
              <br />
              em Belo Horizonte
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8"
            >
              ⚡ <span className="font-bold text-accent">Atendimento em até 2 horas</span>
              <br />
              📍 Todas as regiões de Belo Horizonte
            </motion.p>

            {/* Features Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/40 shadow-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "SEM TAXA DE VISITA",
                  "PARCELA EM 6X SEM JUROS",
                  "ATENDEMOS TODA BH",
                  "GARANTIA DE 90 DIAS",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0" />
                    <span className="font-semibold text-sm md:text-base">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="flex justify-center lg:justify-start mb-10"
            >
              <CTAButton onClick={handleCTAClick} variant="success" size="lg">
                SOLICITAR ORÇAMENTO GRÁTIS
              </CTAButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-8"
            >
              <div className="text-center">
                <div className="flex items-center gap-2 justify-center lg:justify-start mb-1">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-3xl font-bold text-primary">
                    <AnimatedCounter end={24} suffix="h" />
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Atendimento</p>
              </div>

              <div className="text-center">
                <div className="flex items-center gap-2 justify-center lg:justify-start mb-1">
                  <Users className="h-5 w-5 text-success" />
                  <span className="text-3xl font-bold text-success">
                    +<AnimatedCounter end={1500} />
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Clientes em BH</p>
              </div>

              <div className="text-center">
                <div className="flex items-center gap-2 justify-center lg:justify-start mb-1">
                  <Star className="h-5 w-5 text-accent fill-accent" />
                  <span className="text-3xl font-bold text-accent">
                    <AnimatedCounter end={4.9} decimals={1} />
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Avaliação</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={funcionarioImage}
                alt="Técnico profissional consertando geladeira em BH"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-success/10 rounded-full p-3">
                  <CheckCircle2 className="h-6 w-6 text-success" />
                </div>
                <div>
                  <p className="font-bold text-lg">Sem Taxa de Visita</p>
                  <p className="text-sm text-muted-foreground">Em toda BH</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
