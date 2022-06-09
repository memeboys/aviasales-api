import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: [
    { stopCount: 0, text: "Без пересадок", isChecked: false },
    { stopCount: 1, text: "1 пересадка", isChecked: false },
    { stopCount: 2, text: "2 пересадки", isChecked: false },
    { stopCount: 3, text: "3 пересадки", isChecked: false },
  ],
  reducers: {
    toggleAll(filters) {
      const isAllChecked = filters.every((filter) => filter.isChecked);
      filters.forEach((filter) => {
        filter.isChecked = !isAllChecked;
      });
    },
    toggleSingle(state, action) {
      const filter = state.find(
        (filter) => filter.stopCount === action.payload.stopCount
      );
      filter.isChecked = !filter.isChecked;
    },
  },
});

export const { toggleAll, toggleSingle } = filterSlice.actions;

export default filterSlice.reducer;
