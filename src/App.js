import './App.css';
import React, {useState} from 'react';

import Title from './components/title/Title';
import CCImage from './components/ccImage/CCImage';
import PaymentEdit from './components/paymentEdit/PaymentEdit';

function App() {
  const [paymentAmount, setPaymentAmount] = useState(0);

  return (
    <div className="container">      
      <section className="title"> 
        <Title />
      </section> 
      <main className="App">
        <section className="ccImage top-padding">
          <CCImage />
        </section> 
        <section className="paymentEdit">
          <PaymentEdit amount = {paymentAmount} />
        </section>
        <section className="ccNameInput side-paddin"></section>
        <section className="ccNumberInput "></section>
        <section className="expCVV "></section>
        <section className="zipCode "></section>
        <section className="payButton  bottom-padding"></section>
      </main>
    </div>
  );
}

export default App;
