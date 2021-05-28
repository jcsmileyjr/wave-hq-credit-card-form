import "./paymentEdit.css";
import React, {useState} from 'react';

const PaymentEdit = (props) => {
    const [isEditMode, setEditMode] = useState(false);

    return(
        <section >
            <label>Payment amount</label>
            <div className="paymentEdit__container">
                {!isEditMode && 
                    <label className="paymentEdit__dollarAmount--style">${props.amount}.00</label>
                }
                {isEditMode && <input type="text" />}          
                
                <button type="button">Edit</button>
            </div>
        </section>
    );
}

export default PaymentEdit;