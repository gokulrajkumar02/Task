"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { MoreHorizontal } from "lucide-react";
import generateId from "@/Helper/generateId";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { FieldLabel } from "@/components/ui/field";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

type FormData = {
  id: number;
  name: string;
  age: number;
  gender: string;
  email: string;
  dateOfBirth: string;
};

const ShadcnTable = () => {
  const [usersData, setUsersData] = useState<FormData[]>([
    {
      id: generateId(),
      name: "Jane Doe",
      age: 30,
      gender: "female",
      email: "jane@test.com",
      dateOfBirth: "2000-01-01",
    },
    {
      id: generateId(),
      name: "Alice Smith",
      age: 28,
      gender: "female",
      email: "alice@test.com",
      dateOfBirth: "2001-01-01",
    },
    {
      id: generateId(),
      name: "Bob Johnson",
      age: 35,
      gender: "male",
      email: "bob@test.com",
      dateOfBirth: "2002-01-01",
    },
    {
      id: generateId(),
      name: "Charlie Brown",
      age: 22,
      gender: "male",
      email: "charlie@test.com",
      dateOfBirth: "2003-01-01",
    },
  ]);

  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState<FormData[]>([]);
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isDirty },
  } = useForm<FormData>({
    defaultValues: {
      gender: "male",
    },
  });

  useEffect(() => {
    const filterData = usersData.filter((items) =>
      items.name.toLowerCase().includes(search.toLowerCase()),
    );
    setFilteredData(filterData);
  }, [search, usersData]);

  const onSubmit = (data: FormData) => {
    const existingUserIndex = usersData.findIndex(
      (user) => user.id === data.id,
    );

    const randomId = generateId();

    if (existingUserIndex !== -1) {
      const updatedUsers = [...usersData];
      updatedUsers[existingUserIndex] = data;
      setUsersData(updatedUsers);
      toast.success("User updated successfully ✅");
    } 
    
    else {
      setUsersData([...usersData, { ...data, id: randomId }]);
      toast.success("User added successfully ✅");
    }

    reset();
    setOpen(false);
  };

  const handleDelete = (id: number) => {
    const updatedUsers = usersData.filter((items) => items.id !== id);
    setUsersData(updatedUsers);
    toast.error("User deleted ❌");
  };
  const handleEdit = (index: number) => {
    const user = usersData[index];
    reset(user);
    setOpen(true);
  };

  return (
    <div className="w-full flex justify-center min-h-60 mb-15">
      <div className="w-[50%] p-2 text-lg">
        <h1 className="text-lg">Table Preview</h1>
        <div className="flex justify-between mt-5">
          <Input
            className="w-[50%]"
            placeholder="Filter Users"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                className="p-5 hover:cursor-pointer"
                onClick={() => {
                  reset({
                    name: "",
                    age: undefined,
                    gender: "male",
                    email: "",
                  });
                }}
              >
                Add User
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader className="p-2">
                <DialogTitle>User Details</DialogTitle>
              </DialogHeader>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-4 mb-4 max-h-60 overflow-y-scroll scrollbar-hide p-2">
                  <div className="space-y-4">
                    <Label>Name</Label>
                    <Input
                      placeholder="Enter name"
                      {...register("name", {
                        required: "Enter Name",
                      })}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500">*Enter the name</p>
                  )}
                  <div className="space-y-4">
                    <Label>Age</Label>
                    <Input
                      min={1}
                      max={100}
                      type="number"
                      placeholder="Enter age"
                      {...register("age", {
                        required: "Enter age.",
                      })}
                    />
                  </div>
                  {errors.age && <p className="text-red-500">*Enter the age</p>}

                  <div className="space-x-4 flex">
                    <Label>Gender</Label>
                    <div className="flex items-center space-x-2">
                      <FieldLabel
                        htmlFor="male"
                        className="hover:cursor-pointer"
                      >
                        Male
                      </FieldLabel>
                      <Input
                        type="radio"
                        id="male"
                        value="male"
                        className="h-5"
                        {...register("gender", { required: "Select gender." })}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <FieldLabel
                        htmlFor="female"
                        className="hover:cursor-pointer"
                      >
                        Female
                      </FieldLabel>
                      <Input
                        type="radio"
                        id="female"
                        value="female"
                        className="h-5"
                        {...register("gender", { required: "Select gender." })}
                      />
                    </div>
                  </div>
                    <div className="space-y-4">
                      <Label>Date of Birth</Label>
                      <Input
                        type="date"
                        placeholder="Select Date of Birth"
                        {...register("dateOfBirth", {
                          required: "Select Date of Birth.",
                        })}
                      />

                    </div>

                  <div className="space-y-4">
                    <Label>Email</Label>
                    <Input
                      type="email"
                      placeholder="Enter your Email"
                      {...register("email", {
                        required: "Enter Email",
                      })}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500">*Enter the email</p>
                  )}
                </div>
                <DialogFooter>
                  {/* <DialogClose asChild>
                    <Button variant="outline" className="hover:cursor-pointer">
                      Cancel
                    </Button>
                  </DialogClose> */}
                  <Button
                    disabled={!isDirty}
                    type="submit"
                    className={`p-4 ${isDirty ? "hover:cursor-pointer" : "disabled:pointer-events-auto hover:cursor-not-allowed"}`}
                  >
                    Save
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Table className="mt-3 text-[15px] w-full border">
          <TableHeader className="bg-gray-200 mt-5">
            <TableRow>
              <TableHead>
                <Checkbox className="border border-black" />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Date Of Birth</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.length >0 ? filteredData.map((items, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    <Checkbox className="border border-black" />
                  </TableCell>
                  <TableCell>{items.name}</TableCell>
                  <TableCell>{items.age}</TableCell>
                  <TableCell>{items.gender}</TableCell>
                  <TableCell>{items.email}</TableCell>
                  <TableCell>{items.dateOfBirth}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="hover:cursor-pointer w-8 h-8"
                        >
                          <MoreHorizontal />
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleEdit(index)}>
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-red-500"
                          onClick={() => handleDelete(items.id)}
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            }) : <TableRow><TableCell colSpan={7} className="text-center text-black">No users found.</TableCell></TableRow>}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ShadcnTable;
