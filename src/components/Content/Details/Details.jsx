import "./Details.css"
import {Attraction} from "../Attraction/Attraction.jsx";

export function Details() {
    return (
        <div className="details">
            <h2>City: Odesa</h2>
            <p>Country: Ukraine</p>
            <p>Population: 1,000,000</p>
            <p>Odesa also spelled Odessa is the third most populous city and municipality in Ukraine and a major seaport
                and transport hub located in the south-west of the country, on the northwestern shore of the Black Sea.
                The city is also the administrative centre of the Odesa Raion and Odesa Oblast, as well as a multiethnic
                cultural centre. As of January 2021, Odesa's population was approximately 1,010,537. On 25 January
                2023, its historic city centre was declared a World Heritage Site and added to the List of
                World Heritage in Danger by the UNESCO World Heritage Committee in recognition of its multiculturality
                and 19th-century urban planning</p>

            <Attraction name={"Derybasivska Street"} imageId={"derybasivska"} description={"Vulytsia Derybasivska (Ukrainian: Дерибасівська) or " +
                "De Ribas Street is a pedestrian walkway (street) in the heart of Odesa, Ukraine. The street is named " +
                "after José de Ribas, who was the builder of Odesa, the head of military and civil administration and " +
                "had a house on this street."} />

            <Attraction name={"Odesa Opera and Ballet Theatre"} imageId={"theatre"} description="The Odesa National
            Academic Opera and Ballet Theatre (Ukrainian: Одеський національний академічний театр опери та балету) is
            the oldest theatre in Odesa, Ukraine. The Theatre and the Potemkin Stairs are the most famous edifices
            in Odesa."/>

             <Attraction name={"Arcadia Beach"} imageId={"arcadia"} description="Arcadia Beach (Ukrainian:
             Пляж Аркадія, romanized: Pliazh Arkadiia) is Odesa, Ukraine's most famous beach. It is located in
             the Arcadia quarter."/>

             <Attraction name={"Potemkin Stairs"} imageId={"potemkin"} description="The Potemkin Stairs, Potemkin Steps
              (Ukrainian: Потьо́мкінські схо́ди, romanized: Potiomkinski skhody, Russian: Потёмкинская лестница), or,
              officially, Primorsky Stairs are a giant stairway in Odesa, Ukraine.[3] They are considered a formal
              entrance into the city from the direction of the sea and are the best known symbol of Odesa."/>

        </div>
    )
}