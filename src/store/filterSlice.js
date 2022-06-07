import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTickets = createAsyncThunk(
  'filters/fetchTickets',
  async function() {
    try {
      const response = await fetch(`https://aviasales-test-api.kata.academy/search`);
      if (!response.ok) {
        throw new Error('Server Error!');
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      
    }
  }
);

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
    searchId: null,
    tickets: [],
    stop: false,
    isLoading: false,
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
  extraReducers: {
    [fetchTickets.pending] : (state) => {
      state.isLoading = true;
    },
    [fetchTickets.fulfilled] : (state, action) => {
      state.isLoading = false;
      state.stop = true;
      state.searchId = action.payload;
    },
    [fetchTickets.rejected] : (state, action) => {},
  },
});

export const { toggleAll, toggleSingle, onSortChange } = filterSlice.actions;

export default filterSlice.reducer;
