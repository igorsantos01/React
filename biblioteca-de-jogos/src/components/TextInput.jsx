const TextInput = ({ id, label, value, setValue }) => {
  <div>
    <label htmlFor={id}>{label}</label>
    <input
      type="text"
      name={id}
      id={id}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  </div>;
};

export default TextInput;
