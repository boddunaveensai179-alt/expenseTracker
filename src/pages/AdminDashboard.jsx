import ExpenseList from "../components/ExpenseList";
import ExpenseSummary from "../components/ExpenseSummary";
import { useNavigate } from "react-router-dom";

function AdminDashboard({
  expenses,
  users,
  deleteExpense,
  setCurrentUser
}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Admin Panel</h2>

        <button onClick={() => navigate("/admin")}>
          Dashboard
        </button>

        <button onClick={handleLogout}>Logout</button>
      </div>

      <div className="main">
        <h2>Admin Dashboard</h2>

        <ExpenseSummary expenses={expenses} />

        {users.map((user) => {
          const userExpenses = expenses.filter(
            (exp) => Number(exp.userId) === Number(user.id)
          );

          return (
            <div key={user.id} className="card">
              <h3>{user.username}</h3>

              <ExpenseList
                expenses={userExpenses}
                deleteExpense={deleteExpense}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AdminDashboard;