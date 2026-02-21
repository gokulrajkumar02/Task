import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
// import axios from "axios";

const fetchUsers = async () => {
  try {
    const response = await fetch(
      "https://api.freeprojectapi.com/api/CollegeProject/GetAllUsers",
    );
    const usersData = await response.json();
    return usersData.data
  } catch (err) {
    console.log(err);
  }
};

export const Contact = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if(isLoading) return <p>Loading...</p>
  if(error) return <p>{error.message}</p>
  console.log(data);

  return <div>{}</div>;
};
