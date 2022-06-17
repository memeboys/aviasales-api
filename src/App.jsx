import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './App.module.scss';
import './App.module.scss';
import Header from './components/Header/Header';
import MoreTickets from './components/MoreTickets/MoreTickets';
import SortFilter from './components/SortFilter/SortFilter';
import TicketsList from './components/TicketsList/TicketsList';
import TransferFilter from './components/TransferFilter/TransferFilter';
import { fetchTickets, fetchSearchId } from './store/ticketsSlice';
import deleteCookie from './components/utiles/deleteCookie';

const App = () => {
  const tickets = useSelector((state) => state.tickets.tickets);
  const fetchStatus500 = useSelector((state) => state.tickets.fetchStatus500);
  const stopFetch = useSelector((state) => state.tickets.stopFetch);
  const searchId = useSelector((state) => state.tickets.searchId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearchId());
    return deleteCookie('searchId');
  }, [dispatch]);

  useEffect(() => {
    if (!stopFetch && searchId) dispatch(fetchTickets());
  }, [dispatch, tickets, fetchStatus500, stopFetch, searchId]);

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
