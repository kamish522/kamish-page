function Info() {
    const data = [
        {
            name: "Kash",
            image: "/storage/site/avatar/kash.jpg",
            description: "JavaScript developer",
            url: "https://github.com/kamish522",
            tag: ["Owner", "Developer"]
        },{
            name: "Vertexx",
            image: "/storage/site/avatar/vertexx.jpg",
            description: "Project assistant",
            tag: ["Friend", "Helper"]
        }
    ]

    return (
        <div className='px-3 md:px-5'>
            <block id='Kamish Team'>
                <text>Мои создатели</text>
        
                <div className="flex justify-center" id='card-div'>   
                    <ul className="flex flex-wrap justify-center md:gap-6">{
                        data.map((person, id) => (
                            <li key={id}>
                                <a href={person.url} target="_blank" id='block'>
                                    <div className="flex items-center gap-3">
                                        <img className="rounded-full h-20 w-20 md:h-25 md:w-25 border-3 border-[#2a2a2a]" src={person.image} alt={person.name}/>

                                        <div className="flex flex-col gap-1 md:gap-3 w-50 h-30">
                                            <h1 className="font-bold text-xl">@{person.name}</h1>
                                            <p className="text-gray-300 text-sm">{person.description}</p>
                                                
                                            <div className="flex">
                                                {person.tag.map((tag, id) => (
                                                    <tag key={id} className="mr-2 text-sm font-medium">{tag}</tag>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        ))
                    }</ul>     
                </div>
            </block>
        </div>
    );
}

export default Info;