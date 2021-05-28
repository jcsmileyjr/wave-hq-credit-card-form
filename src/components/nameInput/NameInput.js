import './nameInput.css'


const NameInput =(props) => {
    return(
        <section className="nameInput__container">
            <label>Name on card</label>
            <input className="nameInput__input--style" type="text" onChange={(e) => props.getName(e.target.value)} />
        </section>
    );
}

export default NameInput;