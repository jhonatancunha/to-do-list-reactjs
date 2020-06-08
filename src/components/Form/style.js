import styled from 'styled-components';

export const Wrapper = styled.form`
  @media (max-width: 800px) {
    padding: 10px;
    background: #232222;
  }
`;

export const Input = styled.input`
  height: 48px;
  border: 0;
  border-radius: 4px;
  padding: 20px;
  width: calc(100vw - 80px - 25px);

  @media (max-width: 800px) {
    background: #fcf9f9;
    color: #232222;
    font-size: 0.9rem;
  }

  @media (min-width: 800px) {
    color: #fcf9f9;
    background: #232222;
    font-size: 0.9rem;
    width: 440px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background: #e84a5f;
  border: 0;
  border-radius: 4px;
  color: #fcf9f9;
  font-weight: bold;
  height: 49.5px;
  margin-left: 5px;
  width: 80px;

  @media (min-width: 800px) {
    font-size: 1.1rem;
    margin-left: 30px;
    width: 100px;
  }

  transition: all 0.2s ease-in-out;

  @media (hover: hover) {
    :hover {
      background: #fcf9f9;
      color: #e84a5f;
      border: 2px solid #e84a5f;
    }
  }
`;
