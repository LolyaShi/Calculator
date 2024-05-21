import styles from "./Converter.module.scss";

function Keyboard({onClick, value, setArrow}) {
    const expr = Array.from("789456123-0.").map((ex) => {
        return <button onClick={click} key={ex} >{ex}</button>
    })

    function click(e) {
    
        if (!isNaN(e.target.innerHTML)) {
            if (value === "0") {
                onClick(e.target.innerHTML)
            }   
            else {
                onClick(value + e.target.innerHTML )
            }
            
        }
        else if(e.target.innerHTML === ".") {
            //onClick(value + e.target.innerHTML )
            checkExpression(e.target.innerHTML, value)
        }
        else if (e.target.innerHTML === "-") {
            onClick(value*(-1))
        }
    }

    function checkExpression(el, value) {
        const lastNum = value[value.length - 1];
        
        if (isNaN(lastNum)) {
            onClick(value);
            console.log(isNaN(lastNum))
        }
        else {
            onClick(value + el)
            
        }
    }

   

    return (
        <div className={styles.keyboard}>
            <div className={styles.numbers}>
                {expr}
            </div>
            <div className={styles.symbols} >
                <button onClick={() => onClick(value.slice(0, value.length - 1))}>
                    <img src="./delete.svg" alt="delete" />
                </button>
                <button className={styles.clean} onClick={()=>(onClick('0'))}>C</button>
                <button onClick={() => (setArrow(true))}>
                    <img src="./up.svg" alt="up" />
                </button>
                <button onClick={() => (setArrow(false))}>
                    <img src="./down.svg" alt="down" />
                </button>
            </div>
        </div>
    )

    
}

export default Keyboard