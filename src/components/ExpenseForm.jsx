import { useState } from "react";

function ExpenseForm({ addExpense, currentUser }) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "",
    date: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!currentUser || !form.title || !form.amount) return;

    addExpense({
      id: Date.now(),
      ...form,
      amount: Number(form.amount),
      userId: currentUser.id
    });

    setForm({ title: "", amount: "", category: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" />
      <input name="amount" type="number" value={form.amount} onChange={handleChange} placeholder="Amount" />
      <input name="category" value={form.category} onChange={handleChange} placeholder="Category" />
      <input name="date" type="date" value={form.date} onChange={handleChange} />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
