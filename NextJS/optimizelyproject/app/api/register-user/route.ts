import checkUserExists from "@/Utilites/Helper/checkUserExists";
import createUser from "@/Utilites/Helper/createUser";

export async function POST(req: Request) {

  try {
    const user = await req.json();
    const isUserExists = await checkUserExists(user.email);

    if (isUserExists) {
      return Response.json({
        message: "User already Exists",
        registered: false,
      });
    }
    
    const newUser = await createUser(user);
    return Response.json({
      message: "Registered user Succesfully",
      Registered: true,
    });
  } 
  
  catch (error) {
    return Response.json({
      error: "Failed to Register User",
      Registered: false,
    });
  }
}
