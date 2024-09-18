import Gen from "../../components/gen";

const GenCard = ({
  selectedGeneration,
  setSelectedGeneration,
  filteredGenerations,
}) => {
  return (
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
  );
};

export default GenCard;
