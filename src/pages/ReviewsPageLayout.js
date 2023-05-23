import React, {useState, useEffect} from "react";
import axios from "axios";

import PageLayout from './PageLayout';
import Reviews from "../components/common/Reviews";

const url = process.env.REACT_APP_API_URL;

export default function ReviewsPageLayout() {
    
    const [ getData, setGetData ] = useState(false);
    const [ data, setData] = useState([]);
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
            <Reviews data={data}/>
        </PageLayout>
    );
}