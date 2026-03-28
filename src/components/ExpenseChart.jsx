import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function ExpenseChart({ expenses }) {
  const data = [];

  expenses.forEach((exp) => {
    const found = data.find((item) => item.name === exp.category);

    if (found) {
      found.value += Number(exp.amount);
    } else {
      data.push({
        name: exp.category,
        value: Number(exp.amount)
      });
    }
  });

  const COLORS = ["#4facfe", "#ff6b6b", "#43e97b", "#845ef7"];

  return (
    <PieChart width={400} height={300}>
      <Pie data={data} dataKey="value" nameKey="name" outerRadius={100}>
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>

      <Tooltip />
      <Legend />
    </PieChart>
  );
}

export default ExpenseChart;