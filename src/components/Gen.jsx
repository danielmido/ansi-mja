const Gen = ({ genName, dateRange, isActive, onClick }) => {
  return (
    <div
      className={`card col-1 ${isActive ? "active" : ""}`}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <p>{genName}</p>
      <small>{dateRange}</small>
    </div>
  );
};

export default Gen;
