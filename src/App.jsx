

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Transactions from "./pages/Transactions";

import { fetchUsers } from "./services/userService";
import {
  fetchExpensesFromAPI,
  loadLocalExpenses,
  saveLocalExpenses
} from "./services/expenseService";

function App() {


  const [users, setUsers] = useState([]);
  const [expenses, setExpenses] = useState(loadLocalExpenses());
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    const loadData = async () => {
      const userData = await fetchUsers();
      setUsers(userData);

     
      if (expenses.length === 0) {
        const apiExpenses = await fetchExpensesFromAPI();
        setExpenses(apiExpenses);
      }

      setLoading(false);
    };

    loadData();
  }, []);


  useEffect(() => {
    saveLocalExpenses(expenses);
  }, [expenses]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route
          path="/"
          element={
            <Login
              users={users}
              setCurrentUser={setCurrentUser}
            />
          }
        />

        {/* USER DASHBOARD */}
        <Route
          path="/user"
          element={
            <UserDashboard
              expenses={expenses}
              currentUser={currentUser}
              addExpense={addExpense}
              deleteExpense={deleteExpense}
              setCurrentUser={setCurrentUser}
            />
          }
        />

    
        <Route
          path="/transactions"
          element={
            <Transactions
              expenses={expenses}
              currentUser={currentUser}
            />
          }
        />

      
        <Route
          path="/admin"
          element={
            <AdminDashboard
              expenses={expenses}
              users={users}
              deleteExpense={deleteExpense}
              setCurrentUser={setCurrentUser}
              currentUser={currentUser}
            />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;