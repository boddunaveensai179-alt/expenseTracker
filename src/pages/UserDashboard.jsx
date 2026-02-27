import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import { useNavigate } from "react-router-dom";

function UserDashboard({ expenses, currentUser, addExpense, deleteExpense }) {
  if (!currentUser) return <h2>Please login</h2>;

  const userExpenses = expenses.filter((exp) => exp.userId === currentUser.id);
  const navigate = useNavigate();

  const total = userExpenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Expense Tracker</h2>
        <p>{currentUser.username}</p>
        <button>Dashboard</button>
        <button onClick={() => navigate("/transactions")}>Transactions</button>
      </div>

      <div className="main">
        <h2>Dashboard</h2>

        <div className="summary-cards">
          <div className="card-box income">
            <h3>Total Income</h3>
            <p>Rs {total + 2000}</p>
          </div>

          <div className="card-box expense">
            <h3>Total Expenses</h3>
            <p>Rs {total}</p>
          </div>

          <div className="card-box balance">
            <h3>Balance</h3>
            <p>Rs {2000}</p>
          </div>

          <div className="card-box transactions">
            <h3>Transactions</h3>
            <p>{userExpenses.length}</p>
          </div>
        </div>

        <div className="card">
          <ExpenseForm addExpense={addExpense} currentUser={currentUser} />
        </div>

        <div className="card">
          <ExpenseList expenses={userExpenses} deleteExpense={deleteExpense} />
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
