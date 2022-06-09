import { useDispatch, useSelector } from "react-redux";
import { sortChange, SortType } from "../../store/sortSlice";
import classes from "./SortFilter.module.scss";

const SortFilter = () => {
  const sortType = useSelector((state) => state.sort);
  const dispatch = useDispatch();
  return (
    <div className={classes.filter}>
      <button
        className={sortType === SortType.CHEAPEST ? classes.selected : ""}
        onClick={() => dispatch(sortChange(SortType.CHEAPEST))}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        className={sortType === SortType.FASTEST ? classes.selected : ""}
        onClick={() => dispatch(sortChange(SortType.FASTEST))}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        className={sortType === SortType.OPTIMAL ? classes.selected : ""}
        onClick={() => dispatch(sortChange(SortType.OPTIMAL))}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  );
};

export default SortFilter;
