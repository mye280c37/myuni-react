import React from "react";
import PageLayout from './PageLayout';

import Reviews from "../components/common/Reviews";

export default function ReviewsPageLayout() {

    return (
        <PageLayout title={"후기"}>
            <Reviews/>
        </PageLayout>
    );
}