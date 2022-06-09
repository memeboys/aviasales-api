import { useDispatch } from "react-redux";
import { fetchTickets } from "../../store/ticketsSlice";
import classes from "./MoreTickets.module.scss";

const MoreTickets = () => {
  const dispatch = useDispatch();
  return (
    <button className={classes.button} onClick={() => dispatch(fetchTickets())}>
      ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
    </button>
  );
};

export default MoreTickets;
