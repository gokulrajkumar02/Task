import getUserByEmail from "@/Helper/getUserByEmail"

export type User ={
    id:number;
    username:string,
    email:string,
    password:string
}

const checkPassword = (savePassword : string,formPassword : string) =>{
    return savePassword === formPassword
}

export async function POST(req : Request) { 
    try{
        const formData = await req.json()
        const response = await fetch(`${process.env.JSON_SERVER_URL}/users`)
        const users = await response.json()
        const User = getUserByEmail(users,formData.email)
        
        if(!User) {
            return Response.json({
                message:"User not Found",
                authenticated:false
            });
        }
        
        const passwordMatch = checkPassword(User.password,formData.password)

        if(!passwordMatch){
            return Response.json({
                message:"Password incorrect",
                authenticated : false
            })
        }
        return Response.json({
            message: "User found!",
            userDetails:User,
            authenticated:true
        })
    
    }
    catch (error) {
        return Response.json({
            error :"Failed to fetch users",
            authenticated:false
        })
    }
}