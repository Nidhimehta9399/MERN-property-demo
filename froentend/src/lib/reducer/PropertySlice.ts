// store/yourSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PropertyType {
  _id: number;
  name: string;
  price: string;
  location: string;
}

type PropertySliceProps = {
  propertyList: PropertyType[];
  property: PropertyType | {};
};

const initialState: PropertySliceProps = {
  propertyList: [],
  property: {},
};

const propertySlice = createSlice({
  name: "propertySlice",
  initialState,
  reducers: {
    getProperty: (state, action: PayloadAction<PropertyType[]>) => {
      state.propertyList = action.payload;
    },
    addProperty: (state, action: PayloadAction<PropertyType>) => {
      state.propertyList.push(action.payload);
    },
    deleteProperty: (state, action: PayloadAction<PropertyType>) => {
      state.propertyList = state.propertyList.filter(
        (property) => property._id !== action.payload._id
      );
    },
    getPropertyById: (state, action: PayloadAction<PropertyType | {}>) => {
      state.property = action.payload;
    },
    editProperty: (state, action: PayloadAction<PropertyType>) => {
      const index = state.propertyList.findIndex(
        (property) => property._id === action.payload._id
      );
      if (index !== -1) {
        state.propertyList[index] = action.payload;
      }
    },
  },
});

export const {
  getProperty,
  addProperty,
  deleteProperty,
  getPropertyById,
  editProperty,
} = propertySlice.actions;
export default propertySlice.reducer;
