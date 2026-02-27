
export const fetchExpensesFromAPI = async () => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products?limit=5"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch expenses from API");
    }

    const data = await response.json();

    const expenses = data.map((item) => ({
      id: item.id,
      title: item.title,
      amount: Math.floor(item.price * 10),
      category: item.category,
      date: new Date().toISOString().split("T")[0],
      userId: 2   
    }));

    return expenses;

  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Error fetching expenses");
  }
};


export const loadLocalExpenses = () => {
  try {
    const stored = localStorage.getItem("expenses");
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("LocalStorage Load Error:", error);
    return [];
  }
};


export const saveLocalExpenses = (expenses) => {
  try {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  } catch (error) {
    console.error("LocalStorage Save Error:", error);
  }
};



export const clearAllExpenses = () => {
  localStorage.removeItem("expenses");
};