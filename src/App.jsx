import { useEffect } from "react";
import { useDispatch } from "react-redux";
import classes from "./App.module.scss";
import './App.module.scss';
import Header from "./components/Header/Header";
import MoreTickets from "./components/MoreTickets/MoreTickets";
import SortFilter from "./components/SortFilter/SortFilter";
import TicketsList from "./components/TicketsList/TicketsList";
import TransferFilter from "./components/TransferFilter/TransferFilter";
import { getTickets } from "./store/ticketsSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTickets());
  });
  return (
    <div className={classes.container}>
      <Header />
      <main className={classes.content}>
        <div className={classes.left}>
          <TransferFilter />
        </div>
        <div className={classes.right}>
          <SortFilter />
          <TicketsList />
          <MoreTickets />
        </div>
      </main>
    </div>
  );
};

export default App;
