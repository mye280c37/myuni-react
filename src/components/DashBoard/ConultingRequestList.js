/* eslint-disable */
import React, {useState, useEffect} from "react";
import Title from './Title';
import axios from 'axios';

import PreviewTable from "../common/PreviewTable";
import ConsultingRequestDetail from "../common/ConsultingRequestDetail";

const url = process.env.REACT_APP_API_URL;

const columns = [
  { id: 'name', label: '이름'},
  { id: 'desiredDate', label: '신청 날짜' },
  { id: 'consultingOption', label: '컨설팅 옵션'},
  { id: 'checked', label: '확인', align: 'center'}
];

const ProcessData = (data) => {
  return data.map((d) => { 
    return {
      name: d.user.name,
      desiredDate: d.desiredDate,
      consultingOption: d.consultingOption.join(', '),
      checked: d.checked? "O" : "X",
      origin: d
    }
  });
};

const clickedHandler = (data) => {
  return <ConsultingRequestDetail data={data}/>
}

export default function ConsultingRequestList() {

  const [ data, setData] = useState([]);
  const [clicked, setClicked] = useState(-2);

  const getConsultingRequests = async () => {
    await axios.get(
        url + "/v2/consulting-request/admin",
    )
    .then((res) => {
        console.log(res.data.result);
        setData(ProcessData(res.data.result));
    })
    .catch((error) => {
        console.log(error);
    });
  };

  useEffect(()=>{
    if (clicked === -2){
      getConsultingRequests();
    }
    setClicked(-1);
  },[clicked, setClicked, getConsultingRequests]);

  return (
    <React.Fragment>
      <Title>컨설팅 신청</Title>
      <PreviewTable clicked={clicked} onClick={setClicked} columns={columns} data={data} detail={clickedHandler}/>
    </React.Fragment>
  );
};