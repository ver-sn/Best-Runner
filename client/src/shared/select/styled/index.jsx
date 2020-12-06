import styled from 'react-emotion';

const SelectStyle = styled.select`
  height: 40px;
  margin-right: 20px;
  padding: 5px 10px;
  border-color: palevioletred;
  border-radius: 5px;
`;

const SelectField = styled.div`
  display: flex;
  align-items: center;
`;

const SelectLabel = styled.p`
  margin: 0 10px 0;
  font-size: 16px;
  color: #5FA1DB;
`;

export {
  SelectStyle,
  SelectField,
  SelectLabel,
};
