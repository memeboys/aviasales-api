import classes from './TicketsCard.module.scss';
import S7Logo from './S7Logo.svg';
import FlyTo from '../FlyTo/FlyTo';
import FlyBack from '../FlyBack/FlyBack';
const TicketsCard = ({ ticket }) => {
  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <div className={classes.price}>{ticket.price} Р</div>
        <div className={classes.logo}>
          <img src={S7Logo} alt="logo aviacompanies" className={classes.img} />
        </div>
      </div>
      <div className={classes.body}>
        <FlyTo info={ticket.segments[0]} />
        <FlyBack info={ticket.segments[1]} />
      </div>
    </div>
  );
};

export default TicketsCard;
