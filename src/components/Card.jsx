import useSettingSlide from "./common/settingSlide";
import Type from "./type";
import Slider from "react-slick";
const Card = ({ data }) => {
  const { settings } = useSettingSlide();

  return (
    <div className="card">
      <div className="card-body d-lg-flex d-block justify-content-center align-items-center gap-5">
        <div
          className="background-image size col-lg-5 p-4"
          style={{ backgroundImage: `url(${data.photo})` }}
        ></div>
        <div className="col-lg-5">
          <h2 className="title">{data.name}</h2>
          <p className="text-secondary">{data.dateRange}</p>
          <h4>Tipe:</h4>
          <Slider {...settings}>
            {data.types &&
              data.types.map((type, tIndex) => (
                <div key={tIndex} className="ms-2 me-2">
                  <Type type={type} tIndex={tIndex} />
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Card;
