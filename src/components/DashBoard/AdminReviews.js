/* eslint-disable */
import React, {useState, useEffect} from "react";

import Title from './Title';
import ReviewsTable from "../Reviews/ReviewsTable";

export default function AdminReviews() {
    
    const [clicked, setClicked] = useState(-2);

    return (
    <React.Fragment>
        {clicked<=-1?
        <Title>컨설팅 후기</Title>:null
        }
        <ReviewsTable clicked={clicked} onClick={setClicked} admin={true} />
    </React.Fragment>
    );
};