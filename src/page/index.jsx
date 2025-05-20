import { useEffect } from 'react';

import About from "./index/Kamish-about.jsx";
import Game from "./index/Kamish-information.jsx";
import Invite from "./index/Kamish-invite.jsx";
import Team from "./index/Kamish-team.jsx";

const Index = () => {
    useEffect(() => {
        document.title = 'Главная страница | Kamish';
    }, []);

    return (
        <>
            <About/>
            <Game/>
            <Team/>
            <Invite/>
        </>
    )
}

export default Index;