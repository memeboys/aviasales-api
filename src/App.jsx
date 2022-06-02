import Header from './components/Header/Header';
import TransferFilter from './components/TransferFilter/TransferFilter';
import SortFilter from './components/SortFilter/SortFilter';
import TicketsList from './components/TicketsList/TicketsList';
import MoreTickets from './components/MoreTickets/MoreTickets';
import classes from './App.module.scss';
const App = () => {
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
}

export default App;
