import { useState } from "react";
import './../styles/global.css'
import './AddCategory.css'
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState([]);

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} className="form-container">
      
      <input className="form-placeholder"
        type="text"
        placeholder="Search...."
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
