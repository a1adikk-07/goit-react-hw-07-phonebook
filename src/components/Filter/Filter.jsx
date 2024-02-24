import { setFilter } from '../../redux/filter/filter-slice';
import { useSelector, useDispatch } from 'react-redux';
import style from '../Filter/filter.module.css';

const Filter = () => {
  const value = useSelector(state => state.setFilter);
  const dispatch = useDispatch();

  return (
    <div className={style.filter}>
      <label htmlFor="filterID">Find contact by name</label>
      <input
        className={style.input}
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
        value={value}
        name="filter"
        placeholder="Search"
        type="text"
      />
    </div>
  );
};

export default Filter;
