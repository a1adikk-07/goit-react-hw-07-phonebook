import { setFilter } from '../../redux/filter/filter-slice';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/filter/filter-selector';
import style from '../Filter/filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = ({ target }) => dispatch(setFilter(target.value));

  return (
    <div className={style.filter}>
      <input
        className={style.input}
        onChange={changeFilter}
        value={filter}
        name="filter"
        placeholder="Search"
      />
    </div>
  );
};

export default Filter;
