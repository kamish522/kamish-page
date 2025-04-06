function Invite() {
    const link_bot = "https://discord.com/oauth2/authorize?client_id=1066975258206294096"
    const link_server = "https://discord.gg/8p8NYhparv"
    
    return (
      <main>
        <div className="flex flex-col items-center justify-center container mx-auto pt-23 pb-16 info">
          <div className="flex flex-col lg:flex-row gap-12">
              <h1 className="text-4xl md:text-5xl font-bold text-center w-full">Готовы пригласить меня?</h1>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6">
            <a href={link_bot} className="hover:border hover:border-[#2a2a2a] hover:bg-[#191919] bg-[#2a2a2a] px-6 py-3 rounded-md text-[20px] font-medium">Пригласить бота</a>
            <a href={link_server} className="border border-[#2a2a2a] hover:bg-[#2a2a2a] px-6 py-3 rounded-md text-[20px] font-medium">Сервер поддержки</a>
          </div>
        </div>
      </main>
    )
}
    
export default Invite;