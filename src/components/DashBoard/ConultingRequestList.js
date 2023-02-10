import * as React from 'react';
import Title from './Title';
import StickyHeadTable from '../common/StickyHeaderTable';

const columns = [
  { id: 'desiredDate', label: '신청 날짜' },
  { id: 'name', label: '이름'},
  { id: 'consultingOption', label: '컨설팅 옵션'}
];

const rows = [
  { desiredDate: '2019-02-04 13:00~14:00', name: '아무개', consultingOption: '수시지원전형' },
  { desiredDate: '2019-02-04 13:00~14:00', name: '아무개', consultingOption: '수시지원전형' },
  { desiredDate: '2019-02-04 13:00~14:00', name: '아무개', consultingOption: '수시지원전형' }
];

export default function ConsultingRequestList() {
  return (
    <React.Fragment>
      <Title>컨설팅 신청</Title>
      <StickyHeadTable
        columns={columns}
        rows={rows}
      />
        {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
          See more orders
        </Link> */}
    </React.Fragment>
  );
};