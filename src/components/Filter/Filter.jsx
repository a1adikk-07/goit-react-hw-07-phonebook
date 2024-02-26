import { setFilter } from '../../redux/filter/filter-slice';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/filter/filter-selector';
import style from '../Filter/filter.module.css';

const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div className={style.filter}>
      <label htmlFor="filterID">Find contact by name</label>
      <input
        className={style.input}
        onChange={e => dispatch(setFilter(e.value))}
        value={value}
        name="filter"
        placeholder="Search"
        type="text"
      />
    </div>
  );
};

export default Filter;
