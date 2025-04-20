import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";

import Home from "./page/index/index.jsx";
import PageNotFound from "./page/404/index.jsx";

// Важно: Добавить страницу при создании новой!!!

const router = [
    {
        path: "/",
        element: <Home />,
    },{
        path: "/404",
        element: <PageNotFound />,
    }
];

const App = () => {
    const handleContextMenu = (event) => {
        event.preventDefault();
    };

    
    return (
        <BrowserRouter>
        <div onContextMenu={handleContextMenu}>
            <Header/>
                <Routes>
                    {
                        router.map((el) => ( <Route path={el.path} element={el.element}/> ))
                    }

                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            <Footer/>
        </div>
        </BrowserRouter>
    )
}

export default App;