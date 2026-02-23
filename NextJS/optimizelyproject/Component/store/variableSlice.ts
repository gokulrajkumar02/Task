import { createSlice } from "@reduxjs/toolkit";
import generateId from "@/Helper/generateId";
import fileNameGenerator from "@/Helper/fileNameGenerator";
import { log } from "console";

type Variable = {
  data: any;
  id: number;
  name: string;
  description: string;
  defaultvalue: string | number | boolean;
  type: "String" | "Integer" | "Boolean";
};

type Variation = {
  name: string;
  id: number;
  description: string;
  variables: Variable[]; 
};
 type Login = {
  username: string;
  password: string;
  role: "user" | "admin";
};

type VariableState = {
  loginData : Login[];
  variable: Variable[];
  editingVariable: Variable | null;
  variation: Variation[];
};

const initialState: VariableState = {
  loginData : [],
  variable: [],
  editingVariable: null,
  variation: [],
};

const variableSlice = createSlice({
  name: "variable",
  initialState,
  reducers: {
    setVariable: (state, action) => {
      const index = state.variable.findIndex((v) => v.id === action.payload.id);

      if (index !== -1) {
        state.variable[index] = action.payload;
      } else {
        state.variable.push(action.payload);
        state.variation.forEach((variation) => {
          variation.variables.push({
            ...action.payload,
            data: action.payload.defaultvalue ?? "",
          });
        });
        // state.variation.map((variation) => {
        //    console.log("Variation:", variation);
        //  })
      }
    },

    deleteVariable: (state, action) => {
      state.variable = state.variable.filter((v) => v.id !== action.payload);
    },

    duplicate: (state, action) => {
      const item = state.variable.find((v) => v.id === action.payload);
      if (!item) return;

      state.variable.push({
        ...item,
        id: generateId(),
        name: fileNameGenerator() + item.name,
      });
    },

    setEditingVariableId: (state, action) => {
      const item = state.variable.find((v) => v.id === action.payload);
      state.editingVariable = item ? { ...item } : null;
    },
    setEditingVariableData: (state, action) => {
      state.editingVariable = action.payload;
    },
    clearEditingVariable: (state) => {
      state.editingVariable = null;
    },
    setVariation: (state, action) => {
      const index = state.variation.findIndex(
        (v) => v.id === action.payload.id,
      );
      if (index !== -1) {
        state.variation[index] = action.payload;
        console.log("Already present");
      } else {
        state.variation.push(action.payload);
        console.log("New Variation added:", action.payload);
      }
    },
    deleteVariation: (state, action) => {
      state.variation = state.variation.filter((v) => v.id !== action.payload);
    },
    setLoginData: (state, action) => {
      state.loginData = action.payload;
      console.log("Login Data Updated:", state.loginData);
    },
  },
});

export const {
  setVariable,
  deleteVariable,
  duplicate,
  setEditingVariableId,
  setEditingVariableData,
  clearEditingVariable,
  setVariation,
  deleteVariation,
  setLoginData,
} = variableSlice.actions;

export default variableSlice.reducer;
