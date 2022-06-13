import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

async function findTickets(id) {
  let { data } = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`);
  return data;
}

export const getTickets = createAsyncThunk('tickets/getTickets', async function getTicketsAll() {
  let { data: searchID } = await axios.get('https://aviasales-test-api.kata.academy/search');
  let data = await findTickets(searchID.searchId);
  try {
    while (!data.stop) {
      let newData = await findTickets(searchID.searchId);
      data.tickets.push(...newData.tickets);
      data.stop = newData.stop;
    }
  } catch (e) {
    return data.tickets;
  }
  return data.tickets;
});

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    loading: false,
    countTickets: 5,
  },
  reducers: {
    addFiveTickets(state) {
      state.countTickets += 100;
    },
  },
  extraReducers: {
    [getTickets.pending]: (state) => {
      state.loading = true;
    },
    [getTickets.fulfilled]: (state, action) => {
      state.loading = false;
      state.tickets.push(...action.payload);
    },
    [getTickets.rejected]: (state) => {
        state.loading = true;
      }
    },
  },
);

export const { addFiveTickets } = ticketsSlice.actions;

export default ticketsSlice.reducer;