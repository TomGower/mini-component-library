import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--fontSize': '0.85rem',
    iconSize: 10.67
  },
  large: {
    '--fontSize': '1rem',
    iconSize: 16
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const STYLES = SIZES[size];

  return (
    <Wrapper width={width + 'px'}>
      <IconWrapper size={STYLES.iconSize}>
        <Icon id={icon} size={STYLES.iconSize} />
      </IconWrapper>
      <Text type="text" style={STYLES} placeholder={placeholder} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: ${p => p.width};
  /* height: 275px; */
  border-bottom: 2px solid;
`;

const IconWrapper = styled.div`
  display: inline;
  height: ${p => p.size + 'px'};
  width: ${p => p.size + 'px'};
`;


const Text = styled.input`
  display: inline;
  color: deeppink;
  font-size: var(--fontSize);
  width: min-content;
  border: none;
  color: ${COLORS.gray700};
  font-weight: 700;
  
  &:hover {
    color: ${COLORS.black};
  }

  ::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

// Wrapper div sizing isn't working the way I want to to
// not sure how to style placeholder text and then do something different for content SOLVED THIS
// maybe that's a TextInput and the Icon goes to the left of it THIS IS RIGHT, EXCEPT IT'S AN INPUT
// need Icon and TextInput to go on the same line, thought this was just display: inline on both components BUT HOW DO I STYLE ICON WHEN THAT'S GIVEN?

/*
This component also uses the Icon component — the specific ID will be provided as a prop.

This component requires bold text. You can achieve this look by using font-weight: 700.
*/

export default IconInput;
