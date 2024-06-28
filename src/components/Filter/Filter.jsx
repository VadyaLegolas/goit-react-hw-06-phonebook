import { useDispatch, useSelector } from 'react-redux';
import { Input, Label } from './Filter.styled';
import { filterContacts } from '../../redux/filter/filterSlice';


export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);
  const changeFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <Label>
      Find contact by name:
      <Input type="text" value={filterValue} onChange={changeFilter} />
    </Label>
  );
};
