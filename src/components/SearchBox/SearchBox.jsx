import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filters/slice';
import s from './SearchBox.module.css';

function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <input
      type="text"
      value={filter}
      onChange={e => dispatch(changeFilter(e.target.value))}
      placeholder="Search contacts"
      className={s.input}
    />
  );
}

export default SearchBox;