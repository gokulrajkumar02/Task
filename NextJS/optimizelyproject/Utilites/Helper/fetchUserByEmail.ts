const fetchUserByEmail = async (searchEmail: string) => {
  if (!searchEmail) return "";

  const response = await fetch("/api/get-userby-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: searchEmail }),
  });
           
  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  return response.json();
};

export default fetchUserByEmail