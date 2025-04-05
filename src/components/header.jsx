function Header() {
  const url = [
    {
      name: "ГЛАВНАЯ",
      link: "/"
    },
    {
      name: "ДОКУМЕНТАЦИЯ",
      link: "/docs"
    },
    {
      name: "СЕРВЕР ПОДДЕРЖКИ",
      link: "https://discord.gg/8p8NYhparv",
      target: "_blank"
    },
    {
      name: "СТАТИСТИКА",
      link: "/stats"
    }
  ]

  return (
    <header>
      <div className="container mx-auto px-5 md:px-7 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="text-2xl font-bold">KAMISH</a>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {
              url.map((el) => (
                <a href={el.link} target={el.target} className="text-sm font-medium" key={el.name}>{el.name}</a>
              ))
            }
          </nav>

          <a href='https://discord.com/oauth2/authorize?client_id=1066975258206294096' className="border border-[#2a2a2a] hover:bg-[#2a2a2a] px-4 py-2 rounded-md text-sm font-medium">Добавить</a>
        </div>
      </div>
    </header>
  )
}

export default Header
