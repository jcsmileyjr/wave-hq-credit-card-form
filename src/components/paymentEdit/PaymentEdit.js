import "./paymentEdit.css";
import React, {useState} from 'react';

const PaymentEdit = (props) => {
    const [isEditMode, setEditMode] = useState(false);
    const [newAmount , setNewAmount] = useState(0);

    const editAmount = () => {
        setEditMode(!isEditMode);
    }

    const updateNewAmount = () => {
        props.getPaymentAmount(newAmount);
        editAmount();
    }

    return(
        <section >
            <label>Payment amount</label>
            {!isEditMode && 
            <div className="paymentEdit__container">
                    <label className="paymentEdit__dollarAmount--style">${props.amount}.00</label>
                    <button onClick={() => editAmount()} type="button">Edit</button>
            </div>
            }
            {isEditMode && 
            <div className="paymentEdit__container">
                <section className="paymentEdit__input__Container">
                    <div className="paymentEdit_input__addon">$</div>
                    <input 
                        onChange={(event) => setNewAmount(event.target.value)}
                        className="paymentEdit_input--style" 
                        type="text" />
                </section>                
                <button onClick={() => updateNewAmount()} type="button">Done</button>
            </div>
            }          
        </section>
    );
}

export default PaymentEdit;