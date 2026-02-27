// src/App.jsx

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
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

       
        const userData = await fetchUsers();
        setUsers(userData);

        
        if (expenses.length === 0) {
          const apiExpenses = await fetchExpensesFromAPI();
          setExpenses(apiExpenses);
        }

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
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
  if (error) return <h2>Error: {error}</h2>;


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
            />
          }
        />

        {/* ADMIN DASHBOARD */}
        <Route
          path="/admin"
          element={
            <AdminDashboard
              expenses={expenses}
              users={users}
              deleteExpense={deleteExpense}
              currentUser={currentUser}
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

      </Routes>
    </BrowserRouter>
  );
}

export default App;