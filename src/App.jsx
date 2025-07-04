import {DateTime} from "./components/DateTime/DateTime.jsx"
import './App.css'
import {Cart} from "./components/Cart/Cart.jsx"

export default function App() {
    let arr = [1,2,3];

    return (
        <>
            <Cart items={arr}/>
        </>
    );
}
