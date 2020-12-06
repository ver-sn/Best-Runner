import styled from 'react-emotion';

const StyledTable = styled.div`
  padding: 40px 0 0;
  width: 100%;
  overflow: auto;
  max-width: 100vw;

  table {
    width: 100%;
    table-layout: fixed;
    min-width: 600px;

    th {
      text-transform: uppercase;
      color: grey;
    }

    td,
    th {
      padding: 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: clip;
    }
  }
`;

export default StyledTable;
