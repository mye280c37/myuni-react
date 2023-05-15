import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import axios from 'axios';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

import StickyHeadTable from "./StickyHeaderTable";
import ReviewDetail from "./ReviewDetail";

const url = process.env.REACT_APP_API_URL;

const columns = [
    { id: 'title', label: '제목', minWidth: 170 },
    { id: 'author', label: '작성자', minWidth: 100 },
    { id: 'consultingTime', label: '상담 날짜', minWidth: 100 },
];

function Reviews(props) {

    const [ getData, setGetData ] = useState(false);
    const [ data, setData] = useState([]);
    const [ clicked, setClicked ] = useState(-1);

    useEffect(()=>{
        console.log(clicked);
        if (props.onClick){
        }
            props.onClick(clicked);
    }, [clicked]);

    async function getReviews() {
        const apiUrl = props.apiUrl?props.apiUrl:"/v2/review";
        await axios.get(
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
        </React.Fragment>
    );
}

Reviews.propTypes = {
    onClick: PropTypes.func,
    apiUrl: PropTypes.string
}

export default Reviews;