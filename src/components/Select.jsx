import Select from "react-select";
import { listMerkMobil } from "../arrays/listMerkMobil";

const CustomSelect = ({ setSelectedBrand }) => {
  const options = listMerkMobil.map((data) => ({
    value: data.id,
    label: data.name,
  }));

  const handleChange = (selectedOption) => {
    setSelectedBrand(selectedOption ? selectedOption.value : null);
  };

  return (
    <>
      <label htmlFor="car-select" className="form-label">
        Select Car Brand
      </label>
      <Select
        id="car-select"
        options={options}
        onChange={handleChange}
        isClearable
        placeholder="Select a brand..."
        classNamePrefix="react-select"
      />
    </>
  );
};

export default CustomSelect;
