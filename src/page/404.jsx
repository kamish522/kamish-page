import { useEffect } from 'react';

import button from '../components/button.jsx';

const PageNotFound = () => {
  useEffect(() => {
    document.title = 'Страница не найдена | Kamish';
  }, []);

  const json = [
    {
      text: "Данная страница не существует!"
    },{
      text: "Kamish сказал: Я люблю с вами играть!"
    },{
      text: "Вау, вы нашли пасхалку!"
    },{
      text: "К сожалению, эта страница не существует!"
    },{
      text: "Советую зайти на наш Discord-сервер!"
    },{
      text: "Думаю, лучшее решение — вернуться назад!"
    }
  ]
  
  const randomIndex = Math.floor(Math.random() * json.length);
  const text = json[randomIndex].text;
  
  return (
    <main>
      <div className="container mx-auto pt-30 pb-25">
        <div className="flex-1 text-center translate-y-3">
            
          <h1 className="text-[150px] font-bold">404</h1>
          <p className="text-xl text-gray-400">{text}</p>
          
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          {
            new button().setName('Перейти на главную страницу').setStyle('1').setUrl('/').render()
          }
        </div>
      </div>
    </main>
  )
}
  
export default PageNotFound;

