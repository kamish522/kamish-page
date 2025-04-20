function Footer() {
    const url = [
      {
        'name': "СТРАНИЦЫ",
        'link': [
          {
            'name': "Политика конфиденциальности",
            'link': "/privacy"
          },
          {
            'name': "Условия использования",
            'link': "/tos"
          }
        ]
      },{
        'name': "МОНТОРИНГИ",
        'link': [
          {
            'name': "Мы на AkiSearch",
            'link': "https://akisearch.com/bot/1066975258206294096"
          },
          {
            'name': "Мы на BotiCord",
            'link': "https://boticord.top/bot/1066975258206294096"
          }
        ]
      },{
        'name': "ДРУЗЬЯ",
        'link': [
          {
            'name': "Anima bot",
            'link': "https://discord.com/oauth2/authorize?client_id=1187466797885182141"
          },
          {
            'name': "Yumiko bot",
            'link': "https://discord.com/oauth2/authorize?client_id=1246492634139070517"
          }
        ]
      }
    ];

    return (
      <footer>
        <div className="mx-auto w-full container p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">

            <div className="mb-6 md:mb-0">
              <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse" href="/">
                <span className="self-center text-2xl font-semibold text-gray-300 whitespace-nowrap">Kamish</span>
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              {
                url.map((el) => (
                  <div>
                    <h2 className="mb-6 text-sm font-semibold uppercase text-white">{el.name}</h2>
                  
                    <ul className="text-gray-500 font-medium">
                      {
                        el.link.map((els) => (
                          <li className="mb-2"><a className="hover:underline" target='_blank' href={els.link}>{els.name}</a></li>
                        ))
                      }
                    </ul>
                  </div>
                ))
              }
              
            </div>
          </div>
          
          <hr className="my-6 sm:mx-auto border-neutral-700 lg:my-8"/>
          <p className="block text-sm sm:text-center text-gray-400">Мы не являемся аффилированным лицом компании Discord Inc.</p>
        </div>
      </footer>
    )
  }
  
  export default Footer