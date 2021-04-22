import React, { useState } from "react";


const Income = (() => {

const[income,setIncome] = useState("")

const handleIncomeChange =event => {
    setIncome(event.target.value);
}
const handleIncomeSubmit = (event)=> {
    const incomeToSubmit = income.trim();

}

    return(
        <div>
            <label for= "income">Your annual Income</label>
            <input type="text" id = "income" name = "income" onChange = {handleIncomeChange}></input>
        </div>
    )

})
export default Income;