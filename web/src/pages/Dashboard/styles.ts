import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Title = styled.h1`
  font-size: 48px;
  color: #212931;
  max-width: 450px;
  line-height: 48px;

  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #0976cb;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#0976cb')};
    }
  }
`;

export const URLList = styled.div`
  margin-top: 80px;
  max-width: 700px;
`;
