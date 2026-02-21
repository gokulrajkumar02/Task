import { useMutation, useQuery } from "@tanstack/react-query";
import { createUser, getUsers, updateUser } from "../../api/mutateApi";

const UserOperations = () => {
  const {data, isLoading } = useQuery({
    queryKey: ["Users"],
    queryFn: getUsers,
  });
  
const createUserMutation = useMutation({
  mutationFn: createUser,
});

const updateUserMutation = useMutation({
  mutationFn: updateUser,
});

  return (
    <div>
      <br />
      {isLoading && <p>Loading</p>}
      <button onClick={() => createUserMutation.mutate({ id: 1506, name: "iuhgve", age: 56 })}>
        Post Users
      </button>
      <br /> <br />
      <button onClick={() => updateUserMutation.mutate({ id: 1506, name: "iuhgve", age: 90})}>
        Put Users
      </button>
      
    </div>
  );
};

export default UserOperations;
