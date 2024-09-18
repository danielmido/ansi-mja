const Type = ({ type, tIndex }) => {
  return (
    <div className="card" key={tIndex}>
      <div className="card-body text-center">
        <h5 className="title">{type.name}</h5>
        <p className="descriptions">{type.info}</p>
      </div>
    </div>
  );
};
export default Type;
