import { DiscordActionRow, DiscordAttachments, DiscordButton, DiscordMessage, DiscordMessages, DiscordEmbed, DiscordEmbedField } from '@skyra/discord-components-react';
import { DiscordEmbedFields, DiscordMention, DiscordTime, DiscordEmbedDescription } from '@skyra/discord-components-react';
	
function Game() {
    const data = [
    {
        title: "Крутые игры",
        description: (
            <>Kamish предлагает множество игр, в которые вы можете играть на своём сервере! Сейчас в боте насчитывается более 12 мини-игр, а также доступны такие игры, как Мафия и Акинатор. Все остальные игры вы можете посмотреть и опробовать в самом боте!</>
        ),
        embed: (
			<DiscordMessages>
				<DiscordMessage author="Kamish" avatar="/storage/site/icon.png">
					<DiscordEmbed slot="embeds" author-image="/storage/bot/mafia/Emoji.png" author-name="Регистрация на игру">
						<DiscordEmbedFields slot="fields">
							<DiscordEmbedField fieldTitle="Участники игры" inline inline-index="1">
								<blockquote style={{ borderLeft: '2px solid #ddd', paddingLeft: '10px' }}>
							    	<DiscordMention>Kash</DiscordMention>
								</blockquote>
							</DiscordEmbedField>
						    
							<DiscordEmbedField fieldTitle="Техническая информация" inline inline-index="2">
								<blockquote style={{ borderLeft: '2px solid #ddd', paddingLeft: '10px' }}>
							        Администратор игры: <DiscordMention>Kash</DiscordMention>
							        <br />
							        Окончание регистрации: <DiscordTime>Через 10 минут</DiscordTime>
						        </blockquote>
							</DiscordEmbedField>
					    </DiscordEmbedFields>
					</DiscordEmbed>

					<DiscordAttachments slot="components">
						<DiscordActionRow>
							<DiscordButton type="success">Присоедениться</DiscordButton>
							<DiscordButton type="secondary" disabled>Начать игру</DiscordButton>
						</DiscordActionRow>
					</DiscordAttachments>
				</DiscordMessage>
			</DiscordMessages>
		)
    },
    {
        title: "Локализация",
        description: (
            <>Наша команда каждый день работает над переводом бота на другие языки! В настоящее время мы официально поддерживаем 3 языка: русский, английский и украинский. Вы можете помочь с локализацией, посетив страницу <a href='https://docs.kamish.pro/translate' target='_blank' rel='noopener noreferrer' id='Text link'>Документации</a>!</>
        ),
        embed: (
		    <DiscordMessages>
				<DiscordMessage author="Kamish" avatar="/storage/site/icon.png">
					<DiscordEmbed slot="embeds" author-image="/storage/site/icon.png" author-name="Hello, I'm Kamish bot!">
					    <DiscordEmbedDescription slot="description">
							Kamish — I'm a game bot created to decorate your server! You can view all my games via the command: <DiscordMention type="slash">help</DiscordMention>!
						</DiscordEmbedDescription>

						<DiscordEmbedFields slot="fields">
							<DiscordEmbedField fieldTitle="– Technical information" inline inline-index="1">
						        <blockquote style={{ borderLeft: '2px solid #ddd', paddingLeft: '10px' }}>
							        Bot version: 2.2.2  Releases
							        <br />
							        Serving servers: 2
							        <br />
							        Ram 2%, Ping 347 ms
						        </blockquote>
							</DiscordEmbedField>
						    
							<DiscordEmbedField fieldTitle="– Our links" inline inline-index="2">
						        <blockquote style={{ borderLeft: '2px solid #ddd', paddingLeft: '10px' }}>
							        <a href='https://discord.com/oauth2/authorize?client_id=1066975258206294096' target='_blank'>Start using me</a>
							        <br />
							        <a href='https://discord.gg/jrTvtRXeSn' target='_blank'>My technical support</a>
							        <br />
							        <a href='https://kamish.pro'>My favorite site</a>
						        </blockquote>
						    </DiscordEmbedField>
					    </DiscordEmbedFields>
					</DiscordEmbed>						
				</DiscordMessage>
			</DiscordMessages>
		)
    }
    ];

    return (
        <div className='px-5'>
            <block id='Kamish Team'>
                <text>Возможности</text>

            {
                data.map((el, id) => (
                    <div key={id} className="flex flex-col lg:flex-row container mx-auto pt-6 pb-4 info">
                        <div className="flex-1">
                            <h1 className="text-2xl md:text-4xl font-bold mb-4 max-w-2xl">{el.title}</h1>
                            <p className="text-lg md:text-xl text-gray-400 mb-4 max-w-2xl">{el.description}</p>
                        </div>

                        <div id='Embed' className='flex-1 relative lg:block hidden' style={{ width: '1%', height: '1%' }}>
					     	{el.embed}
					    </div>
                    </div>
                ))              
            }
            </block>
        </div>
    );
}

export default Game;