import { useState } from "react";
import Card from "../../components/Card";
import Select from "../../components/Select";
import { filtering } from "./hook/filtering";
import { VariantsCard } from "./variantsCard";
import GenCard from "./genCard";

const Body = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedVariant, setSelectedVariant] = useState("");
  const [selectedGeneration, setSelectedGeneration] = useState("");

  const { filteredVariants, filteredGenerations, filteredSelectedGeneration } =
    filtering(selectedBrand, selectedVariant, selectedGeneration);

  return (
    <>
      <Select setSelectedBrand={setSelectedBrand} />

      {!selectedBrand ? (
        <p>Please select a car brand to view details.</p>
      ) : (
        <>
          <h3>Variants</h3>
          <VariantsCard
            selectedVariant={selectedVariant}
            setSelectedVariant={setSelectedVariant}
            setSelectedGeneration={setSelectedGeneration}
            filteredVariants={filteredVariants}
          />

          {selectedVariant && (
            <GenCard
              selectedGeneration={selectedGeneration}
              setSelectedGeneration={setSelectedGeneration}
              filteredGenerations={filteredGenerations}
            />
          )}

          <h3>Details</h3>
          {selectedGeneration && filteredSelectedGeneration.types ? (
            <Card data={filteredSelectedGeneration} />
          ) : (
            <p>No details available for the selected generation.</p>
          )}
        </>
      )}
    </>
  );
};

export default Body;
