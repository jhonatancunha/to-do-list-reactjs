import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  bottom: 0;
  height: 70px;
  width: 100vw;
  background: #232222;

  span {
    color: #fcf9f9;
    margin-right: 100px;

    @media (max-width: 800px) {
      margin-right: 15px;
      font-size: 0.9rem;
    }
  }
`;

export const Links = styled.div`
  @media (min-width: 800px) {
    margin: 100px;
    a {
      margin: 5px;
    }
  }

  a {
    margin-left: 15px;
  }
`;
