import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export const AnimatedCounter = ({ 
  end, 
  duration = 2, 
  suffix = "", 
  prefix = "",
  decimals = 0 
}: AnimatedCounterProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <span ref={ref}>
      {inView && (
        <CountUp
          end={end}
          duration={duration}
          suffix={suffix}
          prefix={prefix}
          decimals={decimals}
          separator="."
        />
      )}
    </span>
  );
};
