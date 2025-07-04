import {useState, useEffect} from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin: 1%;
    border-radius: 7px;
    padding: 14px;
    background-color: ${props => props.color};
    color: white;
    width: fit-content;
`

const StyledH2 = styled.h2`
    font-size: ${props => props.fontSize + "px"};
`

const StyledParagraph = styled.p`
        
`

function getFullDate(date){
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} 
   ${date.getHours().toString().padStart(2,"0")}:${date.getMinutes().toString().padStart(2,"0")}:${date.getSeconds().toString().padStart(2,"0")}`;
}

export function DateTime({color, fontSize}) {
    let date = new Date();
    const [dateTime, setDateTime] = useState(date);



    useEffect(()=>{
        let interval = setInterval(()=>{setDateTime(new Date());}, 1000)
        return () => {
            clearInterval(interval)
        }
    }, []);
    if( dateTime.getHours() < 6 ){
        return (
            (<StyledDiv color={color ?? "blue"} fontSize={fontSize}>
                <StyledParagraph>Opps.. We are closed at night</StyledParagraph>
            </StyledDiv>)
        )
    }
    return (<StyledDiv color={dateTime.getHours() <= 18 ? "blue" : "black"} fontSize={fontSize}>
        <StyledH2 fontSize={fontSize}>{getFullDate(dateTime)}</StyledH2>
        {dateTime.getHours() >= 6 &&
            <StyledParagraph>Good
                {(dateTime.getHours() < 12) ? " morning " : dateTime.getHours() < 18 ? " afternoon " : " evening "}
                 world!
            </StyledParagraph>}
    </StyledDiv>);
}