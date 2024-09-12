import { useState } from "react";
import Card from "../components/Card";
import Select from "../components/Select";
import Variants from "../components/Variants";

import { listMerkMobil } from "../arrays/listMerkMobil";
import Gen from "../components/gen";

const Mobil = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedVariant, setSelectedVariant] = useState("");
  const [selectedGeneration, setSelectedGeneration] = useState("");

  // Filter cars based on selected brand
  const filteredCars = selectedBrand
    ? listMerkMobil.find((car) => car.id.toString() === selectedBrand) || {}
    : {};

  // Filter variants based on the selected car
  const filteredVariants = filteredCars.variant || [];
  const filteredSelectedVariant = selectedVariant
    ? filteredVariants.find((variant) => variant.name === selectedVariant) || {}
    : {};

  // Filter generations based on the selected variant
  const filteredGenerations = filteredSelectedVariant.generation || [];
  const filteredSelectedGeneration = selectedGeneration
    ? filteredGenerations.find((gen) => gen.name === selectedGeneration) || {}
    : {};

  return (
    <>
      {/* Select Brand */}
      <Select setSelectedBrand={setSelectedBrand} />

      {selectedBrand === "" ? (
        <p>Please select a car brand to view details.</p>
      ) : (
        <>
          <h3>Variants</h3>
          <div className="d-flex justify-content-center gap-3 align-items-center">
            {filteredVariants.length > 0 ? (
              filteredVariants.map((variant, index) => (
                <Variants
                  key={index}
                  nameVariants={variant.name}
                  isActive={selectedVariant === variant.name}
                  onClick={() => {
                    setSelectedVariant(variant.name);
                    setSelectedGeneration(""); // Reset the generation when variant is selected
                  }}
                />
              ))
            ) : (
              <p>No variants available for the selected brand.</p>
            )}
          </div>

          {/* Select Generation */}
          {selectedVariant && (
            <>
              <h3>Generations</h3>
              <div className="d-flex justify-content-center gap-3 align-items-center">
                {filteredGenerations.length > 0 ? (
                  filteredGenerations.map((gen, index) => (
                    <Gen
                      key={index}
                      genName={gen.name}
                      dateRange={gen.dateRange}
                      isActive={selectedGeneration === gen.name}
                      onClick={() => setSelectedGeneration(gen.name)}
                    />
                  ))
                ) : (
                  <p>No generations available for the selected variant.</p>
                )}
              </div>
            </>
          )}

          <h3>Details</h3>
          {selectedGeneration && filteredSelectedGeneration.types ? (
            <>
              <Card data={filteredSelectedGeneration} />
            </>
          ) : (
            <p>No details available for the selected generation.</p>
          )}
        </>
      )}
    </>
  );
};

export default Mobil;
