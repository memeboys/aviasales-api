import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import sortReducer from "./sortSlice";
import ticketsReducer from "./ticketsSlice";

export default configureStore({
  reducer: {
    filters: filterReducer,
    sort: sortReducer,
    tickets: ticketsReducer,
  },
});
