import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FilterBox, Label, Input } from './Filter.styled';
import { FiSearch } from 'react-icons/fi';

export default function Filter({ value, onChange }) {
  const filterInputId = nanoid();
  return (
    <FilterBox>
      <Label htmlFor={filterInputId}>
        <FiSearch color="#ff6c00" />
        Find contact by name
      </Label>
      <Input
        value={value}
        onChange={onChange}
        id={filterInputId}
        type="text"
        name="filter"
        required
      />
    </FilterBox>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
