import {
  createBrowserRouter,
} from "react-router";
import Habits from "../pages/Habits/Habits";

// import Habits from "../pages/Habits/Habits";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Habits/>,
  },
]);


