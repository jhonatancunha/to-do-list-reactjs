import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  @media (max-width: 799px) {
    background: #fcf9f9;
    margin-left: 8px;
    position: fixed;
    bottom: 78px;
  }
`;
export const Span = styled.span`
  margin-top: 10px;
  margin-right: 20px;
  height: 47px;
  border: 2px solid #232222;
  border-radius: 4px;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 800px) {
    width: 202px;
    font-size: 1.1rem;
  }

  @media (max-width: 799px) {
    font-size: 0.9rem;
    width: 120px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background: #232222;
  margin-top: 10px;
  margin-right: 20px;
  height: 47px;
  border-radius: 2px;
  border: 0;
  font-weight: bold;
  color: #fcf9f9;

  transition: all 0.2s ease-in-out;

  @media (min-width: 800px) {
    width: 202px;
    font-size: 1.1rem;
  }

  @media (max-width: 799px) {
    font-size: 0.9rem;
    width: 120px;
  }

  @media (hover: hover) {
    :hover {
      background: #fcf9f9;
      color: #232222;
      border: 2px solid #574b90;
    }
  }
`;

export const BtnNotCompleted = styled(Button)`
  color: #fcf9f9;
  background: #574b90;

  @media (hover: hover) {
    :hover {
      background: #fcf9f9;
      color: #574b90;
      border: 2px solid #574b90;
    }
  }
`;

export const BtnFinished = styled(Button)`
  color: #fcf9f9;
  background: #427a5b;

  @media (hover: hover) {
    :hover {
      background: #fcf9f9;
      color: #427a5b;
      border: 2px solid #427a5b;
    }
  }
`;
