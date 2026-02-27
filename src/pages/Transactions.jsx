function Transactions({ expenses, currentUser }) {
  if (!currentUser) return <h2>Please login</h2>;

  const userExpenses = expenses.filter((exp) => exp.userId === currentUser.id);

  return (
    <div className="main">
      <h2>Transactions</h2>

      {userExpenses.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        userExpenses.map((exp) => (
          <div key={exp.id} className="card">
            {exp.title} - Rs {exp.amount} - {exp.category}
          </div>
        ))
      )}
    </div>
  );
}

export default Transactions;
