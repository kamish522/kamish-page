import button from '../../components/button.jsx';

function About() {
    const data = {
        title: "Множество интересных игр сделаных для вас <3",
        description: "Kamish — игровой бот, который добавляет много игр на ваш сервер. Вы можете просто играть или сражаться за первое место в таблице лидеров.",
        link: {
            bot: 'https://discord.com/oauth2/authorize?client_id=1066975258206294096',
            docs: 'https://docs.kamish.pro'
        }
    }

    return (
        <main>
            <div className="main container pt-22 pb-16 px-3 md:px-5">
                <div className="container"></div>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="flex-1">
            
                        <h1 className="text-left text-[25px] md:text-4xl font-bold mb-4 md:mb-6">{data.title}</h1>
                        <p className="text-left text-lg md:text-xl text-gray-400 mb-4 md:mb-6">{data.description}</p>
            
                        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start text-center">{
                            new button().setName('Начать использование').setStyle('1').setUrl(data.link.bot).setTarget('_blank').render()
                        }{
                            new button().setName('Документация').setStyle('2').setUrl(data.link.docs).setTarget('_blank').render()
                        }</div>
                    </div>
          
                    <div className="flex-1 relative scale-95">
                        <div className="relative aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#2a2a2a] to-[#2a2a2a] rounded-full blur-3xl"></div>
                            
							<div className="relative z-10 w-full h-full">
                                <img src="/storage/site/icon.png" alt="Kamish Icon" className="absolute"/>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
        </main>
    )
}
  
export default About