import {ImagesContainer} from "./ImagesContainer/ImagesContainer.jsx";
import {Details} from "./Details/Details.jsx";
import {Attraction} from "./Attraction/Attraction.jsx";
import "./Content.css";
export function Content(){
    return (
        <div className="content">
            <Details />
            <ImagesContainer />

        </div>
    );
}