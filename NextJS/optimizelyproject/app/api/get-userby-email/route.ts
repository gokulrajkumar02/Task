import getUserByEmail from "@/Helper/getUserByEmail";

export async function POST(req: Request) {

  try {
    const { email } = await req.json();
      
    const response = await fetch(`${process.env.JSON_SERVER_URL}/users`);

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users = await response.json();

    const findByEmail = getUserByEmail(users, email);

    if (!findByEmail) {
      return Response.json({
        message: "No user found with this email",
        userDetails: null,
      });
    }
    
    return Response.json({
      message: "User fetched successfully",
      userDetails: findByEmail,
    });
  } 
  
  catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";

    return Response.json(
      {
        message: "Failed to fetch user",
        error: errorMessage,
      },
      { status: 500 },
    );
  }
}
