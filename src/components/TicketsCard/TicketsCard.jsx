import classes from './TicketsCard.module.scss';
import S7Logo from './S7Logo.svg';
import FlyTo from '../FlyTo/FlyTo';
import FlyBack from '../FlyBack/FlyBack';
const TicketsCard = () => {
  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <div className={classes.price}>13 400 P</div>
        <div className={classes.logo}>
          <img src={S7Logo} alt="logo aviacompanies" className={classes.img} />
        </div>
      </div>
      <div className={classes.body}>
        <FlyTo />
        <FlyBack />
      </div>
    </div>
  )
}

export default TicketsCard;