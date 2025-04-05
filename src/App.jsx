import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";

import Home from "./page/index/index.jsx";

// Важно: Добавить страницу при создании новой!!!

const router = [
    {
        path: "/",
        element: <Home />,
    }
];

const App = () => {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                {
                    router.map((el) => ( <Route path={el.path} element={el.element}/> ))
                }
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;