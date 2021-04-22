import React, { useState, useEffect} from "react"
import Income from "../components/Income"


const MortgageCalculator = (() => {
  const [income, setIncome] = useState(0)






    return(
        <div>
            <h1>Mortagage calc</h1>
                <Income />
            
        </div>
    )
})

export default MortgageCalculator;