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
            tag: ["designer"]
        }
    ]

    return (
        <main>
            <div className="flex flex-col items-center justify-center container mx-auto info">
                <h1 className="text-4xl md:text-5xl font-bold text-center w-full pb-10">Мои создатели</h1>
        
                <div className="flex justify-center gap-6">{   
                    data.map((person) => (
                        <div class="flex justify-center">
                            <ul class="flex flex-wrap justify-center">
                                <li><a href={person.url} target="_blank" class="info gap-4">
                                    <img class="rounded-full h-25 w-25 border-4 border-[#2a2a2a]" src={person.image}/>

                                    <div class="flex flex-col gap-3">
                                        <h4 class="font-bold text-xl">@{person.name}</h4>
                                        <p class="text-gray-300 text-sm">{person.description}</p>
                                    
                                        <div className="flex">{
                                            person.tag.map((tag) => (<button className="mr-2 text-sm font-medium tag">{tag}</button>))
                                        }</div>
                                    </div>
                                </a></li>
                            </ul>
                        </div>
                    ))
                }</div>
            </div>
        </main>
    );
}

export default Info;