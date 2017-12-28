import React from 'react'
import styled from 'styled-components'

import { grayLight4 } from 'utils/colors'
import rem from 'utils/rem'

export const TableWrapper = styled.table`
  width: 100%;
  text-align: left;
  margin: ${rem(40)} 0;
  border-collapse: collapse;
`

const TableHead = styled.thead`
  background-color: ${grayLight4};
`

export const Row = styled.tr`
  padding: 0 ${rem(20)};
  padding-left: 0;
  border-bottom: ${rem(1)} solid ${grayLight4};
`

export const Column = styled.th`
  font-weight: normal;
  padding: ${rem(10)} ${rem(12)};
`

const TableHeadColumn = styled(Column)`
  text-transform: uppercase;
  font-size: 85%;
  opacity: 0.8;
`

const Table = ({ head, children }) => (
  <TableWrapper>
    <TableHead>
      <tr>
        {
          head.map((text, i) => (
            <TableHeadColumn key={i} title={text}>
              {text}
            </TableHeadColumn>
          ))
        }
      </tr>
    </TableHead>

    <tbody>
      {children}
    </tbody>
  </TableWrapper>
)

export default Table
