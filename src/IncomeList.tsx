import './IncomeList.scss'

interface Prop {
    amount: number
}

export const IncomeList = ({ amount }: Prop) => {
  return (
    <div className="incomeList">
      <li>+ ${amount}</li>
    </div>
  )
}
