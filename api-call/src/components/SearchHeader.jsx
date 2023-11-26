import "./SearchHeader.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function SearchHeader({ search }) {
  const [valueInput, setValue] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-debugger
    debugger;
    search(valueInput);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="formDiv">
      <form className="form" onSubmit={handleFormSubmit}>
        <label>Ne Arıyorsunuz ?</label>
        <input
          value={valueInput}
          onChange={handleChange}
          placeholder="Nesne isimlerini giriniz..."
        />
      </form>
    </div>
  );
}

export default SearchHeader;
