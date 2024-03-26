import { Suspense } from "react";
import { Route, Routes } from "react-router";
import Home from "../../pages/home/home";
import Login from "../../pages/login/Login";
import Join from "../../pages/join/Join";

const MainRouter = () => {
    return(
        <Suspense fallback={<div />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
            </Routes>
        </Suspense>
    );
}

export default MainRouter;