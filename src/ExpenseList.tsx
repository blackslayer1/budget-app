import './ExpenseList.scss';
import {IT} from './interface';

export const ExpenseList = ({title, value}: IT) => {
  return (
    <div>
        <ul className="expenseIncomeList">
            <li>- {title}</li>
            <li>${value}</li>
        </ul>
    </div>
  )
}
