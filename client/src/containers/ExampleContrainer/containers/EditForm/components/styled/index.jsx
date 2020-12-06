import styled from 'react-emotion';

const StyleRow = styled.div`
  width: 100%;

  button {
    width: 100%;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
`;

const Select = styled.select`
  width: 100%;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
  height: 40px;
`;

export {
  StyleRow,
  TextArea,
  Select,
};
