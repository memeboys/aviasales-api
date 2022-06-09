import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTickets = createAsyncThunk(
  "tickets/fetchTickets",
  async (_, { getState }) => {
    let { searchId } = getState().tickets;
    if (!searchId) {
      const response = await fetch(
        `https://aviasales-test-api.kata.academy/search`
      );
      if (!response.ok) {
        throw new Error("Server Error!");
      }
      const data = await response.json();
      searchId = data.searchId;
    }
    const response = await fetch(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
    );
    if (!response.ok) {
      throw new Error("Server Error!");
    }
    const { tickets, stop } = await response.json();
    return { tickets, isDone: stop, searchId };
  }
);

const ticketsSlice = createSlice({
  name: "tickets",
  initialState: {
    tickets: [],
    searchId: null,
    isLoading: true,
    isDone: false,
  },
  extraReducers: {
    // Fetch tickets
    [fetchTickets.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchTickets.fulfilled]: (state, action) => {
      if (!action.payload) return;
      state.isLoading = false;
      state.searchId = action.payload.searchId;
      state.isDone = action.payload.isDone;
      state.tickets.push(...action.payload.tickets);
    },
  },
});

export default ticketsSlice.reducer;
