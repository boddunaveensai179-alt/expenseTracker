// src/components/ExpenseSummary.jsx

function ExpenseSummary({ expenses }) {

  const totalExpense = expenses.reduce(
    (sum, exp) => sum + Number(exp.amount),
    0
  );

  const totalTransactions = expenses.length;

  const income = 10000; // static income (you can make dynamic later)

  const balance = income - totalExpense;

  return (
    <div className="summary-cards">

      <div className="card-box income">
        <h4>Income</h4>
        <p>₹ {income}</p>
      </div>

      <div className="card-box expense">
        <h4>Expenses</h4>
        <p>₹ {totalExpense}</p>
      </div>

      <div className="card-box balance">
        <h4>Balance</h4>
        <p>₹ {balance}</p>
      </div>

      <div className="card-box transactions">
        <h4>Transactions</h4>
        <p>{totalTransactions}</p>
      </div>

    </div>
  );
}

export default ExpenseSummary;