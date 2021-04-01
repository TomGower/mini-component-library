import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--fontSize': '0.85rem',
    '--paddingLeft': '12px',
    iconSize: 10.67
  },
  large: {
    '--fontSize': '1rem',
    '--paddingLeft': '20px',
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
      <VisuallyHidden label={label} />
      <Text
        type="text"
        style={STYLES}
        placeholder={placeholder}
        aria-labelledby={label}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: ${p => p.width};
  border-bottom: 2px solid;
`;

const IconWrapper = styled.div`
  display: inline-block;
  height: ${p => p.size + 'px'};
  width: ${p => p.size + 'px'};
`;


const Text = styled.input`
  display: inline-block;
  color: deeppink;
  font-size: var(--fontSize);
  width: min-content;
  border: none;
  color: ${COLORS.gray700};
  font-weight: 700;
  padding-left: var(--paddingLeft);
  
  &:hover {
    color: ${COLORS.black};
  }

  ::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;

/*
Known potential issues:
1. Accessibility. I think I have some basics right, but am not sure what's actually good.
2. Spacing. Based on Figma, it seems to be right distance between the icon and the Search placeholder, but it just doesn't look right.
3. Vertical alignment of placeholder text. I think it's supposed to be more centered than it is. But I can't tell for sure.
*/
