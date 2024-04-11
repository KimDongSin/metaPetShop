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
import Leave from "../../pages/leave/Leave";
import Contact from "../../pages/contact/Contact";
import MyPage from "../../pages/myPage/MyPage";
import List from "../../pages/list/List";
import PurchaseList from "../../pages/myPage/PurchaseList";
import Basket from "../../pages/basket/Basket";
import DeliveryAddress from "../../pages/deliveryAddress/DeliveryAddress";

const MainRouter = () => {
  return (
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
        {/* 회원탈퇴 페이지 */}
        <Route path="/leave" element={<Leave />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/list" element={<List />} />
        {/* 마이페이지 */}
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/myPage/purchaseList" element={<PurchaseList />} />
        {/* 장바구니 */}
        <Route path="/basket" element={<Basket />} />
        {/* 배송지페이지 */}
        <Route path="/deliveryAddress" element={<DeliveryAddress />} />
      </Routes>
    </Suspense>
  );
};

export default MainRouter;
