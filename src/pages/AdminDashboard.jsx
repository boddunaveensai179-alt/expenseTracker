import ExpenseSummary from "../components/ExpenseSummary";

function AdminDashboard({ expenses, users, deleteExpense, currentUser }) {
  if (!currentUser) return <h2>Please login</h2>;

  const groupedExpenses = users.map((user) => ({
    username: user.username,
    expenses: expenses.filter((exp) => exp.userId === user.id)
  }));

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>

      <div className="card">
        <ExpenseSummary expenses={expenses} />
      </div>

      {groupedExpenses.map((group) => (
        <div className="card" key={group.username}>
          <h3>User: {group.username}</h3>

          {group.expenses.length === 0 ? (
            <p>No expenses</p>
          ) : (
            group.expenses.map((exp) => (
              <div key={exp.id} style={{ marginBottom: "10px" }}>
                {exp.title} - Rs {exp.amount}
                <button className="btn-danger" onClick={() => deleteExpense(exp.id)}>
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
