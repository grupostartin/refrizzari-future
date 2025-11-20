import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CTAButton } from "@/components/CTAButton";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

type NavItem = {
  label: string;
  href: `#${string}`;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Regiões", href: "#regioes" },
  { label: "Processo", href: "#processo" },
  { label: "Garantias", href: "#garantias" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

const PHONE_NUMBER = "5531999999999";

const scrollToSection = (hash: string) => {
  const element = document.querySelector(hash);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<NavItem["href"]>("#inicio");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}` as NavItem["href"]);
          }
        });
      },
      { threshold: 0.4 },
    );

    const sections = NAV_ITEMS.map((item) => document.querySelector(item.href)).filter(
      (element): element is Element => Boolean(element),
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navList = useMemo(
    () =>
      NAV_ITEMS.map((item, index) => {
        const isActive = activeSection === item.href;
        const isHovered = hoveredIndex === index;

        return (
          <li key={item.href} className="relative">
            <button
              type="button"
              onClick={() => scrollToSection(item.href)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex((prev) => (prev === index ? null : prev))}
              className={cn(
                "group relative z-10 inline-flex px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-all duration-300",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <span className="relative z-10 flex flex-col items-center gap-1">
                <span>{item.label}</span>

                <motion.span
                  className="pointer-events-none h-0.5 w-full rounded-full bg-gradient-to-r from-primary via-success to-accent"
                  animate={{
                    opacity: isHovered || isActive ? 1 : 0,
                    scaleX: isHovered || isActive ? 1 : 0,
                  }}
                  style={{ transformOrigin: "center" }}
                  transition={{ duration: 0.25 }}
                />
              </span>

              <AnimatePresence>
                {(isHovered || isActive) && (
                  <motion.span
                    layoutId="navGlow"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/15 via-success/15 to-accent/20 blur"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                  />
                )}
              </AnimatePresence>
            </button>
          </li>
        );
      }),
    [activeSection, hoveredIndex],
  );

  const handleCTA = () => {
    const message =
      "Olá! Gostaria de agendar um orçamento gratuito para conserto de geladeira em BH. Vi que vocês têm atendimento rápido e sem taxa de visita.";
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const headerClassName = cn(
    "fixed inset-x-0 top-0 z-50 transition-all duration-300",
    isScrolled ? "backdrop-blur-xl bg-white/85 shadow-lg" : "bg-gradient-to-b from-white/70 to-transparent",
  );

  return (
    <motion.header initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} className={headerClassName}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-3 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-3">
            <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-3">
              <img src={logo} alt="Refrizzari" className="h-12 w-auto object-contain drop-shadow-lg" loading="lazy" />
            </motion.div>
            <div className="lg:hidden">
              <CTAButton size="sm" variant="success" onClick={handleCTA}>
                WHATSAPP
              </CTAButton>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-between gap-4">
            <nav className="hidden flex-1 justify-center lg:flex">
              <ul className="flex items-center gap-1 rounded-full border border-white/60 bg-white/70 px-2 py-1 shadow-inner shadow-primary/5">
                {navList}
              </ul>
            </nav>

            <div className="hidden lg:block">
              <CTAButton variant="success" size="sm" onClick={handleCTA}>
                ORÇAMENTO GRÁTIS
              </CTAButton>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        <nav className="lg:hidden">
          <div className="flex gap-2 overflow-x-auto rounded-2xl border border-white/60 bg-white/80 px-3 py-2 shadow-inner shadow-primary/5">
            {NAV_ITEMS.map((item, index) => {
              const isActive = activeSection === item.href;

              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "relative whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition-all",
                    isActive
                      ? "bg-gradient-to-r from-primary to-success text-white shadow-lg shadow-primary/20"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex((prev) => (prev === index ? null : prev))}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

