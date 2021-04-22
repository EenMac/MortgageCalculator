import React, { useState, useEffect} from "react"
import Income from "../components/Income"
import OutputBL from "../components/OutputBL"


const MortgageCalculator = (() => {
  const [income, setIncome] = useState("")

console.log(income);
  const calculateLoan = function(income){
      setIncome(income * 3);
  }




    return(
        <div>
            <h1>Mortagage calculator</h1>
                <Income calculateLoan = {calculateLoan}/>
            <OutputBL income = {income}/>
        </div>
    )
})

export default MortgageCalculator;