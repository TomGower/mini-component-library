/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large: {
    '--padding': '4px',
    '--height': '24px',
    '--barHeight': '16px'
  },
  medium: {
    '--height': '12px',
    '--barHeight': '12px',
    '--padding': 0
  },
  small: {
    '--height': '8px',
    '--barHeight': '8px',
    '--padding': 0
  }
}

const ProgressBar = ({ value, size }) => {
  const BAR_WIDTH = value + '%';
  const STYLES = SIZES[size];

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={STYLES}
    >
      <Bar width={BAR_WIDTH} style={STYLES} rounded={value === 100} />
      <VisuallyHidden>{value}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  width: 370px;
  height: var(--height);
  margin: -var(--padding);
  padding: var(--padding);
  border-radius: 4px;
`;

const Bar = styled.div`
  width: ${p => p.width};
  background-color: ${COLORS.primary};
  height: var(--barHeight);
  padding: var(--padding);
  border-radius: 4px 0px 0px 4px;
  border-radius: ${p => p.rounded ? '4px' : ''};
`;

export default ProgressBar;
