import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Summarize from "../pages/Summarize";
import Agenda from "../pages/Agenda";
import Invitation from "../pages/Invitation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/summarize",
    element: <Summarize />,
  },
  {
    path: "/agenda",
    element: <Agenda />,
  },
  {
    path: "/invitation",
    element: <Invitation />,
  },
]);

export default router;
