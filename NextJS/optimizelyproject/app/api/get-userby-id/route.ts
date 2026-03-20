export async function GET(req: Request) {

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const response = await fetch(`${process.env.JSON_SERVER_URL}/users/${id}`);
    
    if (!response.ok) {
      throw new Error("Can't find the user");
    }
    
    const user = await response.json();
    return Response.json({
      message: "User fetched successfully",
      userDetails: user,
    });
  } 

  catch (error) {
    return Response.json({
      message: "Failed to get the user",
    });
  }
}
