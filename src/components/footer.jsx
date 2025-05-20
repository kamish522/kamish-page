function Footer() {
    const url = [
    {
        'name': "СТРАНИЦЫ",
        'link': [
		{
            'name': "Политика конфиденциальности",
            'link': "https://docs.kamish.pro/privacy"
        },
        {
            'name': "Условия использования",
            'link': "https://docs.kamish.pro/tos"
        }
        ]
    },{
        'name': "ДРУЗЬЯ",
        'link': [
        {
            'name': "Anima bot",
            'link': "https://discord.com/oauth2/authorize?client_id=1187466797885182141"
        }
        ]
      }
    ];

    return (
        <footer>
            <div className="mx-auto w-full container p-4 py-8 lg:py-6">
                <div className="md:flex md:justify-between">
                    <div>
						<h1 className="self-center text-2xl font-semibold text-gray-300 whitespace-nowrap mb-6 md:mb-0">Kamish</h1>
                    </div>
            
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">{
                        url.map((el) => (
                            <div>
                                <h2 className="mb-2 text-sm font-semibold uppercase text-white">{el.name}</h2>
                  
                                <ul className="text-gray-500 font-medium">{
                                el.link.map((els) => (
                                    <li className="mb-2"><a className="hover:underline" target='_blank' href={els.link}>{els.name}</a></li>
                                ))
                                }</ul>
                           </div>
                        ))
                    }</div>
                </div>
          
                <hr className="my-4 sm:mx-auto border-neutral-700 lg:my-6"/>
                <p className="text-sm sm:text-center text-gray-400">Мы не являемся аффилированным лицом компании Discord Inc.</p>
            </div>
        </footer>
    )
}
  
export default Footer