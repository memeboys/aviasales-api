import { useDispatch } from 'react-redux';
import { showMoreTicket } from '../../store/ticketsSlice';
import classes from './MoreTickets.module.scss';

const MoreTickets = () => {
  const dispatch = useDispatch();
  return (
    <button className={classes.button} onClick={() => dispatch(showMoreTicket())}>
      ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!
    </button>
  );
};

export default MoreTickets;
