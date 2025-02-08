import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SliceNamespace } from "../../constants/slice-namespace";
import {
  TBurgerIngredientsState,
  TMapIngredients,
} from "../../types/services-types";
import { TIngredient } from "../../types/types";
import { getIngredients } from "../thunks";

const initialState: TBurgerIngredientsState = {
  ingredients: [],
  mapIngredients: new Map(),
  isRequest: false,
  isSuccess: false,
};

const BurgerIngredientsSlice = createSlice({
  name: SliceNamespace.BurgerIngredients,
  initialState,
  reducers: {
    addMapIngredients: {
      reducer: (state, { payload }: PayloadAction<TMapIngredients>) => {
        state.mapIngredients = payload.mapIngredients;
      },
      prepare: (ingredients: TIngredient[]) => {
        const map = new Map();
        ingredients.forEach(({ _id, ...otherProp }) => map.set(_id, otherProp));

        return { payload: { mapIngredients: map } };
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getIngredients.pending, (state) => {
        state.isRequest = true;
        state.isSuccess = false;
      })
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.ingredients = action.payload.data;
        state.isRequest = false;
        state.isSuccess = true;
      })
      .addCase(getIngredients.rejected, (state) => {
        state.isRequest = false;
        state.isSuccess = false;
      });
  },
});

export const { addMapIngredients } = BurgerIngredientsSlice.actions;

export default BurgerIngredientsSlice.reducer;
