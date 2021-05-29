import './numberInput.css';
import InputMask from "react-input-mask";

const NumberInput = (props) => {
    return(
        <section className="numberInput__container">
            <label>Card Number</label>
            <InputMask  mask="9999-9999-9999-9999" 
                        value={props.ccNumber}                         
                        onChange={(e) => props.getNumber(e.target.value)}>
                {(inputProps) => (
                  <input
                    {...inputProps}
                    type="text"
                    pattern="[0-9]+"
                    className="numberInput__input--style"
                  />
                )}
              </InputMask>
        </section>
    );
}

export default NumberInput;