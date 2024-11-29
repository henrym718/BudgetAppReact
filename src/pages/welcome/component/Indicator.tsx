import { motion } from "framer-motion";

interface Props {
  totalSteps: number;
  currentStep: number;
}

export function Indicator({ totalSteps, currentStep }: Props) {
  const range = (x: number) => Array.from({ length: x });

  // Estilos para el paso activo
  const style_active = {
    height: "4px",
    width: "14px",
    backgroundColor: "black",
  };

  // Estilos para el paso inactivo
  const style_default = {
    height: "2px",
    width: "8px",
    backgroundColor: "#c5c9cc",
  };

  return (
    <div className="flex gap-1 items-center">
      {range(totalSteps).map((_, index) => (
        <motion.div
          key={index}
          className="rounded-3xl"
          style={index === currentStep ? style_active : style_default}
          animate={{
            width: index === currentStep ? "14px" : "8px",
            height: index === currentStep ? "4px" : "2px",
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 6,
            duration: 0.1,
          }}
        ></motion.div>
      ))}
    </div>
  );
}
