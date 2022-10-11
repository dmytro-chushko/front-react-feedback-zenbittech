import styled from 'styled-components';

export const SocialList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SocialItem = styled.li`
  &:not(:last-child) {
    margin-right: 26px;
  }
`;

export const SocialLink = styled.a`
  cursor: pointer;
  color: #696969;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #89c1fa;
  }
`;
