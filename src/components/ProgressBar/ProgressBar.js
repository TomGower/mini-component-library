/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large: {
    '--padding': '4px',
    '--height': '16px'
  },
  medium: {
    '--height': '12px'
  },
  small: {
    '--height': '8px'
  }
}

const ProgressBar = ({ value, size }) => {
  const BAR_WIDTH = value / 100 * 370 + 'px';
  const STYLES = SIZES[size];

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={STYLES}
    >
      <Bar width={BAR_WIDTH} style={STYLES}/>
      {value}
    </Wrapper>
  );
};

const Wrapper = styled.strong`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  color: green; /* demonstration purposes */
  width: 370px;
  height: var(--height);
  padding: var(--padding);
`;

const Bar = styled.div`
  width: ${p => p.width};
  background-color: ${COLORS.primary};
  height: var(--height);
`;

export default ProgressBar;
