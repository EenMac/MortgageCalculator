import React from "react";
import Income from "./Income"
import MortgageCalculator from "../containers/CalculatorContainer"; 

const OutputBL = (({income}) => {

    const calculateLoan = function({income}){
        console.log(income * 3);
    }

    const handleChange = function(event){
        const output = income[event.target.value];
        calculateLoan(output)
    }

    return(
        <div>
            <h2>Mortgage Borrowing limit</h2>
            <Income onChange = {handleChange} />
            {/* <button>Calculate</button>  */}
        </div>
        
    )
})

export default OutputBL;
