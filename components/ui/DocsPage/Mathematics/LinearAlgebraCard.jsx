import BaseCard from "@/components/ui/base-card";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";

const LinearAlgebraCard = () => {
  const steps = [
    "Introduction to Numpy Arrays",
    "Linear Systems as Matrices",
    "Gaussian Elimination",
    "Webpage navigation model & PCA",
    "Matrix Multiplication",
    "Linear Transformation",
    "Linear Transformations and Neural Networks",
    "Interpreting Eigenvalues",
    "Interpreting Eigenvectors",
    "Application of Eigenvalues & Eigenvectors",
    "Vector Operations",
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
      heading="Linear Algebra"
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

export default LinearAlgebraCard;