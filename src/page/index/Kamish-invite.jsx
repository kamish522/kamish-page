import button from '../../components/button.jsx';

function Invite() {
    const data = {
        bot: "https://discord.com/oauth2/authorize?client_id=1066975258206294096",
        guild: "https://discord.gg/8p8NYhparv"
    }
    
    return (
        <div className='px-5'>
            <block id='Kamish Team'>
                <text>Готовы пригласить меня?</text>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-center">{
                    new button().setName('Пригласить бота').setStyle('1').setUrl(data.bot).setTarget('_blank').render()
                }
                {
                    new button().setName('Сервер поддержки').setStyle('2').setUrl(data.guild).setTarget('_blank').render()
                }</div>
		    </block>
        </div>
    )
}
    
export default Invite;