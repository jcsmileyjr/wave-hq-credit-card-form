import './App.css';
import Title from './components/title/Title';
import CCImage from './components/ccImage/CCImage';

function App() {
  return (
    <div className="container">      
      <section className="title"> 
        <Title />
      </section> 
      <main className="App">
        <section className="ccImage top-padding">
          <CCImage />
        </section> 
        <section className="paymentEdit"></section>
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
