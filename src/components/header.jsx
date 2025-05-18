import { useState, } from "react";

function Header() {
  const url = [
    {
      name: "ГЛАВНАЯ",
      link: "/",
      target: null
    },
    {
      name: "ДОКУМЕНТАЦИЯ",
      link: "https://docs.kamish.pro",
      target: "_blank"
    },
    {
      name: "СЕРВЕР ПОДДЕРЖКИ",
      link: "https://discord.gg/8p8NYhparv",
      target: "_blank"
    },
    {
      name: "СТАТИСТИКА",
      link: "/stats",
      target: null
    }
  ]

  return (
    <>
      <header>
        <div className="container mx-auto px-5 md:px-7 lg:px-10">
          <div className="flex h-16 items-center justify-between">
            <a href="/" className="text-2xl font-bold">KAMISH</a>

            <nav className="hidden lg:flex items-center space-x-8">
              {
                url.map((el) => (
                  <a href={el.link} target={el.target} className="text-sm font-medium">{el.name}</a>
                ))
              }
            </nav>

            <a className='border border-[#191919] hover:border-[#2a2a2a] hover:bg-[#111111] px-1.5 py-2 rounded-md text-[20px] font-medium transition duration-300 ease-in-out'>
              Пригласить бота!
            </a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header