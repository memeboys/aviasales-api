import { useDispatch, useSelector } from "react-redux";
import { toggleAll, toggleSingle } from "../../store/filterSlice";
import classes from "./TransferFilter.module.scss";

const TransferFilter = () => {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  return (
    <div className={classes.filter}>
      <h2 className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      <ul className={classes.list}>
        <li className={classes.item}>
          <input
            type="checkbox"
            className={classes.checkbox}
            checked={!filters.filter.some((filter) => !filter.isChecked)}
            onChange={() => dispatch(toggleAll())}
            id="all"
          />
          <label htmlFor="all">
            <span>Все</span>
          </label>
        </li>
        {filters.filter.map((filter, index) => (
          <li className={classes.item} key={index}>
            <input
              type="checkbox"
              className={classes.checkbox}
              id={filter.id}
              checked={filter.isChecked}
              onChange={() => dispatch(toggleSingle({ id: filter.id }))}
            />
            <label htmlFor={filter.id}>
              <span>{filter.text}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransferFilter;
