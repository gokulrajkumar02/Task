const deleteUser = async (id: number) => {
  const response = await fetch("/api/delete-user", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  if (!response.ok) {
    throw new Error("Delete user failed");
  }
  return response.json();
};

export default deleteUser