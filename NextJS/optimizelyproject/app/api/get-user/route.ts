
export async function GET(){
    try{

        const response = await fetch(`${process.env.JSON_SERVER_URL}/users`)
        const users = await response.json()
        
        return Response.json({
            message:"users Fetched",
            userDetails :users
        })
    }
    catch(error){
        return Response.json({
            message:"Failed to fetch users",
            error: (error as Error).message
        },
        {status:500}
    )
    }   

}