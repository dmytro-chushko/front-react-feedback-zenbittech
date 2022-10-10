import styled from 'styled-components';

export const SocialList = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 193px;
  padding-top: 79px;
  padding-bottom: 105px;
`;

export const SocialItem = styled.li`
  &:not(:last-child) {
    margin-right: 26px;
  }
`;

export const SocialLink = styled.a`
  cursor: pointer;
  color: #696969;
`;
