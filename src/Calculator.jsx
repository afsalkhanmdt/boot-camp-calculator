function Calculator(){

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
             value: "/",
             className: "red"
         },
    ]

    return(
        <div className="container">
            <section className="monitor">
                <div className="input-data">
                25*25
                </div>
                <div className="result">
                625
                </div>
            </section>
            <section className="input-button">
                {inputs.map(
                    ({value,className})=>
                    <button className={className} key={value}>{value}</button>
                )}
            </section>
        </div>
    )
}

export default Calculator