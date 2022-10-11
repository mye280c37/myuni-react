import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, consultingOptions, doPayment) {
  return { id, date, name, consultingOptions, doPayment };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    false
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    true
  ),
  createData(
    2, 
    '16 Mar, 2019', 
    'Tom Scholz', 
    'Boston, MA', 
    true
  ),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    false
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    true
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function ConsultingRequestList() {
  return (
    <React.Fragment>
      <Title>컨설팅 신청</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>신청 날짜</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>컨설팅 옵션</TableCell>
            <TableCell align="right">입금 확인</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.consultingOptions}</TableCell>
              <TableCell align="right">{row.doPayment?'Y':'N'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}