import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  font-size: 1.1rem;
  font-weight: bold;

  @media (max-width: 799px) {
    margin-left: 15px;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  margin-right: 20px;
  height: 47px;
  width: 202px;
  border-radius: 2px;
  border: 0;

  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  background: #232222;
  color: #fcf9f9;

  @media (max-width: 799px) {
    font-size: 0.9rem;
  }
`;

export const Span = styled.span`
  margin-top: 10px;
  margin-right: 20px;
  height: 47px;
  width: 202px;
  border: 2px solid #232222;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1.1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 799px) {
    font-size: 0.9rem;
  }
`;

export const BtnNotCompleted = styled(Button)`
  color: #fcf9f9;
  background: #574b90;
`;

export const BtnFinished = styled(Button)`
  color: #fcf9f9;
  background: #427a5b;
`;
