import React, {useState, useEffect, useCallback} from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Title from './Title';
import PreviewTable from "../common/PreviewTable";
import ReviewDetail from "../common/ReviewDetail";

const url = process.env.REACT_APP_API_URL;

const columns = [
    { id: 'title', label: '제목', minWidth: 170 },
    { id: 'author', label: '작성자', minWidth: 100 },
    { id: 'consultingTime', label: '상담 날짜', minWidth: 100 },
];

function clickedHandler(data) {
    return <ReviewDetail review={data} />
}

export default function AdminReviews() {

    const [ getData, setGetData ] = useState(false);
    const [ data, setData] = useState([]);
    
    const [clicked, setClicked] = useState(-1);

    const getReviews = useCallback(async () => {
        await axios.post(
            url + "/v2/review/admin"
        )
        .then((res) => {
            // console.log(res.data.result);
            setData(res.data.result);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    async function deleteReview() {
        const reviewId = data[clicked]._id;

        await axios.delete(
            url + "/v2/review/admin/" + reviewId
        )
        .then((res) => {
            setGetData(false);
            setClicked(-2);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    useEffect(()=>{
        if (!getData){
            getReviews();
        }
        setGetData(true);
    },[getData, getReviews]);

    return (
    <React.Fragment>
        {clicked<=-1?
        <Title>컨설팅 후기</Title>:
        <Box sx={{ mb: 2, textAlign: 'right' }}>
            <Button variant="outlined" color="error" onClick={()=>{deleteReview()}}>
                삭제
            </Button>
        </Box>
        }
        <PreviewTable clicked={clicked} onClick={setClicked} columns={columns} data={data} detail={clickedHandler}/>
    </React.Fragment>
    );
};