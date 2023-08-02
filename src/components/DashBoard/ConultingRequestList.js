import React, {useState, useEffect} from "react";
import Title from './Title';
import PreviewTable from "../common/PreviewTable";
import axios from 'axios';
import ReviewDetail from "../common/ReviewDetail";

const url = process.env.REACT_APP_API_URL;

const columns = [
  { id: 'name', label: '이름'},
  { id: 'desiredDate', label: '신청 날짜' },
  { id: 'consultingOption', label: '컨설팅 옵션'},
  { id: 'checked', label: '확인', align: 'center'}
];

export default function ConsultingRequestList() {

  const [ getData, setGetData ] = useState(false);
  const [ data, setData] = useState([]);

  const [clicked, setClicked] = useState(-1);

  const getConsultingRequests = async () => {
    await axios.get(
        url + "/v2/consulting-request/admin",
    )
    .then((res) => {
        console.log(res.data.result);
        setData(res.data.result);
    })
    .catch((error) => {
        console.log(error);
    });
  };

  useEffect(()=>{
    if (!getData){
      getConsultingRequests();
    }
    setGetData(true);
  },[getData, getConsultingRequests]);

  return (
    <React.Fragment>
      <Title>컨설팅 신청</Title>
      <PreviewTable clicked={clicked} onClick={setClicked} columns={columns} data={data} detail={<ReviewDetail/>}/>
    </React.Fragment>
  );
};