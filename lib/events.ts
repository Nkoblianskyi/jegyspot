export type Event = {
    id: number
    title: string
    date: string
    venue: string
    category: string
    priceFrom: number
    image: string
}

export const allEvents: Event[] = [
    {
        id: 1,
        title: "Sziget Fesztivál 2026",
        date: "2026. augusztus 5–11.",
        venue: "Óbudai-sziget, Budapest",
        category: "Fesztivál",
        priceFrom: 31900,
        image: "/images/sziget-2026.jpg",
    },
    {
        id: 2,
        title: "Rammstein – Budapest",
        date: "2026. július 8.",
        venue: "Puskás Aréna, Budapest",
        category: "Koncert",
        priceFrom: 19500,
        image: "/images/rammstein-2026.jpg",
    },
    {
        id: 3,
        title: "Coldplay – Music of the Spheres World Tour",
        date: "2026. június 14.",
        venue: "Puskás Aréna, Budapest",
        category: "Koncert",
        priceFrom: 22000,
        image: "/images/coldplay-2026.jpg",
    },
    {
        id: 4,
        title: "Budapest Jazz Fesztivál",
        date: "2026. augusztus 19–23.",
        venue: "Városliget, Budapest",
        category: "Fesztivál",
        priceFrom: 5500,
        image: "/images/jazz-2026.jpg",
    },
    {
        id: 5,
        title: "Fradi – Ferencváros vs MOL Fehérvár",
        date: "2026. március 21.",
        venue: "Groupama Aréna, Budapest",
        category: "Sport",
        priceFrom: 1800,
        image: "/images/fradi-2026.jpg",
    },
    {
        id: 6,
        title: "Ed Sheeran – +-=÷× Tour",
        date: "2026. május 30.",
        venue: "Puskás Aréna, Budapest",
        category: "Koncert",
        priceFrom: 14900,
        image: "/images/ed-sheeran-2026.jpg",
    },
    {
        id: 7,
        title: "VOLT Fesztivál 2026",
        date: "2026. június 25–28.",
        venue: "Sopron",
        category: "Fesztivál",
        priceFrom: 24900,
        image: "/images/volt-2026.jpg",
    },
    {
        id: 8,
        title: "Vígszínház – Cyrano de Bergerac",
        date: "2026. március 15.",
        venue: "Vígszínház, Budapest",
        category: "Színház",
        priceFrom: 2800,
        image: "/images/vigszinhaz-2026.jpg",
    },
    {
        id: 9,
        title: "Formula E – Budapest ePrix",
        date: "2026. május 16.",
        venue: "Budapest City Circuit",
        category: "Sport",
        priceFrom: 9500,
        image: "/images/formula-e-2026.jpg",
    },
    {
        id: 10,
        title: "Nemzeti Filharmonikusok – Húsvéti Gála",
        date: "2026. április 5.",
        venue: "Müpa Budapest",
        category: "Egyéb",
        priceFrom: 3900,
        image: "/images/filharmonikusok-2026.jpg",
    },
    {
        id: 11,
        title: "Budapest Open – WTA 250 Tenisztorna",
        date: "2026. július 18–26.",
        venue: "Magyar Tenisz Szövetség, Budapest",
        category: "Sport",
        priceFrom: 4200,
        image: "/images/tennis-2026.jpg",
    },
    {
        id: 12,
        title: "Metallica – M72 World Tour",
        date: "2026. szeptember 3.",
        venue: "Puskás Aréna, Budapest",
        category: "Koncert",
        priceFrom: 21000,
        image: "/images/metallica-2026.jpg",
    },
]

export function getEventById(id: number) {
    return allEvents.find((e) => e.id === id)
}

const eventDescriptions: Record<number, string> = {
    1: "A Sziget Fesztivál Európa egyik legnagyobb többnapos zenei és kulturális fesztiválja. Az Óbudai-szigeten minden évben százezrek várják a világ sztárjait és a hazai kedvenceket. 2026-ban is várt programok, különleges színpadok és felejthetetlen hangulat várja a látogatókat.",
    2: "A Rammstein a világ egyik legnagyobb metálzenekara. Budapesten a Puskás Arénában egyetlen estén koncertelnek – masszív show, ikonikus dalok és lenyűgöző pirotechnika. A jegyek gyorsan fogynak.",
    3: "A Coldplay Music of the Spheres világturnéján Budapesten is megáll. A brit együttes színes, látványos showja és a legnagyobb slágerek egy életre szóló koncertélményt nyújtanak.",
    4: "A Budapest Jazz Fesztivál a városligeti zenei nyár egyik kiemelkedő rendezvénye. Nemzetközi és hazai jazz sztárok, kellemes hangulat és sokféle stílus várja a rajongókat.",
    5: "A Ferencváros és a MOL Fehérvár NB I mérkőzése mindig izgalmas. A Groupama Arénában élőben élheti át a derbi hangulatot.",
    6: "Ed Sheeran +-=÷× turnéján akusztikus és elektronikus dalok keverékét hallhatja a közönség. A Puskás Aréna óriási kapacitásával ez az egyik legnagyobb koncert az évben.",
    7: "A VOLT Fesztivál Sopronban rock, pop és alternatív zenei sztárokkal várja a látogatókat. Több napos kempingezés, színpadok és programok minden ízlésnek.",
    8: "A Vígszínház Cyrano de Bergerac előadása a klasszikus dráma modern megközelítésben. Budapest egyik legkedveltebb színházában élvezhető előadás.",
    9: "A Formula E Budapest ePrix a városi pályán zajlik. Elektromos autók, izgalmas verseny és ünnepi hangulat egy helyen.",
    10: "A Nemzeti Filharmonikusok Húsvéti Gálája a Müpa Budapesten klasszikus zenei élményt kínál. Ünnepi hangulatban kiváló előadók és emblematikus művek.",
    11: "A Budapest Open WTA 250 tenisztorna a magyar tenisz egyik fő eseménye. Nemzetközi sztárok játszanak a magyar színekben rendezett versenyen.",
    12: "A Metallica M72 World Tour két estés koncertformátumban jön Budapestre. A metal ikonok teljes erőbedobással lépnek színpadra a Puskás Arénában.",
}

export function getEventDescription(eventId: number): string {
    return eventDescriptions[eventId] ?? "Élvezze az eseményt a kiválasztott partner által kínált feltételek szerint. Részletekért kattintson az Ajánlat gombra."
}

export const partners = [
    { name: "Jegy.hu", url: "https://jegy.hu", specialty: "Koncert, Sport, Fesztivál" },
    { name: "Eventim HU", url: "https://www.eventim.hu", specialty: "Koncert, Színház, Sport" },
    { name: "StubHub", url: "https://stubhub.com", specialty: "Másodpiac" },
    { name: "Viagogo", url: "https://viagogo.com", specialty: "Koncert, Sport, Fesztivál" },
    { name: "Tixa", url: "https://tixa.hu", specialty: "Fesztivál, Helyi" },
    { name: "Jegymester", url: "https://jegymester.hu", specialty: "Koncert, Sport, Kultúra" },
]
