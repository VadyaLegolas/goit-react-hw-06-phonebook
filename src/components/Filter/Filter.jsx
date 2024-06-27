import { useDispatch, useSelector } from 'react-redux';
import { Input, Label } from './Filter.styled';
import { filterContacts } from '../../redux/filter/filterActions';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter.value);
  const changeFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <Label>
      Find contact by name:
      <Input type="text" value={value} onChange={changeFilter} />
    </Label>
  );
};
