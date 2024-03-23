import { Suspense } from "react";
import { Route, Routes } from "react-router";
import Join from "../../pages/join/Join";
import Home from "../../pages/home/home";

const MainRouter = () => {
    return(
        <Suspense fallback={<div />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Join />} />
            </Routes>
        </Suspense>
    );
}

export default MainRouter;