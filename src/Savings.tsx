import './Savings.scss';
import { useState } from 'react';
import GoalList from './GoalList';
import {IT_} from './interface2';

const Savings = () => {
  const [name, setName] = useState<string>('');
  const [amount, setAmount] = useState<string>('0');
  const [balance, setBalance] = useState<string>('0');
  const [reach, setReach] = useState<string>('0');
  const [number, setNumber] = useState<number>(0);
  const [goals, setGoals] = useState<IT_[]>([]);

  const setGoal = () => {
    let amount_ = (document.getElementById('amountInput')! as HTMLInputElement).value;
    let goalName = (document.getElementById('nameInput')! as HTMLInputElement).value;
    let reach_ = (document.getElementById('reachInput')! as HTMLInputElement).value;
    let balance_ = (document.getElementById('currentBalanceInput')! as HTMLInputElement).value;
    setName(goalName);
    setAmount(amount_);
    setReach(reach_);
    setBalance(balance_);
    setNumber((Math.abs(parseInt(balance) - parseInt(amount)))/(parseInt(reach)/7));
    let newIT = {name: name, balance: parseInt(balance), amount: parseInt(amount), reach: number};
    setGoals([...goals, newIT]);
    document.getElementById('reach')!.style.visibility="visible";
  }

  return (
    <div className="savings">
    <h2 style={{position:"relative", top: "50px", left: "20px"}}>Goals</h2>
     <div className="goals">
      {
       goals.map((IT: IT_, key: number)=>{
        return <GoalList IT={IT} key={key} />
       })
      }
     </div>
     <button className="addButton" onClick={() => {document.getElementById("myModal")!.style.display="block"}}>Add Goal</button>
    <div id="myModal" className="modal"> 
    <div className="modal-content">
    <span onClick={() => {document.getElementById("myModal")!.style.display="none"}} className="close">&times;</span>
    <h4 id="reach" style={{position: "absolute", visibility: 'hidden'}}>You must make ${number} a month to achieve the goal</h4>
    <h3 style={{fontWeight: "600"}}>Goal Name</h3>
    <input id="nameInput" style={{width: "30%", height: "25px", outline: "none", fontSize: "15px"}}/>
    <h3 style={{fontWeight: "600"}}>Amount</h3>
    <label style={{fontSize: "20px", position: "relative", top: "0px", right: "5px"}}>$</label><input id="amountInput" type="number" min="1" style={{width: "30%", height: "25px", outline: "none", fontSize: "15px"}}/>
    <h3 style={{fontWeight: "600"}}>Current Balance</h3>
    <label style={{fontSize: "20px", position: "relative", top: "0px", right: "5px"}}>$</label><input id="currentBalanceInput" style={{width: "30%", height: "25px", outline: "none", fontSize: "15px"}}/>
    <h3 style={{fontWeight: "600"}}>Desired Time To Reach (in days)</h3>
    <input id="reachInput" type="number" min="1" style={{width: "30%", height: "25px", outline: "none", fontSize: "15px"}}/>
    <br/><br/>
    <hr/>
    <br/>
    <button onClick={setGoal} className="button">Set Goal</button>
    </div>
    </div>


    </div>
  )
}

export default Savings
