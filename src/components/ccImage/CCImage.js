import "./ccImage.css";
import VISA from '../../assets/visa.jpg';
import AmericanExpress from '../../assets/american-express.png';
import Discover from '../../assets/discover_logo.png';
import MasterCard from '../../assets/master-card.png';
const CCImage = () => {
    return(
        <section className="ccImages__container--style">
            <img className="ccImages__image--style" src={VISA} alt="Visa credit card" />
            <img className="ccImages__image--style american-express-style" src={AmericanExpress} alt="American Express credit card" />
            <img className="ccImages__image--style" src={Discover} alt="Discover credit card" />
            <img className="ccImages__image--style" src={MasterCard} alt="Master Card credit card" />
        </section>
    );
}

export default CCImage;