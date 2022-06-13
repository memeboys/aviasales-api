import { useDispatch } from "react-redux";
import { addFiveTickets } from "../../store/ticketsSlice";
import classes from "./MoreTickets.module.scss";

const MoreTickets = () => {
  const dispatch = useDispatch();
  return (
    <button className={classes.button} onClick={() => dispatch(addFiveTickets())}>
            ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!
    </button>
  );
};

export default MoreTickets;
