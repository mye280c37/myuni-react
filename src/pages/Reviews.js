import React, {useState} from "react";

import PageLayout from './PageLayout';
import ReviewsTable from "../components/Reviews/ReviewsTable";

export default function Reviews() {

    const [clicked, setClicked] = useState(-1);

    return (
        <PageLayout title={"후기"}>
            <ReviewsTable clicked={clicked} onClick={setClicked} />
        </PageLayout>
    );
}