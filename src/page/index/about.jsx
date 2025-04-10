function About() {
  const title = "Множество интересных игр сделаных для вас <3"
  const description = "Kamish — игровой бот, который добавляет много игр на ваш сервер. Вы можете просто играть или сражаться за первое место в таблице лидеров."
  const link_bot = "https://discord.com/oauth2/authorize?client_id=1066975258206294096"

  return (
    <main>
      <div className="container mx-auto pt-22 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 translate-y-4 ml-4 lg:ml-0 mr-4 lg:mr-0">
            
            <h1 className="text-left text-[25px] md:text-4xl font-bold mb-6">{title}</h1>
            <p className="text-left text-lg md:text-xl text-gray-400 mb-4 md:mb-8 max-w-2xl">{description}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href={link_bot} className="text-center hover:border hover:border-[#2a2a2a] hover:bg-[#111111] bg-[#2a2a2a] px-6 py-3 rounded-md text-[20px] font-medium">Начать использовать</a>
              <a href="/docs" className="text-center border border-[#2a2a2a] hover:bg-[#2a2a2a] px-6 py-3 rounded-md text-[20px] font-medium">Подробнее</a>
            </div>
          </div>
          
          <div className="flex-1 relative scale-95">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2a2a2a] to-[#2a2a2a] rounded-full blur-3xl"></div>
              <div className="relative z-10 w-full h-full">
                <img src="/Kamish-avatar.png" alt="Kamish Bot" className="absolute inset-0 m-auto object-contain"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
  
export default About