import { useState } from "react"

function Calculator(){
    
    const [input,setInput] = useState(0);
    const [output,setOutput] = useState(0);
    const [lastOperator,setLastOperator] = useState(false)

    const inputs = [
        {
           value: 7
        },
        {
            value: 8
        },
        {
            value: 9
        },
        {
            value: "/",
            className: "red"
        },
        {
            value: 4
         },
         {
             value: 5
         },
         {
             value: 6
         },
         {
             value: "*",
             className: "red"
         },
         {
            value: 1
         },
         {
             value: 2
         },
         {
             value: 3
         },
         {
             value: "-",
             className: "red"
         },
         {
            value: "."
         },
         {
             value: 0
         },
         {
             value: "=",
             className: "green"
         },
         {
             value: "+",
             className: "red"
         },
    ]

    function onInput(value,type){
        if(type === "equal"){
            try{
                let result = eval(input);
                setOutput(result);
                setInput(0)
                return
            }catch(error){
                alert("Invalid Input");
                return
            }
        }
        if(input === 0 && type === "operant") {setInput(value); return}
        if(lastOperator && type === "operator") return;
        setLastOperator(type === "operator")
        setInput(input+""+value);
    }

    function keyType(name){
        switch (name){
            case "red":
                return "operator";
            case "green":
                return "equal";
            default:
                return "operant";
        }
    }
    

    return(
        <div className="container">
            <section className="monitor">
                <div className="input-data">
                {input}
                </div>
                <div className="result">
                {output.toFixed(6)}
                </div>
            </section>
            <section className="input-button">
                {inputs.map(
                    ({value,className})=>
                    <button
                        className={className}
                        key={value}
                        onClick={()=>onInput(
                            value,
                            keyType(className)
                            )}
                    >{value}</button>
                )}
            </section>
        </div>
    )
}

export default Calculator