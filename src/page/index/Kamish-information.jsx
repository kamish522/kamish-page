function Game() {
    const data = [
    {
        title: "Крутые игры",
        description: (
            <>Kamish предлагает множество игр, в которые вы можете играть на своём сервере! Сейчас в боте насчитывается более 12 мини-игр, а также доступны такие игры, как Мафия и Акинатор. Все остальные игры вы можете посмотреть и опробовать в самом боте!</>
        ),
        image: "/storage/site/index/Mafia.png"
    },
    {
        title: "Локализация",
        description: (
            <>Наша команда каждый день работает над переводом бота на другие языки! В настоящее время мы официально поддерживаем 3 языка: русский, английский и украинский. Вы можете помочь с локализацией, посетив страницу <a href='https://docs.kamish.pro/translate' target='_blank' rel='noopener noreferrer' id='Text link'>Документации</a>!</>
        ),
        image: "/storage/site/index/Translate.png"
    }
    ];

  return (
        <div className='px-5'>
            <block id='Kamish Team'>
            <div className="flex flex-col lg:flex-row gap-12">
                <h1 className="text-4xl md:text-5xl font-bold text-center w-full pb-10">Возможности</h1>
            </div>

              {
                data.map((el) => (
                  <div className="flex flex-col lg:flex-row container mx-auto pt-6 pb-4 info">
                    <div className="flex-1">
                      <h1 className="text-2xl md:text-4xl font-bold mb-4 max-w-2xl">{el.title}</h1>
                      <p className="text-lg md:text-xl text-gray-400 mb-4 max-w-2xl">{el.description}</p>
                    </div>

                    {
                      el.image && (
                        <div className="flex-1 relative scale-95 lg:block hidden">
                          <div className="relative z-10 w-full h-full">
                            <img src={el.image} alt={el.title} className="absolute inset-0 m-auto object-contain rounded-md" />
                          </div>
                        </div>
                      )
                    }
                  </div>
                ))              
              }
          </block>
      </div>
  );
}

export default Game;