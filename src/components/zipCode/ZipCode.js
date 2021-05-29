import "./zipCode.css";
import InputMask from "react-input-mask";

const ZipCode = (props) => {
  return (
    <section className="zipCodeInput__container">
      <label>Zip Code</label>
      <InputMask
        mask="99999"
        value={props.zipCode}
        onChange={(e) => props.getZipCode(e.target.value)}
      >
        {(inputProps) => (
          <input
            {...inputProps}
            type="text"
            pattern="[0-9]+"
            className="zipCodeInput__input--style"
          />
        )}
      </InputMask>
    </section>
  );
};

export default ZipCode;
