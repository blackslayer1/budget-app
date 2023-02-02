import './App.scss';
import { useState, useEffect } from 'react';
import { ExpenseList } from './ExpenseList';
import {IT} from './interface';
import { IncomeList } from './IncomeList';

function Budget() {
  const [expense, setExpense] = useState<string>('');
  const [expenseAmount, setExpenseAmount] = useState<string>('0');
  const [budget, setBudget] = useState<string>('0');
  const [income, setIncome] = useState<string>('0');
  const [balance, setBalance] = useState<string>('0');
  const [expenseList, setExpenseList] = useState<IT[]>([]);
  const [incomeList, setIncomeList] = useState<number[]>([]);

  useEffect(()=>{
    let div1 = document.getElementById('incomeContainer')!;
    let div2 = document.getElementById('expenseContainer')!;
    if(budget === '0'){
      div1.style.opacity="60%";
      div1.style.pointerEvents="none";
      div2.style.opacity="60%";
      div2.style.pointerEvents="none";
    } else {
      div1.style.opacity="100%";
      div1.style.pointerEvents="all";
      div2.style.opacity="100%";
      div2.style.pointerEvents="all";
    }
  }, [budget]);

  const addBudget = () => {
  let budget = (document.getElementById('budgetInput')! as HTMLInputElement).value;
  if(budget === ''){
    alert("Budget cannot be blank")
  } else {
    setBudget(budget);
    setBalance(budget);
    setExpenseAmount('0');
    setIncome('0');
  }
  }

  const addExpenseAmount = () => {
    let expense_ = (document.getElementById('expenseAmountInput')! as HTMLInputElement).value;
    let expenseTitle = (document.getElementById('expenseInput')! as HTMLInputElement).value;
    if(expenseTitle === "" || expense_ === ""){
      alert("All fields must be filled");
    } else {
      setExpense(expenseTitle);
      setExpenseAmount((parseInt(expenseAmount) + parseInt(expense_)).toString());
      setBalance((parseInt(balance) - parseInt(expense_)).toString());
      let newIT = {title: expense, value: parseInt(expense_)};
      setExpenseList([...expenseList, newIT]);
    }
  }

    const addIncome = () => {
      let income_ = (document.getElementById('incomeInput')! as HTMLInputElement).value;
      if(income_ === ""){
        alert("Income cannot be blank")
      } else {
        setIncome((parseInt(income) + parseInt(income_)).toString());
        setBalance((parseInt(balance) + parseInt(income_)).toString());
        setIncomeList([...incomeList, parseInt(income_)]);
      }
    }

  return (
<div>
      <div className="input">
        <div className="budgetContainer">
        <label>Enter Your Budget</label>
        <br/>
        <input id="budgetInput" type="number" min="0"></input>
        <br/>
        <button onClick={addBudget}>Enter</button>
        </div>
        <div id="expenseContainer" className="expenseContainer">
        <label>Enter Your Expense</label>
        <br/>
        <input style={{marginBottom: "10px"}} id="expenseInput"></input>
        <br/>
        <label>Enter Expense Amount</label>
        <br/>
        <input type="number" min="0" id="expenseAmountInput"></input>
        <br/>
        <button onClick={addExpenseAmount}>Add Expense</button>
        </div>
        <div id="incomeContainer" className="incomeContainer">
        <label>Enter Income Amount</label>
        <br/>
        <input type="number" min="0" id="incomeInput"></input>
        <br/>
        <button onClick={addIncome}>Add Income</button>
        </div>
      </div>
      <div className="balance">
      <ul className="label">
        <li>BUDGET</li>
        <li>EXPENSES</li>
        <li>INCOME</li>
        <li>BALANCE</li>
      </ul>
      <ul className="icons">
      <li><h2></h2></li>
      <li></li>
      <li></li>
      <li></li>
      </ul>
      <ul className="prices" style={{position: "relative", bottom: "50px", right: "10px"}}>
      <li style={{color: "#417E39"}}>${budget}</li>
      <li style={{color: "#9E1B13", position: "relative", right: "5px"}}>${expenseAmount}</li>
      <li style={{color: "#0A6489"}}>${income}</li>
      <li style={{color: "#417E39"}}>${balance}</li>
      </ul>
      <div className="list">
        <ul className="label_">
          <li>Expense Title</li>
          <li>Expense Value</li>
          <li>Income Value</li>
        </ul>
        <div style={{overflow: "scroll", height: '200px'}}>
        {expenseList.map((obj)=>{
            return <ExpenseList title={obj.title} value={obj.value} />
        })}
        {
          incomeList.map((amount)=>{
            return <IncomeList amount={amount} />
          })
        }
        </div>
      </div>
      </div>
    </div>
  );
}

export default Budget;