import { Suspense } from "react";
import { Route, Routes } from "react-router";
import Home from "../../pages/home/home";
import Login from "../../pages/login/Login";
import Detail from "../../pages/detail/detail";
import NotFound from "../../components/layout/notFound";

const MainRouter = () => {
    return(
        <Suspense fallback={<div />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
}

export default MainRouter;