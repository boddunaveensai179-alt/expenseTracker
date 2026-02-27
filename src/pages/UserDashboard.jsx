import { useNavigate, Navigate } from "react-router-dom";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import ExpenseSummary from "../components/ExpenseSummary";

function UserDashboard({
  expenses,
  currentUser,
  addExpense,
  deleteExpense,
  setCurrentUser
}) {

  const navigate = useNavigate();

 
  if (!currentUser) {
    return <Navigate to="/" />;
  }

 
  const userExpenses = expenses.filter(
    (exp) => exp.userId === currentUser.id
  );

  
  const handleLogout = () => {
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>Expense Tracker</h2>
        <p>{currentUser.username}</p>

        <button onClick={() => navigate("/user")}>
          Dashboard
        </button>

        <button onClick={() => navigate("/transactions")}>
          Transactions
        </button>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="main">
        <h2>User Dashboard</h2>

        <ExpenseSummary expenses={userExpenses} />

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
