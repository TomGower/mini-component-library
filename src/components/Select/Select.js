import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper
      role="listbox"
      id={label}
      value={value}
      onChange={onChange}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.select`
  appearance: listbox;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};

  &:hover {
    background-color: ${COLORS.transparentGray35};
    color: black;
  }
`;

export default Select;

/*
Known potential issues:
1. The width of the select box isn't changing to just be fit-displayed-Value.
2. What am I supposed to do with displayedValue? Assume that's how I adjust width, but...
3. Accessibility. Do I need all that material to get this right? Is that just a C&P job?
4. Icon. Select automatically comes with the dropdown arrow, which is why Icon gives me. I don't understand what I'm supposed to do with it. Go with `appearance: none` to reset all styling and add it back in? Brief experimentation with that didn't let me adjust the width. If I'm just given children, I can't really do anything with them, and can't just add an Icon in, I don't think... this is confusing me...
*/
