import "./expCVV.css";
import InputMask from "react-input-mask";

const ExpCVV = (props) => {
  return (
    <section>
      <div className="label__container">
        <label >Expire Date</label>
        <label>Security Code</label>
      </div>
      <div className="label__container">
        <InputMask
          mask="99/99"
          value={props.expDate}
          onChange={(e) => props.getExpireDate(e.target.value)}
        >
          {(inputProps) => (
            <input
              {...inputProps}
              type="text"
              pattern="[0-9]+"
              className="expireInput--style"
            />
          )}
        </InputMask>
        <InputMask
          mask="999"
          value={props.cvv}
          onChange={(e) => props.getCVV(e.target.value)}
        >
          {(inputProps) => (
            <input
              {...inputProps}
              type="text"
              pattern="[0-9]+"
              className="cvvInput--style"
            />
          )}
        </InputMask>
      </div>
    </section>
  );
};

export default ExpCVV;
