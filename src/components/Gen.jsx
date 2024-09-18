const Gen = ({ genName, dateRange, isActive, onClick }) => {
  return (
    <div
      className={`card col-3 text-center h-100 ${isActive ? "active" : ""}`}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <div className="card-body">
        <p className="m-0">{genName}</p>
        <p className="mt-2">{dateRange}</p>
      </div>
    </div>
  );
};

export default Gen;
