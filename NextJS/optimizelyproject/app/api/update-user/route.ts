export async function PATCH(req:Request){

    try {
        const {id,...updatedField} = await req.json()
        const response = await fetch(`${process.env.JSON_SERVER_URL}/users/${id}`,{
            method:"PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedField),
        });

        if(!response.ok) {
            throw new Error("Failed to update user")
        }
        
        const user = await response.json()
        return Response.json({
            message :"Updation Successfull",
            updationSuccess:true,
            updatedUser : user
        })
    }

    catch(error){
        return Response.json({
            message:"Server error : Updation failed",
            updationSuccess:false
        }) 
    }
}