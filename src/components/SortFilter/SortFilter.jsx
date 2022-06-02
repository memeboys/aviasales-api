import classes from './SortFilter.module.scss';
const SortFilter = () => {
  return (
    <div className={classes.filter}>
      <button className={classes.active}>САМЫЙ ДЕШЕВЫЙ</button>
      <button className={classes.button}>САМЫЙ БЫСТРЫЙ</button>
      <button className={classes.button}>ОПТИМАЛЬНЫЙ</button>
    </div>
  )
}

export default SortFilter;