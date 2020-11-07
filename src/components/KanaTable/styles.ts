import styled from 'styled-components'

export const Table = styled.table`
    position: absolute;
    border-collapse: separate;
    border-spacing: 0;
    text-align: center;
    line-height: 1.5rem;
    color: #470e0e;

    background: white;
    border-radius: 10px;
    padding: 30px;

    td {
      padding: 8px 16px;
    }

    td:first-child {
      text-align: start;
    }

    td + td {
      border-left: 1px solid rgb(0, 0, 0, 0.15);
    }

    tr:not(:last-child) > td {
      border-bottom: 1px solid rgb(0, 0, 0, 0.15);
    }

`
