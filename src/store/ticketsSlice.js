import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getCookie from '../components/utiles/cookie';

export const fetchSearchId = createAsyncThunk('tickets/fetchSearchId', async (_, { rejectWithValue }) => {
  try {
    const res = await fetch('https://aviasales-test-api.kata.academy/search');
    if (!res.ok) {
      throw new Error(`${res.status}`);
    }
    return await res.json();
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async (_, { rejectWithValue }) => {
  try {
    const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${getCookie('searchId')}`);
    if (!res.ok) {
      throw new Error(`${res.status}`);
    }
    return await res.json();
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    valueFilterTransfer: [],
    showAllTickets: true,
    numShowTicket: 5,
    loading: false,
    error: false,
    searchId: false,
    stopFetch: false,
    fetchStatus500: 0,
  },
  reducers: {
    showMoreTicket(state) {
      state.numShowTicket += 5;
    },
  },
  extraReducers: {
    [fetchSearchId.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchTickets.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },

    [fetchSearchId.fulfilled]: (state, action) => {
      document.cookie = `searchId = ${action.payload.searchId}`;
      state.searchId = true;
    },
    [fetchTickets.fulfilled]: (state, action) => {
      state.tickets = [...state.tickets, ...action.payload.tickets];
      state.stopFetch = action.payload.stop;
      state.loading = !action.payload.stop;
    },

    [fetchSearchId.rejected]: (state) => {
      state.error = true;
    },

    [fetchTickets.rejected]: (state, action) => {
      if (action.payload === '500') {
        state.fetchStatus500 += 1;
      } else {
        state.loading = false;
        state.error = true;
      }
    },
  },
});

export const { showMoreTicket } = ticketsSlice.actions;

export default ticketsSlice.reducer;
