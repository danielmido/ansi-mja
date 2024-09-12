const Variants = ({ nameVariants, isActive, onClick }) => {
  return (
    <div
      className={`card col-lg-3 col-5 card-body d-flex justify-content-center align-items-center text-black ${
        isActive ? "active-variant" : ""
      } text-center`}
      onClick={onClick}
      style={{
        cursor: "pointer",
        backgroundColor: isActive ? "#add8e6" : "white",
      }}
    >
      <h5>{nameVariants}</h5>
    </div>
  );
};

export default Variants;
