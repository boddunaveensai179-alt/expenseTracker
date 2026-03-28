import { useNavigate, Navigate } from "react-router-dom";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import ExpenseSummary from "../components/ExpenseSummary";
import ExpenseChart from "../components/ExpenseChart";
import ExpenseTable from "../components/ExpenseTable";
import AlertMessage from "../components/AlertMessage";

function UserDashboard({
  expenses,
  currentUser,
  addExpense,
  deleteExpense,
  setCurrentUser
}) {
  const navigate = useNavigate();

  if (!currentUser) return <Navigate to="/" />;

  const userExpenses = expenses.filter(
    (exp) => Number(exp.userId) === Number(currentUser.id)
  );

  const totalExpense = userExpenses.reduce(
    (sum, exp) => sum + Number(exp.amount),
    0
  );

  const income = 10000;

  const handleLogout = () => {
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Expense Tracker</h2>
        <p>{currentUser.username}</p>

        <button onClick={() => navigate("/user")}>Dashboard</button>

        <button onClick={() => navigate("/transactions")}>
          History
        </button>

        <button onClick={handleLogout}>Logout</button>
      </div>

      <div className="main">
        <h2>User Dashboard</h2>

        {totalExpense > income && (
          <AlertMessage message="Warning: Expenses exceeded income!" />
        )}

        <ExpenseSummary expenses={userExpenses} />

        <ExpenseTable expenses={userExpenses} />

        <ExpenseChart expenses={userExpenses} />

        <div className="card">
          <ExpenseForm
            addExpense={addExpense}
            currentUser={currentUser}
          />
        </div>

        <div className="card">
          <ExpenseList
            expenses={userExpenses}
            deleteExpense={deleteExpense}
          />
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;