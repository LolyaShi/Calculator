

function Numbers(props) {
   /* const numb = Array.from(Array(10).keys()).map(
        (num) =>
        {
           return  <button key={num}>{num }</button>
        }
    )*/

    //const expressions = Array.from("/*-+%=");

    function click(e) {
        if (!isNaN(e.target.innerHTML)) {
            
            if (props.data === "0") {
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
        
         else if (e.target.innerHTML === "=") {
            props.onClick(props.data)
            props.res(eval(props.data))
            props.takeRes(props.data)
        }
             else if (isNaN(e.target.innerHTML)) {
                checkExpression(e.target.innerHTML)
                //props.res(eval(props.data))
            }
        
       
        
    }

    function checkExpression(el) {
        const lastNum = props.data[props.data.length - 1];
        
        if (isNaN(lastNum)) {
            props.onClick(props.data);
            console.log(isNaN(lastNum))
        }
        else {
            props.onClick(props.data + el)
            props.res(eval(props.data))
        }
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