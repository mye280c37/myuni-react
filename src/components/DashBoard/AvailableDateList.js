import * as React from 'react';
import Link from '@mui/material/Link';
import Title from './Title';
import StickyHeadTable from '../common/StickyHeaderTable';

const columns = [
    { id: 'date', label: '날짜' },
    { id: 'timeFrom', label: '시작 시간'},
    { id: 'timeTo', label: '종료 시간'}
];

const rows = [
    { date: '2019-02-04', timeFrom: '13:00', timeTo: '14:00' },
    { date: '2019-02-04', timeFrom: '13:00', timeTo: '14:00' },
    { date: '2019-02-04', timeFrom: '13:00', timeTo: '14:00' },
    { date: '2019-02-04', timeFrom: '13:00', timeTo: '14:00' }
]

function preventDefault(event) {
    event.preventDefault();
}

export default function AvailableDateList() {
    return (
        <React.Fragment>
        <Title>신청 가능 날짜</Title>
        <StickyHeadTable
            columns={columns}
            rows={rows}
        />
        {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
            See more orders
        </Link> */}
        </React.Fragment>
    );
}