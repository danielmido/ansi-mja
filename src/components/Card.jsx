import Gen from "./gen";

const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="d-flex justify-content-center align-items-center gap-3">
        <div
          className="background-image size col-6"
          style={{ backgroundImage: `url(${data.photo})` }}
        ></div>
        <div className="col-5">
          <h2 className="title">{data.name}</h2>
          {data.dateRange}

          <h4>Tipe:</h4>
          <div className="row d-flex gap-3 justify-content-center align-items-center">
            {data.types && (
              data.types.map((type, tIndex) => (
                <div className="card col-3" key={tIndex}>
                  <div className="card-body text-center">
                    <h3 className="title">{type.name}</h3>
                    <p className="descriptions">{type.info}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>


      {data.generation && (
        <div className="generations">
          <h5>Generations:</h5>

          {data.generation.map((gen, gIndex) => (
            <div key={gIndex} className="generation">
              sss
              {gen.types && (
                gen.types.map((type, tIndex) => (
                  <ul key={tIndex}>
                    <li >
                      <strong>{type.name}:</strong> {type.info}
                    </li>
                    <li >
                      {type.photo}sss
                    </li>
                  </ul>
                ))
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
