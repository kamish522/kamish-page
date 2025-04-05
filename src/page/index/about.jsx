function About() {
  const title = "Множество интересных игр сделаных для вас <3"
  const description = "Kamish — игровой бот, который добавляет много игр на ваш сервер. Вы можете просто играть или сражаться за первое место в таблице лидеров."

  return (
    <main>
      <div className="container mx-auto pt-22 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left translate-y-4">
            
            <h1 className="text-4xl md:text-4xl font-bold mb-6">{title}</h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">{description}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="hover:border hover:border-[#2a2a2a] hover:bg-[#111111] bg-[#2a2a2a] px-6 py-3 rounded-md text-[20px] font-medium">Начать использовать</button>
              <button className="border border-[#2a2a2a] hover:bg-[#2a2a2a] px-6 py-4 rounded-md text-[20px] font-medium">Подробнее</button>
            </div>
          </div>
          
          <div className="flex-1 relative scale-95" id="hero-image">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2a2a2a] to-[#2a2a2a] rounded-full blur-3xl"></div>
              <div className="relative z-10 w-full h-full" id="hero-blob">
                <img src="https://kamish.pro/files/CND/Icon.png" alt="Kamish Bot"className="absolute inset-0 m-auto object-contain" id="hero-bot-image"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
  
export default About