import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper
      role="list"
      id={label}
      value={value}
      onChange={onChange}
    >
      {children}
    </Wrapper>
  );
};

// need to figure out how to adjust width
// assume that's why I'm given displayedValue, to use to calculate the width
// what is the label prop? APPEARS TO BE FOR ACCESSIBILITY, CAN ASSOCIATE WITH PARTICULAR PROMPT. NOT NEEDED IN OUR EXAMPLE
// accessibility, need to figure out how it works
// also not using Icon SELECT API SEEMS TO INCLUDE THIS, DO I NEED TO MANUALLY ADD IF CUSTOMIZING WIDTH? NOT SURE

/*
The Select component will need a down-arrow icon! You can use the chevron-down ID with the Icon component.

We want to use a native <select> tag in this component, so a bit of precursory HTML has been provided.

This component also includes a function, getDisplayedValue. This component uses some React APIs to work out the text that should be displayed. The value isn't currently used, but you can make use of it if needed, depending on your implementation.
*/

const Wrapper = styled.select`
  width: min-content;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};

  option {
    width: min-content;
  }

  &:hover {
    background-color: ${COLORS.transparentGray35};
    color: black;
  }
`;

export default Select;
