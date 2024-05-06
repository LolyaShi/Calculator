

function Numbers(props) {
    const numb = Array.from(Array(10).keys()).map(
        (num) =>
        {
           return  <button key={num}>{num }</button>
        }
    )

    const expressions = Array.from("/*-+%=");

    function click(e) {
        if (e.target.innerHTML !== "=" && e.target.innerHTML !== "C") {
            if (props.data == "0") {
                props.onClick(e.target.innerHTML)
            }
            else {
                props.onClick(props.data + e.target.innerHTML)
            }
              
        }
            else if (e.target.innerHTML === "C") {
                props.onClick("0")
                props.res("")
            }
            else if (expressions.includes(e.target.innerHTML)) {
                props.res(eval(props.data))
            }
        
        console.log(expressions.includes(e.target.innerHTML))
    }

    const expr = Array.from("C%/789*456-123+0.=").map((ex) => {
        return <button key={ex} onClick={(e) => {click(e)
        } }>{ex}</button>
    })

    return (
        <div>
            {/*numb.reverse()*/}
            {expr}
        </div>
    )

}

export default Numbers