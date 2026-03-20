const fetchUsers = async () => {

  try{
    const response = await fetch("/api/get-user");
    
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    
    return response.json();
  }
  catch(error){
    console.log("Fetching user failed");
    
  }
};

export default fetchUsers