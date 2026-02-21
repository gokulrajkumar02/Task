export type User = {
  id: number;
  name: string;
  age: number;
};


export const getUsers = async () => {
  const response = await fetch("http://localhost:5000/USER");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
};

export const createUser = async (newUser: User) => {
  const response = await fetch("http://localhost:5000/USER", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  if (!response.ok) {
    throw new Error("Failed to create user");
  }

  return response.json();
};

export const updateUser = async (newUser: User) => {
  const response = await fetch(`http://localhost:5000/USER/${newUser.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  if (!response.ok) {
    throw new Error("Failed to update user");
  }

  return response.json();
};
