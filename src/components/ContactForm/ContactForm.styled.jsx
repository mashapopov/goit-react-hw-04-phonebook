import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  margin-bottom: 10px;
  max-width: 350px;
  border: 1px solid #f08080;
  border-radius: 10px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 5px;
`;
export const Input = styled.input`
  padding: 5px 10px;
  max-width: 250px;
  border-radius: 10px;
`;
export const Button = styled.button`
  margin: auto;
  max-width: 150px;
  border-radius: 15px;
  font-size: 20px;
  background-color: #dda0dd;
  :hover {
    background-color: #ba55d3;
  }
`;
