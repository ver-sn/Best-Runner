import React from 'react';
import PropTypes from 'prop-types';
import { SelectStyle, SelectField, SelectLabel } from './styled';

const Select = ({
  options, value, onChange, label,
}) => (
  <SelectField>
    {label && <SelectLabel>{label}</SelectLabel>}
    <SelectStyle value={value} onChange={onChange}>
      {options.map(item => (
        <option key={item.value} value={item.value}>{item.label}</option>
      ))}
    </SelectStyle>
  </SelectField>
);

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
  label: '',
};
export default Select;
