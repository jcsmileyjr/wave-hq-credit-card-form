import "./App.css";
import React, { useState } from "react";

import Title from "./components/title/Title";
import CCImage from "./components/ccImage/CCImage";
import PaymentEdit from "./components/paymentEdit/PaymentEdit";
import NameInput from "./components/nameInput/NameInput";
import NumberInput from "./components/numberInput/NumberInput";
import ExpCVV from './components/expCVV/expCVV';

function App() {
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [userName, setUserName] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userCCExpireDate, setUserCCExpireDate] = useState("");
  const [userCCCVV, setUserCCCVV] = useState("");

  const updatePaymentAmount = (amount) => {
    setPaymentAmount(amount);
  };

  const getUserName = (name) => {
    setUserName(name);
  };

  const getUserNumber = (number) => {
    setUserNumber(number);
  };

  return (
    <div className="container">
      <section className="title">
        <Title />
      </section>
      <main className="App">
        <section className="ccImage">
          <CCImage />
        </section>
        <section className="paymentEdit">
          <PaymentEdit
            amount={paymentAmount}
            getPaymentAmount={updatePaymentAmount}
          />
        </section>
        <section className="ccNameInput">
          <NameInput getName={getUserName} />
        </section>
        <section className="ccNumberInput ">
          <NumberInput ccNumber={userNumber} getNumber={getUserNumber} />
        </section>
        <section className="expCVV ">
          <ExpCVV expDate={userCCExpireDate} cvv={userCCCVV} getCVV={setUserCCCVV} getExpireDate={setUserCCExpireDate} />
        </section>
        <section className="zipCode "></section>
        <section className="payButton  bottom-padding"></section>
      </main>
    </div>
  );
}

export default App;
