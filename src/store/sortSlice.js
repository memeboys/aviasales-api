import { createSlice } from "@reduxjs/toolkit";

export const SortType = {
  CHEAPEST: "CHEAPEST",
  FASTEST: "FASTEST",
  OPTIMAL: "OPTIMAL",
};

const sortSlice = createSlice({
  name: "sort",
  initialState: SortType.CHEAPEST,
  reducers: {
    sortChange: (_, action) => action.payload,
  },
});

export const { sortChange } = sortSlice.actions;

export default sortSlice.reducer;
