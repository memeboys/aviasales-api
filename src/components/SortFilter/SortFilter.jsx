import { useDispatch, useSelector } from 'react-redux';
import { onSortChange } from '../../store/filterSlice';
import classes from './SortFilter.module.scss';

const SortFilter = () => {
  const value = useSelector((state) => state.filters.sort)
  const dispatch = useDispatch();
  return (
    <div className={classes.filter}>
      <button 
        className={value.value === 'CHEAPEST' ? classes.selected : ''} 
        onClick={() => dispatch(onSortChange('CHEAPEST'))}>
          САМЫЙ ДЕШЕВЫЙ
      </button>
      <button 
        className={value.value === 'FASTEST' ? classes.selected : ''} 
        onClick={() => dispatch(onSortChange('FASTEST'))}>
          САМЫЙ БЫСТРЫЙ
      </button>
      <button 
        className={value.value === 'OPTIMAL' ? classes.selected : ''} 
        onClick={() => dispatch(onSortChange('OPTIMAL'))}>
          ОПТИМАЛЬНЫЙ
      </button>
    </div>
  )
}

export default SortFilter;