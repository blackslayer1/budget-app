import './GoalList.scss';
import {IT_} from './interface2';

interface Props{
  IT: IT_
}

const GoalList = ({IT}: Props) => {

  return (
    <ul className="goalList">
        <li>{IT.name}</li>
        <li>${IT.balance} of ${IT.amount}</li>
        <li>${IT.reach}/w</li>
    </ul>
  )
}

export default GoalList
