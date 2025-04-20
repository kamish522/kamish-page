function Info() {
    const data = [
        {
            name: "Kash",
            image: "own/kash.jpg",
            description: "Крутой челик",
            url: "https://github.com/kamish522",
            tag: ["developer", "designer"]
        },{
            name: "Vertexx",
            image: "own/vertexx.jpg",
            description: "Дизайн и хорошая подруга",
            tag: ["designer", "tester"]
        }
    ]

    return (
        <main>
            <div className="flex flex-col md:items-center md:justify-center container mx-auto info">
                <h1 className="text-4xl md:text-5xl font-bold text-center w-full pb-10">Мои создатели</h1>
        
                <div className="md:flex md:justify-center md:gap-6">{   
                    data.map((person, idx) => (
                        <div key={idx} className="flex justify-center">
                            <ul className="flex flex-wrap justify-center">
                                <li>
                                    <a href={person.url} target="_blank" className="info gap-4">
                                        <div className="flex flex-row items-center gap-4">
                                            <img className="rounded-full h-20 w-20 md:h-30 md:w-30 border-4 border-[#2a2a2a]" src={person.image} alt={person.name}/>
                                            <div className="flex flex-col gap-1 md:gap-3">
                                                <h4 className="font-bold text-xl">@{person.name}</h4>
                                                <p className="text-gray-300 text-sm">{person.description}</p>
                                                <div className="flex">
                                                    {person.tag.map((tag, i) => (
                                                        <button key={i} className="mr-2 text-sm font-medium tag">{tag}</button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    ))
                }</div>
            </div>
        </main>
    );
}

export default Info;