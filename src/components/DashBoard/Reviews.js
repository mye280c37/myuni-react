import React, {useState, useEffect} from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Title from './Title';
import Reviews from '../common/Reviews';

const url = process.env.REACT_APP_API_URL;

export default function AdminReviews() {

    const [ getData, setGetData ] = useState(false);
    const [ data, setData] = useState([]);
    const apiUrl = "/v2/review/admin";
    
    const [clicked, setClicked] = useState(-1);

    async function getReviews() {
        await axios.post(
            url + apiUrl
        )
        .then((res) => {
            // console.log(res.data.result);
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
    <React.Fragment>
        {clicked===-1?
        <Title>컨설팅 후기</Title>:
        <Box sx={{ mb: 2, textAlign: 'right' }}>
            <Button variant="outlined" color="error" onClick={()=>{setClicked(-1)}}>
                삭제
            </Button>
        </Box>
        }
        <Reviews onClick={setClicked} data={data}/>
    </React.Fragment>
    );
};