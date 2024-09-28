import BaseCard from "@/components/ui/base-card";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";

const ProbabilityCard = () => {
  const steps = [
    "Four Birthday and Monty Hall problem",
    "A/B Testing",
    "Exploratory Data Analysis (EDA)",
    "EDA: Intro to pandas",
    "EDA: Exploring your data",
    "Naive Bayes",
    "Summary statistics ",
    "Visualization of Data Sets",
    "EDA: Data Visualization and Summary",
    // "Simulating Dice Rolls with Numpy",
    // "Loaded Dice",
    // "EDA: Linear Regression",
    // "EDA:  Confidence Intervals with Hypoothesis Testing",
    "Sampling  data from different distribution",
    // "Studying the distribution of sample mean"
  ];

  return (
    <BaseCard
      status={
        <AnimatedGradientText className="relative inline">
          <span className="text-xs animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
            Coming Soon!!
          </span>
        </AnimatedGradientText>
      }
      heading="Probabitly and Statistics"
      steps={steps}
      subheading="Here's what you will learn:"
      statusStyle=""
      buttonText={
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-[#25AFAA] to-[#4C054C]  rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white">
            Coming Soon!!
          </div>
        </>
      }
      buttonPath=""
      buttonStyle="cursor-not-allowed"
      isDisabled={true}
    />
  );
};

export default ProbabilityCard;