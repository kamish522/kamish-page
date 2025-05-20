import { useState, useEffect, useRef } from "react";

const data = [
    {
        title: "ГЛАВНАЯ",
        link: "/",
        target: null
    },
    {
        title: "ДОКУМЕНТАЦИЯ",
        link: "https://docs.kamish.pro",
        target: "_blank"
    },
    {
        title: "СЕРВЕР ПОДДЕРЖКИ",
        link: "https://discord.gg/8p8NYhparv",
        target: "_blank"
    },
    {
        title: "СТАТИСТИКА",
        link: "/stats",
        target: null
    }
]

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const Ref = useRef(null);

    useEffect(() => {
        if (!isMenuOpen) return;

    function handleClickOutside(event) {
      if (Ref.current && !Ref.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 25) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Исполнить при начальной загрузке
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header id={isScrolled ? 'scrolled enable' : null} ref={Ref}>
            <div className="container mx-auto px-5 md:px-7 lg:px-10">
                <div className="flex h-16 items-center justify-between">
                    <a href="/" className="text-2xl font-bold">KAMISH</a>

                    <nav className="hidden lg:flex items-center space-x-8">{
                        data.map((el) => (
                            <a href={el.link} target={el.target} className="text-sm font-medium">{el.title}</a>
                        ))
                    }</nav>

                    <a href='https://discord.com/oauth2/authorize?client_id=1066975258206294096' className='text-sm font-medium lg:block hidden'>ПРИГЛАСИТЬ БОТА</a>

					<div className="flex justify-end lg:hidden">
                        <button className='cursor-pointer' onClick={() => {
                            setIsMenuOpen(data => {const newData = !data; if (newData) setIsScrolled(true); return newData}); 
                        }}>
     				  	    <img src="/storage/site/svg/menu.svg" alt="menu" className="w-25 h-20"/>
 					    </button>
					</div>
                </div>
            </div>

            <ul id={isMenuOpen ? 'menu' : null} ref={Ref} className={
                isMenuOpen ? 'flex flex-col lg:hidden' : 'hidden'
            }>{
                data.map((el, id) => (
                    <li key={id}>
                        <a href={el.link} 
                            className='flex items-center text-[20px] p-[15px] cursor-pointer hover:bg-[#2a2a2a]' 
                            onClick={() => setIsMenuOpen(false)}
                        >{el.title}</a>
                    </li>
                ))
            }</ul>
        </header>
    )
}

export default Header