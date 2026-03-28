function ExpenseTable({ expenses }) {
  const total = expenses.reduce(
    (sum, exp) => sum + Number(exp.amount),
    0
  );

  return (
    <table border="1" width="100%" cellPadding="10">
      <thead>
        <tr>
          <th>Total Transactions</th>
          <th>Total Expense</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>{expenses.length}</td>
          <td>₹ {total}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ExpenseTable;