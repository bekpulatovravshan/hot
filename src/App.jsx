import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import { Loader } from "./components";
import "./App.css";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            loader: Loader,
        },
        {
            path: "/articles",
            element: <Articles />,
            loader: Loader,
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
