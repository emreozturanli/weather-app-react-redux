import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cities from "../pages/Cities";
import Details from "../pages/Details";
import Home from "../pages/Home";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PrivateRouter />}>
                    <Route path="/" element={<Home />} />
                </Route>
                <Route path="/cities" element={<Cities />} />
                <Route path="/cities/:cityName" element={<Details />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter