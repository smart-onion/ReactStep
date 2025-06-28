import checkIcon from "../../assets/check.png";
import closeIcon from "../../assets/close.png";
import "./PackageCard.css";
export const PackageCard = ({planName, color, price, benefitsList, onPackageSelect}) => {
    return (
        <div className="packageCard" >
            <div className="packageCardHeader" style={{backgroundColor: color}}>
                <p>{planName.toUpperCase()}</p>
            </div>
            <div className="packageCardPrice">
                    <p>${price}</p>
            </div>
            <div className="packageCardBenefits">
                <ul>
                    {benefitsList.map((benefit, index) => (
                        <li key={index}>
                            <img src={benefit.enabled ? checkIcon : closeIcon} alt="benefit icon" />
                            <p>{benefit.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <button type="submit" onClick={() => onPackageSelect(planName)} style={{backgroundColor: color}}>SELECT PACKAGE</button>
        </div>
    );
}