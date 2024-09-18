import Variants from "../../components/Variants";

export const VariantsCard = ({
  selectedVariant,
  setSelectedVariant,
  setSelectedGeneration,
  filteredVariants,
}) => {
  return (
    <div className="d-flex justify-content-center gap-3 align-items-center">
      {filteredVariants.length > 0 ? (
        filteredVariants.map((variant, index) => (
          <Variants
            key={index}
            nameVariants={variant.name}
            isActive={selectedVariant === variant.name}
            onClick={() => {
              setSelectedVariant(variant.name);
              setSelectedGeneration("");
            }}
          />
        ))
      ) : (
        <p>No variants available for the selected brand.</p>
      )}
    </div>
  );
};
