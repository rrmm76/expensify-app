import React from "react";
import { connect } from "react-redux";
import ExpenseListItems from "./ExpenseListItems";
import  SelectExpenses  from "../selectrors/expenses";


const ExpenseList =(props) => (
<div>
    <h1>Expnse List </h1>
    {props.expenses.map((expense)=>{
       return <ExpenseListItems key={expense.id} {...expense}/>
    })}
</div>

);




const mapStateToProps=(state) => {
    return {
        expenses :SelectExpenses(state.expenses,state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList) ;

