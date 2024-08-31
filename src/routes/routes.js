import { createBrowserRouter } from "react-router-dom";
import IntroductionPage from "../view/IntroductionPage/IntroductionPage";
import Room from "../view/RoomPage/RoomPage";
import JoinRoom from "../view/JoinRoomPage/JoinRoomPage";
export default createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, path: "", element: <IntroductionPage /> },
      { path: "room", element: <Room /> },
      { path: "join-room", element: <JoinRoom /> },
    ],
  },
]);
