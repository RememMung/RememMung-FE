import BasicLayout from "./layout/BasicLayout";
import MyPageLayout from "@layout/MypageLayout";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";

import useBodyOverflowHidden from "@hooks/useBodyOverflowHidden";

import StartPage from "./pages/startPage/startPage";
import KakaoLoginPage from "@pages/socialLoginPage/kakaoLoginPage";
import OnBoardingPage from "./pages/onBoardingPage/onBoardingPage";

import ChatPage from "./pages/chatPage/chatPage";
import PhotoPage from "./pages/photoPage/photoPage";
import WriteMailPage from "./pages/writeMailPage/writeMailPage";
import MailBoxPage from "./pages/mailBoxPage/mailBoxPage";
import DiaryPage from "@pages/diaryPage/diaryPage";
import WriteDiaryPage from "@pages/writeDiaryPage/writeDiaryPage";

import MyMailPage from "@pages/myPage/myMailPage/myMailPage";
import UpdatePage from "@pages/myPage/updatePage";
import DeleteDataPage from "@pages/myPage/deleteDataPage";
import DeleteMemberPage from "@pages/myPage/deleteMemberPage";

function App() {
  useBodyOverflowHidden();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<StartPage />} />

        <Route path="/oauth2/kakao" element={<KakaoLoginPage />} />
        <Route path="/onboarding" element={<OnBoardingPage />} />

        <Route element={<BasicLayout />}>
          <Route path="/chat" element={<ChatPage />} />

          <Route path="/photo" element={<PhotoPage />} />

          <Route path="/writemail" element={<WriteMailPage />} />

          <Route path="/mailbox" element={<MailBoxPage />} />

          <Route path="/diary" element={<DiaryPage />} />

          <Route path="/writediary" element={<WriteDiaryPage />} />
        </Route>

        <Route element={<MyPageLayout />}>
          <Route path="/mypage/mymail" element={<MyMailPage />} />
          <Route path="/mypage/update" element={<UpdatePage />} />
          <Route path="/mypage/deletedata" element={<DeleteDataPage />} />
          <Route path="/mypage/delete" element={<DeleteMemberPage />} />
        </Route>
      </Route>
    )
  );

  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
