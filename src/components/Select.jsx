import { listMerkMobil } from "../arrays/listMerkMobil";

const Select = ({ setSelectedBrand }) => {
  const handleChange = (e) => {
    setSelectedBrand(e.target.value);
  };

  return (
    <>
      <label htmlFor="car-select">Select</label>
      <select id="car-select" onChange={handleChange}>
        <option value="">...</option>
        {listMerkMobil.map((data) => (
          <option key={data.id} value={data.id}>
            {data.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
