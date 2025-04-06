const PageNotFound = () => {
  const json = [
    {
      text: "Что вы тут забыли?"
    },{
      text: "Кажется такой страницы не существует!"
    },{
      text: "Вы кто путник?"
    },{
      text: "Вы где эту ссылку откопали?"
    },{
      text: "Советую валить отсюда!"
    },{
      text: "Кыш!"
    },{
      text: "Здравствуй, путник! Я не знаю что вы тут забыли, но я бы советовал валить отсюда!"
    }
  ]
  
  const randomIndex = Math.floor(Math.random() * json.length);
  const text = json[randomIndex].text;
  
  return (
    <main>
      <div className="container mx-auto pt-22 pb-16">
        <div className="flex-1 text-center translate-y-4">
            
          <h1 className="text-[100px] font-bold">404</h1>
          <p className="text-xl text-gray-400">{text}</p>
          
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a href="/" className="hover:border hover:border-[#2a2a2a] hover:bg-[#111111] bg-[#2a2a2a] px-6 py-3 rounded-md text-[20px] font-medium">Вернуться на главную страницу</a>
        </div>
      </div>
    </main>
  )
}
  
export default PageNotFound;

