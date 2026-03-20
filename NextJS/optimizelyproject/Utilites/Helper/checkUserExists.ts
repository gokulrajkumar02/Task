export default async function checkUserExists(email: string) {

  try {
    const response = await fetch(
      `${process.env.JSON_SERVER_URL}/users?email=${email}`,
    );

    if(!response.ok){
      throw new Error("Failed to fetch users")
    }
    const users = await response.json();
    return users.length > 0;
  }  
  
  catch (error) {
    console.log("Error on checking user", error);
    return false;
  }

}
