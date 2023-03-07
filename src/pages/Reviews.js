import React, {useState, useEffect} from "react";
import StickyHeadTable from '../components/common/StickyHeaderTable';
import PageLayout from './PageLayout';
import axios from 'axios';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

import ReviewDetail from "./ReviewDetail";

const url = process.env.REACT_APP_API_URL;

const columns = [
    { id: 'title', label: '제목', minWidth: 170 },
    { id: 'author', label: '작성자', minWidth: 100 },
    { id: 'consultingTime', label: '상담 날짜', minWidth: 100 },
];

export default function Reviews() {

    const [ getData, setGetData ] = useState(false);
    const [ data, setData] = useState([]);
    const [ clicked, setClicked ] = useState(-1);

    async function getReviews() {
        await axios.get(
            url + "/v2/review",
        )
        .then((res) => {
            console.log(res.data.result);
            setData(res.data.result);
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
        <PageLayout title={"후기"}>
            <Box sx={{ display: clicked===-1? 'block': 'none' }}>
                <StickyHeadTable columns={columns} rows={data} onClick={setClicked}></StickyHeadTable>
            </Box>
            {clicked === -1
            ?<Box></Box>
            :<Box sx={{ display: clicked===-1? 'none': 'block'}}>
                <Divider></Divider>
                <ReviewDetail review={data[clicked]}/>
                <Divider></Divider>
                <Box sx={{ mt: 3, textAlign: 'right' }}>
                    <Button variant="outlined" onClick={()=>{setClicked(-1)}}>
                        목록으로
                    </Button>
                </Box>
            </Box>
            }
        </PageLayout>
    );
}