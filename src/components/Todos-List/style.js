import styled from 'styled-components';

export const Wrapper = styled.ul`
  list-style: none;
  margin-top: 30px;
  border-radius: 5px;
  height: 350px;
  overflow-y: scroll;
  background: #fcf9f9;
  color: #232222;
`;

export const Line = styled.li`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;

  :nth-child(even) {
    background: #d9dad7;
  }
`;

export const TitleItem = styled.span`
  font-size: 1.2em;
`;

export const DeleteButton = styled.button`
  margin-left: auto;
  border: 0;
  height: 27px;
  cursor: pointer;
`;
