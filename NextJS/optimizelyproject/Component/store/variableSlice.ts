import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import generateId from "@/Helper/generateId";
import fileNameGenerator from "@/Helper/fileNameGenerator";
import { copy } from "@testing-library/user-event/dist/cjs/clipboard/copy.js";
import generateVariationId from "@/Helper/generateVariationId";

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
  id: string;
  description: string;
  variables: Variable[];
};
type Login = {
  username: string;
  password: string;
  role: "user" | "admin";
};

type VariableState = {
  loginData: Login[];
  variable: Variable[];
  editingVariable: Variable | null;
  variation: Variation[];
  RuleData: RuleData[];
  editingRuleData: RuleData | null;
};
type RuleData = {
  name: string;
  key: string;
  audience: string;
  distribution_mode: string;
  variationSelectBaseline: string;
  variationSelectBaselineInput: number;
  variationSelectOther: string;
  variationSelectOtherInput: number;
};

const initialState: VariableState = {
  loginData: [],
  variable: [],
  editingVariable: null,
  variation: [],
  RuleData: [],
  editingRuleData: null,
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

      const idGeneration = generateId()
      const variationName = fileNameGenerator() + item.name
      state.variable.push({
        ...item,
        id: idGeneration,
        name: variationName,
      });
      state.variation.forEach((variation) => {
        variation.variables.push({
          ...item,
          id:idGeneration,
          name:variationName,
          data: action.payload.defaultvalue ?? "",

        });
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
      } else {
        state.variation.push(action.payload);
      }
    },
    deleteVariation: (state, action) => {
      state.variation = state.variation.filter((v) => v.id !== action.payload);
    },
    copyVariation: (state, action) => {
      const item = state.variation.find((v) => v.id === action.payload);
      if (!item) return;
      const fileName = fileNameGenerator() + item.name;
      state.variation.push({
        ...item,
        name: fileName,
        id: generateVariationId(fileName),
      });
    },

    setLoginData: (state, action) => {
      state.loginData = action.payload;
      console.log("Login Data Updated:", state.loginData);
    },
    addingRuleData: (state, action: PayloadAction<RuleData>) => {
      const index = state.RuleData.findIndex(
        (rule) => rule.key === action.payload.key,
      );

      if (index !== -1) {
        state.RuleData[index] = action.payload;
      } else {
        state.RuleData.push(action.payload);
      }
    },
    setEditingRuleSet: (state, action: PayloadAction<string>) => {
      const item = state.RuleData.find((v) => v.key === action.payload);
      state.editingRuleData = item ? { ...item } : null;
    },
    clearEditingRuleData: (state) => {
      state.editingRuleData = null;
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
  addingRuleData,
  clearEditingRuleData,
  setEditingRuleSet,
  copyVariation,
} = variableSlice.actions;

export default variableSlice.reducer;
