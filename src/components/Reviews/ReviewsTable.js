import React, {useState, useEffect, useCallback} from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import PreviewTable from "../common/PreviewTable";
import ReviewDetail from "./ReviewDetail";
import ReviewPost from "./ReviewPost";

const url = process.env.REACT_APP_API_URL;

const columns = [
    { id: 'title', label: '제목', minWidth: 170 },
    { id: 'author', label: '작성자', minWidth: 100 },
    { id: 'consultingTime', label: '상담 날짜', minWidth: 100 },
];

function clickedHandler(data) {
    return <ReviewDetail review={data} />
}

function ReviewsTable(props) {
    
    const [ data, setData] = useState([]);
    const admin = props.admin;

    const [clicked, setClicked] = useState(props.clicked);
    const [post, setPost] = useState(false);

    const apiUrl = admin?"/v2/review/admin":"/v2/review";

    const getReviews = useCallback(async () => {
        if(admin) {
            await axios.post(
                url + apiUrl
            )
            .then((res) => {
                // console.log(res.data.result);
                setData(res.data.result);
            })
            .catch((error) => {
                console.log(error);
            })}
        else{
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
    }, [admin, apiUrl]);

    async function deleteReview() {
        const reviewId = data[clicked]._id;

        await axios.delete(
            url + "/v2/review/admin/" + reviewId
        )
        .then((res) => {
            setClicked(-2);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    useEffect(()=>{
        if (clicked===-2){
            getReviews();
            setClicked(-1);
        }
        props.onClick(clicked);
    },[getReviews, clicked, props]);

    return (
    <React.Fragment>
        {post?
            <ReviewPost post={post} postHandler={setPost}/>:
            <PreviewTable clicked={clicked} onClick={setClicked} columns={columns} data={data} detail={clickedHandler}/>
        }
        <Box sx={{ mt: 2, textAlign: 'left' }}>
        {!post && clicked<0?
            <Button variant="outlined" onClick={()=>{setPost(true)}}>
                작성
            </Button>: null}
        {clicked > 0?
            <Button variant="outlined" color="error" onClick={()=>{deleteReview()}}>
                삭제
            </Button>: null}
        </Box>
    </React.Fragment>
    );
}

ReviewsTable.propTypes = {
    clicked: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    admin: PropTypes.bool
}

ReviewsTable.defaultProps = {
    admin: false
}

export default ReviewsTable;