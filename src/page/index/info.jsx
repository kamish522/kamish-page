function Game() {
  const main = [
      {
          title: "Множество игр",
          description: "Множество игр Kamish предлагает множество игр, которые вы можете играть на своем сервере. На данный момент доступно более 14 игр и самые популярные из них: Акинатор, Мафия и классика 2048! Все остальные игры вы можете увидеть, просто пригласив бота!",
          image: "/Game-mafia.png"
      },
      {
          title: "Локализация",
          description: "Kamish поддерживает 3 языка: Русский, Английский и Украинский. Язык меняется автоматически в зависимости от языка вашего Discord клиента. Хотите помочь с локализацией? Тогда читайте, как это сделать здесь: https://kamish.pro/docs/translate",
          image: "/Kamish-translate.png"
      },
      {
          title: "Планы на будущее",
          description: "Мы стараемся развивать бота и добавлять новые функции каждый день. Наши ближайшие планы - это: добавить игру под кодовым названием 'Био-войны'. Данная идея возникла после использования всеми известного Telegram-бота Ирис."
      }
  ];

  return (
      <main>
          <div className="flex flex-col items-center justify-center container mx-auto info">
            <div className="flex flex-col lg:flex-row gap-12">
                <h1 className="text-4xl md:text-5xl font-bold text-center w-full pb-4">Возможности</h1>
            </div>

              {
                main.map((el) => (
                  <div className="flex flex-col lg:flex-row items-center justify-center container mx-auto pt-6 pb-4 info" key={el.title}>
                    <div className="flex-1">
                      <h1 className="text-3xl md:text-4xl font-bold mb-4 max-w-2xl">{el.title}</h1>
                      <p className="text-lg md:text-xl text-gray-400 mb-4 max-w-2xl">{el.description}</p>
                    </div>

                    {
                      el.image && (
                        <div className="flex-1 relative scale-95">
                          <div className="relative z-10 w-full h-full">
                            <img src={el.image} alt={el.title} className="absolute inset-0 m-auto object-contain rounded-md" />
                          </div>
                        </div>
                      )
                    }
                  </div>
                ))              
              }
          </div>
      </main>
  );
}

export default Game;