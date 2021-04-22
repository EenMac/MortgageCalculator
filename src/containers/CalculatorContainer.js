import React, { useState, useEffect} from "react"
import Income from "../components/Income"
import OutputBL from "../components/OutputBL"


const MortgageCalculator = (() => {
  const [income, setIncome] = useState("")

console.log(income);
  const calculateLoan = function(income){
      return income * 3;
  }




    return(
        <div>
            <h1>Mortagage calc</h1>
                <Income />
            <OutputBL />
        </div>
    )
})

export default MortgageCalculator;