// import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../StateRedex/Store";
import { addStudent } from "../StateRedex/CounterSlice";
import "./StudentDetails.css";
import type { Student } from "../StateRedex/CounterSlice";

const ValidateNameOrEmail = (data: any): boolean | string => {
  if (data.includes("@") || (!data.includes("@") && data.length >= 6))
    return true;
  return "Enter the valid Username or Email";
};

const StudentDetails = () => {
  const studentsData = useSelector(
    (state: RootState) => state.counter.students,
  );
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty },
    reset,
  } = useForm<Student>({
    mode: "onChange",
  });

  // const password = watch("Password")
  // useEffect(() => {
  //    trigger("Password")
  // },[password])

  const onSubmit = (data: any) => {
    // reset({Password  : ""})
    // resetField("Password")
    console.log(data);
    dispatch(addStudent(data));
    reset({
      UserName: "",
      RollNumber: "",
      Date_of_birth: "",
      Skills: [],
      Department: "CSE",
      Password: "",
    });
  };

  const handleModify = (rollNumber: string) => {
    reset(studentsData[rollNumber]);
  };

  return (
    <div className="student-form-details">
      <form
        action=""
        className="student-form"
        onSubmit={handleSubmit(onSubmit)}>

        <div className="form-group">
          <label htmlFor="">Username or Email : </label>
          <Controller name="UserName" control={control} defaultValue="" 
            rules={{
              required : "UserName or email is required",
              validate : ValidateNameOrEmail
            }}
          render={({field}) => {
            return <input {...field} placeholder="UserName or Email"/>
          }}/>

          {/* <input
            type="text"
            placeholder="Username or email"
            {...register("UserName", {
              required: "UserName or email is required",
              validate: ValidateNameOrEmail,
            })}
          /> */}

          {errors.UserName?.message &&
            typeof errors.UserName.message === "string" && (
              <p className="error">*{errors.UserName.message}</p>
            )}
          <br />
        </div>

        <div className="form-group">
          <label htmlFor="">Roll No : </label>
          <input
            type="number"
            placeholder="Roll Number"
            {...register("RollNumber", {
              required: "Roll no required",
              minLength: { value: 10, message: "Minimum 10 characters" },
              maxLength: { value: 10, message: "Maximum 10 characters" },
            })}
          />

          {errors.RollNumber?.message &&
            typeof errors.RollNumber.message === "string" && (
              <p className="error">*{errors.RollNumber.message}</p>
            )}
        </div>

        <br />

        <div className="form-group">
          <label htmlFor="">Date of Birth : </label>
          <input
            type="date"
            {...register("Date_of_birth", {
              required: "Date of birth required",
            })}
          />

          {errors.Date_of_birth?.message &&
            typeof errors.Date_of_birth.message === "string" && (
              <p className="error">*{errors.Date_of_birth.message}</p>
            )}

          <br />
        </div>

        <div className="form-group">
          <label htmlFor="">
            <input type="checkbox" value={"Java"} {...register("Skills")} />{" "}
            JAVA
          </label>
          &nbsp; &nbsp;
          <label htmlFor="">
            <input type="checkbox" value={"Python"} {...register("Skills")} />{" "}
            PYTHON
          </label>
        </div>

        <br />

        <div className="form-group">
          <label htmlFor="">Department : </label>
          <select id="" {...register("Department")}>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="MECH">MECH</option>
          </select>
        </div>
        <br />

        <div className="form-group">
          <label htmlFor="">Password : </label>
          <input
            type="password"
            placeholder="Password"
            {...register("Password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters" },
              maxLength: { value: 12, message: "Maximum 12 characters" },
            })}
          />
          <br />
          {errors.Password?.message &&
            typeof errors.Password.message === "string" && (
              <p className="error">*{errors.Password.message}</p>
            )}
          <br />
        </div>
        <button type="submit" className="submit-btn" disabled={!isDirty}>
          Submit
        </button>
        {!isDirty && <p style={{ color: "red" }}>*No changes</p>}
        {isDirty && <p style={{ color: "red" }}>*You made changes</p>}
      </form>

      <div className="table-container">
        {studentsData && (
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Roll Number</th>
                <th>Date Of Birth</th>
                <th>Skills</th>
                <th>Department</th>
                <th>Password</th>
                <th>Modify</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(studentsData).map(([rollNo, student]) => (
                <tr key={rollNo}>
                  <td>{student.UserName}</td>
                  <td>{student.RollNumber}</td>
                  <td>{student.Date_of_birth}</td>
                  <td>{student.Skills.join(",")}</td>
                  <td>{student.Department}</td>
                  <td>{student.Password}</td>
                  <td>
                    {" "}
                    <button onClick={() => handleModify(rollNo)}>
                      Modify
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default StudentDetails;
