import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Comment } from 'react-loader-spinner';

export const FeedbackField = styled.input`
  position: relative;
  display: block;
  width: 557px;
  height: ${({ message }) => (message ? '189px' : '93px')};
  margin-bottom: ${({ message }) => (message ? '25px' : '10px')};
  padding: 30px 46px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  z-index: 1;

  font-size: 18px;
  line-height: 1.8;
  color: #2d2d2d;
`;

export const FeedbackMessage = styled(FeedbackField).attrs({
  as: 'textarea',
})``;

export const ButtonSubmit = styled.button`
  display: block;
  width: 225px;
  height: 73px;
  padding: 27px 51px;
  background: #fad34f;
  border-radius: 500px;
  border: 1px solid #fad34f;

  cursor: pointer;
  font-size: 18px;
  line-height: 1;
  color: #ffffff;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #ffffff;
    color: #fad34f;
  }
`;

export const ErrorMessage = styled.span`
  display: inline-block;
  margin-bottom: ${({ message }) => (message ? '16px' : '8px')};
  color: red;
`;

export const Loader = () => {
  return (
    <Comment
      visible={true}
      height="73"
      width="218"
      ariaLabel="comment-loading"
      wrapperStyle={{}}
      wrapperClass="comment-wrapper"
      color="#fff"
      backgroundColor="#F4442E"
    />
  );
};

FeedbackField.propTypes = {
  message: PropTypes.bool,
};

ErrorMessage.propTypes = {
  message: PropTypes.bool,
};
