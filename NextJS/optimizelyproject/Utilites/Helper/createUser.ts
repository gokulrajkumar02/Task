import { User } from "@/app/api/auth-user/route";

export default async function createUser(user: User) {

  try {
    const response = await fetch(`${process.env.JSON_SERVER_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("User creation failed");
    }
    return response.json();
  } 
  
  catch (error) {
    console.log("Failed to create a new user");
  }
  
}
