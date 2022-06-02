import classes from './../TicketsCard/TicketsCard.module.scss';
const FlyTo = () => {
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <span className={classes.title}>MOW – HKT</span>
        <span className={classes.text}>10:45 – 08:00</span>
      </div>
      <div className={classes.info}>
        <span className={classes.title}>В пути</span>
        <span className={classes.text}>21ч 15м</span>
      </div>
      <div className={classes.info}>
        <span className={classes.title}>2 пересадки</span>
        <span className={classes.text}>HKG, JNB</span>
      </div>
    </div>
  )
}

export default FlyTo;