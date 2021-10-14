const mongoose=require('mongoose')
const Match=require('./models/match')

mongoose.connect('mongodb://localhost:27017/cricketscorekeeper')
.then(()=>{
    console.log("database connection successul")
})
.catch((e)=>{
    console.log("Something went wrong with the database",e)
})

const matchseed=[
    {
    team1:{
        name:'India',
        players:['Kohli','Dhoni','Ashwin']
},
team2:{
    name:'India',
    players:['Rohit','Dhawan','Harbhajan']
},
firstInning:{
    battingTeam:'India',
    bowlingTeam:'England',
    totalRuns:50,
    totalBalls:150,
    totalWickets:7,
},
secondInning:{
    battingTeam:'England',
    bowlingTeam:'India',
    totalRuns:75,
    totalBalls:100,
    totalWickets:3,
},
},
]

const seedData=async ()=>{
const matches= await Match.insertMany(matchseed)
console.log(matches)
}

const clearSeed = async () => {
    await Match.deleteMany({});
  };
  
const runseed=async ()=>{
    await clearSeed()
    await seedData()
}

runseed()