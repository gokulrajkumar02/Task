export const fetchUser = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  if (!response.ok) throw new Error("Failed");

  return await response.json();
};