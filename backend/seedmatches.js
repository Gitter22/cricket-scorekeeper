const mongoose = require('mongoose')
const Match = require('./models/matches')
const Player = require('./models/players')
const Team = require('./models/teams')

mongoose.connect('mongodb://localhost:27017/cricketscorekeeper')
    .then(() => {
        console.log("database connection successul")
    })
    .catch((e) => {
        console.log("Something went wrong with the database", e)
    });



const matchseed = [
]

const matchseedGenerator = async (n) => {
    let locations = ['Narendra Modi Stadium', 'Melbourne Cricket Ground', 'Eden Gardens', 'Shaheed Veer Narayan Singh International Cricket Stadium', 'Perth Stadium', 'Rajiv Gandhi International Cricket Stadium', 'Greenfield International Stadium', 'Adelaide Oval', 'M. A. Chidambaram Stadium', 'JSCA International Cricket Stadium', 'Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium', 'Docklands Stadium', 'Sydney Cricket Ground', 'Vidarbha Cricket Association Stadium', 'Barabati Stadium', 'Saifai International Cricket Stadium',
        'Eden Park', 'Arun Jaitley Stadium', 'Dr. Bhupen Hazarika Cricket Stadium', 'M. Chinnaswamy Stadium', 'Barkatullah Khan Stadium', 'Maharashtra Cricket Association Stadium', 'The Gabba', 'Kardinia Park (stadium)', 'R. Premadasa Stadium', 'Sky Stadium', 'Pallekele International Cricket Stadium', 'National Stadium', 'Wanderers Stadium', 'Wankhede Stadium', 'Green Park Stadium', 'Chandigarh Cricket Stadium',
        'Holkar Cricket Stadium', 'Lords', 'Multan Cricket Stadium', 'PCA - IS Bindra Stadium', 'Saurashtra Cricket Association Stadium', 'Kensington Oval', 'Dr.Y.S.Rajasekhara Reddy ACA–VDCA Cricket Stadium', 'Gaddafi Stadium', 'The Oval', 'Sher - e - Bangla Cricket Stadium', 'Queens Park Oval', 'Dubai International Cricket Stadium', 'Dehradun International Cricket Stadium', 'Greenfield Stadium', 'Carrara Stadium', 'Khan Shaheb Osman Ali Stadium', 'Kingsmead Cricket Ground', 'Newlands Cricket Ground', 'Bourda', 'Rose Bowl', 'Edgbaston Cricket Ground', 'WACA Ground', 'Sawai Mansingh Stadium',
        'HPCA Stadium', 'K. D. Singh Babu Stadium', 'Zohur Ahmed Chowdhury Stadium', 'Sydney Showground Stadium', 'Centurion Park', 'York Park', 'North Sydney Oval', 'Brabourne Stadium', 'Tribhuvan University International Cricket Ground', 'Queens Park',
        'Jinnah Stadium', 'Arbab Niaz Stadium', 'Mangaung Oval', 'Willowmoore Park', 'Central Broward Park', 'Sabina Park', 'Sheikh Zayed Cricket Stadium', 'McLean Park', 'Old Trafford', 'Queenstown Events Centre', 'St Georges Park Cricket Ground', 'Sylhet International Cricket Stadium', 'Headingley', 'Arnos Vale Stadium', 'Roop Singh Stadium', 'Iqbal Stadium', 'Jinnah Stadium', 'Senwes Park', 'Hagley Oval', 'Bellerive Oval', 'Riverside Ground', 'Trent Bridge', 'Quaid-e-Azam Stadium', 'Sharjah Cricket Association Stadium', 'Buffalo Park',
        'County Cricket Ground', 'Sophia Gardens', 'Sheikh Abu Naser Stadium', 'St Lawrence Ground', 'Owen Delany Park', 'Providence Stadium', 'Madhavrao Scindia Cricket Ground', 'Brian Lara Stadium', 'Niaz Stadium', 'Rawalpindi Cricket Stadium', 'P. Sara Oval', 'Shaheed Chandu Stadium', 'Ghazi Amanullah International Cricket Stadium'
    ];
    let teams = ['Chennai Super Kings', 'Delhi Capitals', 'Kolkata Knight Riders', 'Mumbai Indians', 'Punjab Kings', 'Rajasthan Royals', 'Royal Challengers Bangalore', 'Sunrisers Hyderabad', 'Ahmedabad IPL Team', 'Lucknow IPL Team', 'Adelaide Strikers', 'Brisbane Heat', 'Hobart Hurricanes',
        'Melbourne Renegades', 'Melbourne Stars', 'Perth Scorchers', 'Sydney Sixers', 'Sydney Thunder'
    ]
    for (i = 0; i < n; i++) {
        let random1 = Math.floor(Math.random() * 693) + 1
        let random2 = Math.floor(Math.random() * 693) + 1
        let team1players = await Player.find().skip(random1).limit(11)
        let team2players = await Player.find().skip(random2).limit(11)
        let location = locations[Math.floor(Math.random() * locations.length)]
        let team1 = {
            name: teams[Math.floor(Math.random() * teams.length)],
            players: team1players,
        }
        let team2 = {
            name: teams[Math.floor(Math.random() * teams.length)],
            players: team2players,
        }

        const match = await new Match({ location })
        const insertedTeams = await Team.insertMany([{
            ...team1,
            matchId: match._id
        }, {
            ...team2,
            matchId: match._id
        }])
        match.team1 = insertedTeams[0]._id;
        match.team2 = insertedTeams[1]._id;
        await match.save()

    }
}

// const seedData = async () => {
//     const matches = await Match.insertMany(matchseed)
//     console.log(matches)
// }

const clearSeed = async () => {
    await Match.deleteMany({});
    await Team.deleteMany({})
};

const runseed = async () => {
    await clearSeed()
    await matchseedGenerator(100)
}

runseed()


// let matchseed = []
// for (i = 0; i < n; i++) {
//     let team1={
//         name:
//         players:
//     }
//     let random1 = Math.floor(Math.random() * 693) + 1
//     let random2 = Math.floor(Math.random() * 693) + 1
//     let team1players = await Player.find().skip(random1).limit(11)
//     let team2players = await Player.find().skip(random2).limit(11)

//     matchseed.push({

//     }

// })