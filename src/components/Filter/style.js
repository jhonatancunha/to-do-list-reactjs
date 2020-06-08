import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  font-size: 1.1rem;
  font-weight: bold;
`;

export const Button = styled.button`
  margin: 10px;
  height: 50px;
  width: 213px;
  border-radius: 2px;
  border: 0;

  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  background: #232222;
  color: #fcf9f9;
`;

export const Span = styled.span`
  margin: 10px;
  height: 50px;
  width: 213px;
  border: 2px solid #232222;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BtnNotCompleted = styled(Button)`
  color: #fcf9f9;
  background: #574b90;
`;

export const BtnFinished = styled(Button)`
  color: #fcf9f9;
  background: #427a5b;
`;
