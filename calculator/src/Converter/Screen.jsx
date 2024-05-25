import { useEffect, useRef, useState } from "react";
import converter from "./converter.json";
import styles from "./Converter.module.scss";
import TypeScreen from "./TypeScreen";

async function fetchData(from, to, value) {
    const url = "https://api.exoapi.dev/unit-converter";
    const options =    {
    method: "POST",
    headers: {
        Authorization: "Bearer 64ff3b696d5e40b29ced812a51068126-c605fb2e2a516d42fbb19978bcbaed58",
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ from: from, to: to, value: value }),
    }
    
/*
  .then((response) => response.json())
    .then((result) => console.log(result))     
        .catch((error) => console.error(error));*/
    
    const response = await fetch(url, options);
    const result = await response.json();

    return result.result
    
}


/*
async function getData(type, from, to, value) {
    const url = `https://unit-measurement-conversion.p.rapidapi.com/convert?type=${type}&fromUnit=${from}&toUnit=${to}&fromValue=${value}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f49b870ee9mshebe58e8a53398b4p1e83a4jsnbe8aa1ebb504',
            'X-RapidAPI-Host': 'unit-measurement-conversion.p.rapidapi.com'
        }
    };
    const response = await fetch(url, options);
    const result = await response.json();

    return result.value
    
   try {
        const response = await fetch(url, options);
        const result = await response.json();
        //console.log(result);
        return result.value
   }
   catch (error) {
        console.error(error);
    }
    
}*/



function Screen({value, arrow, theme}) {
    // const response = getData('weight', 'pound', 'kilogram', 200);
    
    const [unit, setUnit] = useState(converter[0].unit);
    const [label, setLabel] = useState(converter[0].label);
    const [from, setFrom] = useState(converter[0].unit[0]);
    const [to, setTo] = useState(converter[0].unit[0]);

    const panel = useRef();

    let color = (theme === "light" ? "#fff" : "#ff416a");
    
    

    return (
        <div>
            <div ref={panel} className={styles.typePanel}>
                {converter.map((item) => {
                    return <button key={item.type} onClick={(e) => {
                        setUnit(item.unit);
                        setLabel(item.label);
                        setFrom(item.unit[0]);
                        setTo(item.unit[0]);

                        panel.current.style.background = "none"
                        let btns = panel.current.children;
                        console.log(btns)
                        for (let el of btns) {
                            el.style.background = "none"
                        
                        }
                        e.target.style.background = color;
                        
                    }}>{item.type}</button>
                })}
            </div>
            <div>
                <TypeScreen  type={unit} label={label} value={value} convert ={fetchData} from={from} setFrom={setFrom} to={to} setTo={setTo} arrow={arrow} />
            </div>
            
        </div>
    )
}

export default Screen;