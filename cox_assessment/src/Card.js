import './Card.css';
import bridge from './golden_gate.jpg';
import placeholder from './placeholder.png';

const Card = ({ Heading, Subheading, Price, showBridge }) => {
    let pic = placeholder;
    if (showBridge === true) {
        pic = bridge;
    }
    Heading = capitalize(Heading);
    Subheading = capitalize(Subheading);
    Price = "$" + priceFormat(Price);

    return (
        <div className="card">
            <img src={pic} alt="pic" className="card-image"/>
            <div className="card-content">
                <div className = "test">
                <p className="card-heading">
                    {Heading}
                </p>
                <p className="card-subheading">
                    {Subheading}
                </p>
                
                {/* <div className="card-divider" />
                <p className="card-price">
                    {Price}
                </p> */}
                </div>
                
                <div className = "card-bottom">
                <div className="card-divider" />
                <p className="card-price">
                    {Price}
                </p>
                </div>
                
                
            </div> 
        </div>
    );
}

function capitalize(string) {
    let words = string.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    
    return words.join(" ");
}

function priceFormat(price) {
    let p = price.toString().split("").reverse().join("");
    p = p.replace(/(\d{3})/g, '$1,');
    return p.split("").reverse().join("");
}
 
export default Card;