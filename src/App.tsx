import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MonthStatistics from "./pages/MonthStatistics/MonthStatistics";
import Header from "./shared/Header/Header";

const App = () => {
    return <div className="container">
        <Header />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/month-stat' element={<MonthStatistics />} />
        </Routes>
    </div>;
}

export default App;
