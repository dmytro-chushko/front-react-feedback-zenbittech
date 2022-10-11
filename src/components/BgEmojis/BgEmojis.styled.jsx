import styled from 'styled-components';
import PropTypes from 'prop-types';

export const EmojiContainer = styled.div`
  position: absolute;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}%`};
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  transform: ${({ rotate }) => (rotate ? `rotate(${rotate}deg)` : `none`)};
`;

export const Icon = styled.svg`
  display: block;
`;

EmojiContainer.propTypes = {
  top: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  rotate: PropTypes.string,
};
