import { Suspense } from "react";
import { Route, Routes } from "react-router";
import Home from "../../pages/home/home";
import Login from "../../pages/login/Login";
import Join from "../../pages/join/Join";
import Detail from "../../pages/detail/detail";
import NotFound from "../../components/layout/notFound";
import JoinDone from "../../pages/join/JoinDone";
import InfoFind from "../../pages/InfoFind/InfoFind";
import IdFind from "../../pages/InfoFind/IdFind";
import PwdFind from "../../pages/InfoFind/PwdFind";

const MainRouter = () => {
    return(
        <Suspense fallback={<div />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
                <Route path="/join/joinDoen" element={<JoinDone />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/*" element={<NotFound />} />
                <Route path="/infoFind" element={<InfoFind />} />
                <Route path="/idFind" element={<IdFind />} />
                <Route path="/pwdFind" element={<PwdFind />} />
            </Routes>
        </Suspense>
    );
}

export default MainRouter;