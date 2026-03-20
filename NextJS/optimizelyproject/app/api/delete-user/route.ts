export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    const response = await fetch(`${process.env.JSON_SERVER_URL}/users/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete user");
    }

    return Response.json({
      message: "User deleted successfully",
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return Response.json(
      {
        message: "Failed to delete user",
        error: errorMessage,
      },
      { status: 500 },
    );
  }
}
