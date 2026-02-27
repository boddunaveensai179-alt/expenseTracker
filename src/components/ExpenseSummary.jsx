function ExpenseSummary({ expenses }) {
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div>
      <h3>Total Expense: Rs {total}</h3>
    </div>
  );
}

export default ExpenseSummary;
