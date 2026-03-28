// src/services/userService.js

export const fetchUsers = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users?_limit=3"
    );

    const data = await response.json();

    const users = data.map((user) => ({
      id: user.id,
      username: user.username.toLowerCase(),
      password: "1234",
      role: "user"
    }));

    users.push({
      id: 99,
      username: "admin",
      password: "admin123",
      role: "admin"
    });

    return users;
  } catch (error) {
    console.log(error);
    return [];
  }
};