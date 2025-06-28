import  {Header} from './components/Header/Header.jsx';
import {Content} from './components/Content/Content.jsx';
import {PackageCard} from "./components/PackageCard/PackageCard.jsx";
import './App.css'

function App() {

    const selectedBenefits = (indexes) =>{
        let benefitsList = [
            {enabled: false, description: "Sample text here"},
            {enabled: false, description: "Other text Title"},
            {enabled: false, description: "Text Space Goes Here"},
            {enabled: false, description: "Description Space"},
        ]
       return benefitsList.map((benefit, index) =>{
            if(indexes.includes(index)){ benefit.enabled = true; }
            return benefit;
        })
    }

    const onPackageSelect = (msg) => {
        console.log(msg)
    }

    const basic = {
        planName: "basic",
        price: 0.99,
        color: "green",
        benefitsList: selectedBenefits([0]),
        onPackageSelect: onPackageSelect
    }

    const standart = {
        planName: "standart",
        price: 2.99,
        color: "blue",
        benefitsList: selectedBenefits([0,1,2]),
        onPackageSelect: onPackageSelect
    }

    const premium = {
        planName: "premium",
        price: 5.99,
        color: "purple",
        benefitsList: selectedBenefits([0,1,2,3]),
        onPackageSelect: onPackageSelect
    }

    return (
        <div className="App">
            <PackageCard planName={basic.planName} price={basic.price} color={basic.color}
                         onPackageSelect={onPackageSelect} benefitsList={basic.benefitsList} />

            <PackageCard planName={standart.planName} price={standart.price} color={standart.color}
                         onPackageSelect={onPackageSelect} benefitsList={standart.benefitsList} />

            <PackageCard planName={premium.planName} price={premium.price} color={premium.color}
                             onPackageSelect={onPackageSelect} benefitsList={premium.benefitsList} />
        </div>
    );
}

export default App
