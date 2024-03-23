import { Suspense } from "react";
import { Route, Routes } from "react-router";
import Join from "../../pages/join/Join";

const MainRouter = () => {
    return(
        <Suspense fallback={<div />}>
            <Routes>
                <Route path="/" element={<></>} />
                <Route path="/login" element={<Join />} />
            </Routes>
        </Suspense>
    );
}

export default MainRouter;