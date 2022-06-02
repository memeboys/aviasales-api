import classes from './TransferFilter.module.scss';

const TransferFilter = () => {
  return (
          <div className={classes.filter}>
            <h2 className={classes.title}>
              КОЛИЧЕСТВО ПЕРЕСАДОК
            </h2>
            <ul className={classes.list}>
              <li className={classes.item}>
                <input type="checkbox" className={classes.checkbox} id="all"/>
                <label htmlFor="all">
                  <span>
                    Все
                  </span>
                </label>
              </li>
              <li className={classes.item}>
                <input type="checkbox" className={classes.checkbox} id="without"/>
                <label htmlFor="without">
                  <span>
                    Без пересадок
                  </span>
                </label>
              </li>
              <li className={classes.item}>
                <input type="checkbox" className={classes.checkbox} id="one_transfer"/>
                <label htmlFor="one_transfer">
                  <span>
                    1 пересадка
                  </span>
                </label>
              </li>
              <li className={classes.item}>
                <input type="checkbox" className={classes.checkbox} id="two_transfer"/>
                <label htmlFor="two_transfer">
                  <span>
                  2 пересадки
                  </span>
                </label>
              </li>
              <li className={classes.item}>
                <input type="checkbox" className={classes.checkbox} id="three_transfer"/>
                <label htmlFor="three_transfer">
                  <span>
                  3 пересадки
                  </span>
                </label>
              </li>
            </ul>
          </div>
  )
}

export default TransferFilter;