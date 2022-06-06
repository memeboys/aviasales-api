import { createSlice } from "@reduxjs/toolkit";

// export const fetchTickets = createAsyncThunk(
//   'filters/fetchTickets',
//   async function()
// );

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    filter: [
        { id: "without", text: "Без пересадок", isChecked: false },
        { id: "1", text: "1 пересадка", isChecked: false },
        { id: "2", text: "2 пересадки", isChecked: false },
        { id: "3", text: "3 пересадки", isChecked: false },
    ],
    sort: {
      value: null,
    },
  },
  reducers: {
    toggleAll(filters) {
      const isAllChecked = filters.filter.every((filter) => filter.isChecked);
      filters.filter.forEach((filter) => {
        filter.isChecked = !isAllChecked;
      });
    },
    toggleSingle(state, action) {
      const filter = state.filter.find((filter) => filter.id === action.payload.id);
      filter.isChecked = !filter.isChecked;
    },
    onSortChange(state, action) {
      state.sort.value = action.payload;
    },
  },
});

export const { toggleAll, toggleSingle, onSortChange } = filterSlice.actions;

export default filterSlice.reducer;
