import React, {useState, useEffect} from "react";
import axios from "axios";

import PageLayout from './PageLayout';
import PreviewTable from "../components/common/PreviewTable";
import ReviewDetail from "../components/common/ReviewDetail";

const url = process.env.REACT_APP_API_URL;

const columns = [
    { id: 'title', label: '제목', minWidth: 170 },
    { id: 'author', label: '작성자', minWidth: 100 },
    { id: 'consultingTime', label: '상담 날짜', minWidth: 100 },
];

function clickedHandler(data) {
    return <ReviewDetail review={data} />
}

export default function ReviewsPageLayout() {
    
    const [ getData, setGetData ] = useState(false);
    const [ data, setData] = useState([]);

    const [clicked, setClicked] = useState(-1);

    const apiUrl = "/v2/review";

    async function getReviews() {
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
        <PageLayout title={"후기"}>
            <PreviewTable clicked={clicked} onClick={setClicked} columns={columns} data={data} detail={clickedHandler}/>
        </PageLayout>
    );
}