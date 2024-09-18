import { listMerkMobil } from "../../../arrays/listMerkMobil";

export const filtering = (
  selectedBrand,
  selectedVariant,
  selectedGeneration
) => {
  const filteredCars = selectedBrand
    ? listMerkMobil.find((car) => car.id === parseInt(selectedBrand)) || {}
    : {};

  const filteredVariants = filteredCars.variant || [];
  const filteredSelectedVariant = selectedVariant
    ? filteredVariants.find((variant) => variant.name === selectedVariant) || {}
    : {};

  const filteredGenerations = filteredSelectedVariant.generation || [];
  const filteredSelectedGeneration = selectedGeneration
    ? filteredGenerations.find((gen) => gen.name === selectedGeneration) || {}
    : {};

  return {
    filteredVariants,
    filteredGenerations,
    filteredSelectedGeneration,
  };
};
