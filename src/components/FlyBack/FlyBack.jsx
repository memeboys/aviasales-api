import classes from './../TicketsCard/TicketsCard.module.scss';

const FlyBack = () => {
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <span className={classes.title}>MOW – HKT</span>
        <span className={classes.text}>11:20 – 00:50</span>
      </div>
      <div className={classes.info}>
        <span className={classes.title}>В пути</span>
        <span className={classes.text}>13ч 30м</span>
      </div>
      <div className={classes.info}>
        <span className={classes.title}>1 пересадка</span>
        <span className={classes.text}>HKG</span>
      </div>
    </div>
  )
}

export default FlyBack;