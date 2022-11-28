import React, {useState, useEffect} from "react";
import StickyHeadTable from '../components/common/StickyHeaderTable';
import PageLayout from './PageLayout';
import axios from 'axios';

const columns = [
    { id: 'title', label: '제목', minWidth: 170 },
    { id: 'author', label: '작성자', minWidth: 100 },
    { id: 'consultingTime', label: '상담 날짜', minWidth: 100 },
];

export default function Reviews() {

    const [ getData, setGetData ] = useState(false);
    const [data, setData] = useState([]);

    async function getReviews() {
        await axios.get(
            "https://api.hellomyuni.com/v2/review",
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
            <StickyHeadTable columns={columns} rows={data} ></StickyHeadTable>
        </PageLayout>
    );
}