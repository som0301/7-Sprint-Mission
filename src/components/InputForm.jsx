import "./InputForm.css";
import { attachObjectParticle } from "../modules/js/utils.js";

function InputForm({ id, name, type = "text", onChange, warning }) {
  const handleImageChange = (e) => {
    const value = e.target.value;
    onChange(id, value);
  };

  return (
    <form className="InputForm">
      <label className="InputForm-title" for={id}>
        {name}
      </label>
      <input
        id={id}
        className="InputForm-content"
        type={type}
        placeholder={`${attachObjectParticle(name)} 입력해주세요.`}
        onChange={handleImageChange}
      />
      {warning && <p className="InputForm-warning"></p>}
    </form>
  );
}

export default InputForm;
