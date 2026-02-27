function ExpenseList({ expenses, deleteExpense }) {
  return (
    <ul>
      {expenses.map((exp) => (
        <li key={exp.id}>
          {exp.title} - Rs {exp.amount}
          <button onClick={() => deleteExpense(exp.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
