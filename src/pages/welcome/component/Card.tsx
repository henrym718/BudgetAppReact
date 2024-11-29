import { IData } from "../../../data/dataCard";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Indicator } from "../component/Indicator";
import { motion } from "motion/react";

interface Props {
  data: IData;
  currentStep: number;
  totalSteps: number;
  nextStep(): void;
  prevStep(): void;
}

export const Card = ({
  data,
  currentStep,
  totalSteps,
  nextStep,
  prevStep,
}: Props) => {
  const handleNextStep = () => {
    nextStep();
  };

  const handlePrevStep = () => {
    prevStep();
  };

  return (
    <div className="flex flex-col border-2 rounded-3xl w-[350px] overflow-auto">
      <div
        style={{ background: data.bgColor }}
        className="h-96 flex items-center justify-center"
      >
        <motion.img
          className="w-64 h-auto"
          src={data.image}
          alt={data.tittle}
          key={currentStep}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        />{" "}
      </div>
      <div className="px-6 h-64 pt-6">
        <h2 className="text-lg font-semibold pb-1">{data.tittle}</h2>
        <p className="text-sm">{data.content}</p>
        <div className="flex justify-between pt-10 items-center">
          <Indicator currentStep={currentStep} totalSteps={totalSteps} />
          <div className="flex gap-2">
            {currentStep > 0 && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className=" flex justify-center items-center rounded-full w-12 h-12 bg-white border border-black"
                onClick={handlePrevStep}
              >
                <ArrowLeft color="#000000" width={15} strokeWidth={3} />
              </motion.div>
            )}
            {currentStep <= totalSteps - 1 && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className=" flex justify-center items-center rounded-full w-12 h-12 bg-black "
                onClick={handleNextStep}
              >
                <ArrowRight color="#ffffff" width={15} strokeWidth={3} />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
