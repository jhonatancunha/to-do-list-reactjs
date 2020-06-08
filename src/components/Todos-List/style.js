import styled from 'styled-components';

export const Wrapper = styled.ul`
  list-style: none;
  border-radius: 5px;
  overflow-y: scroll;
  background: #fcf9f9;
  color: #232222;

  @media (min-width: 800px) {
    height: 350px;
    margin-top: 30px;
  }

  @media (max-width: 799px) {
    height: calc(100vh - 70px - 70px - 64px);
  }
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
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  margin-left: auto;
  border: 0;
  height: 27px;
  cursor: pointer;
`;
