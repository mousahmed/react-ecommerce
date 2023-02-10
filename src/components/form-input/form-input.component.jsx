import "./form-input.styles.scss";
function FormInput({
  id,
  type,
  name,
  value,
  changeHandler,
  label,
  isRequired = false,
}) {
  return (
    <div className="group">
      <input
        className="form-input"
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={changeHandler}
        required={isRequired}
      />
      {label && (
        <label
          className={`${value.length ? "shrink" : ""} form-input-label`}
          htmlFor={id}
        >
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;
