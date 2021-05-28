import './numberInput.css';

const NumberInput = (props) => {
    return(
        <section className="numberInput__container">
            <label>Card Number</label>
            <input className="numberInput__input--style" type="text" onChange={(e) => props.getNumber(e.target.value)} />
        </section>
    );
}

export default NumberInput;