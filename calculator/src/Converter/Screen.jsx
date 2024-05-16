import { useState } from "react";
import converter from "./converter.json";
import styles from "./Converter.module.scss";
import TypeScreen from "./TypeScreen";


async function getData(type, from, to, value) {
    const url = `https://unit-measurement-conversion.p.rapidapi.com/convert?type=${type}&fromUnit=${from}&toUnit=${to}&fromValue=${value}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f49b870ee9mshebe58e8a53398b4p1e83a4jsnbe8aa1ebb504',
            'X-RapidAPI-Host': 'unit-measurement-conversion.p.rapidapi.com'
        }
    };
   /* const response = await fetch(url, options);
    const result = response.text();

    return result*/
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

function Screen({value}) {
    // const response = getData('weight', 'pound', 'kilogram', 200);
    
    const [unit, setUnit] = useState(converter[0].unit);
   

    return (
        <div>
            <div className={styles.typePanel}>
                {converter.map((item) => {
                    const iType = item.unit;
                    return <button onClick={() => (setUnit(iType))}>{item.type }</button>
                })}
            </div>
            <div>
                <TypeScreen type={unit} value={value} convert ={getData} />
            </div>
            
        </div>
    )
}

export default Screen;