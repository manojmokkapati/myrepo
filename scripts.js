// insert single Documents in mongodb
db.player.insertOne({
    _id: "mokkapati", age: 65, batsmanType: "right", numberOfMatches: 688, shirtNumber: 990, teams: [
        "india",
        "ap",
        "tamilNadu"
    ], playerStats: [
        {
            teamName: "india", totalScore: 274, numbeOfSixs: 7
        },
        {
            teamName: "ap", totalScore: 842, numbeOfFours: 89
        },
        {
            teamName: "tamil nadu", totalScore: 92, numbeOfWikets: 2
        }
    ]
})

// insert many documents in mongodb scripts
db.player.insertMany([
    {
        _id: "mokkapati", age: 65, batsmanType: "right", numberOfMatches: 688, shirtNumber: 990, teams: [
            "india",
            "ap",
            "tamilNadu"
        ], playerStats: [
            {
                teamName: "india", totalScore: 274, numbeOfSixs: 7
            },
            {
                teamName: "ap", totalScore: 842, numbeOfFours: 89
            },
            {
                teamName: "tamil nadu", totalScore: 92, numbeOfWikets: 2
            }
        ]
    },
    {
        _id: "ramu", age: 48, batsmanType: "left", numberOfMatches: 98, shirtNumber: 98, teams: [
            "india",
            "ap",
            "tamilNadu"
        ], playerStats: [
            {
                teamName: "india", totalScore: 70004, numbeOfSixs: 97
            },
            {
                teamName: "ap", totalScore: 904622, numbeOfFours: 809
            },
            {
                teamName: "tamil nadu", totalScore: 9022, numbeOfWikets: 89
            }
        ]
    },
    {
        _id: "jadeja", age: 42, batsmanType: "left", numberOfMatches: 98, shirtNumber: 8, teams: [
            "india",
            "ap",
            "tamilNadu"
        ], playerStats: [
            {
                teamName: "india", totalScore: 888888, numbeOfSixs: 888
            },
            {
                teamName: "ap", totalScore: 8972, numbeOfFours: 980
            },
            {
                teamName: "tamil nadu", totalScore: 10892, numbeOfWikets: 8
            }
        ]
    },
    {
        _id: "rohith", age: 42, batsmanType: "right", numberOfMatches: 28, shirtNumber: 90, teams: [
            "india",
            "ap",
            "tamilNadu"
        ], playerStats: [
            {
                teamName: "india", totalScore: 709274, numbeOfSixs: 77
            },
            {
                teamName: "ap", totalScore: 84622, numbeOfFours: 890
            },
            {
                teamName: "tamil nadu", totalScore: 98022, numbeOfWikets: 82
            }
        ]
    }
])

// find query
db.player.find() 

//find pretty query
db.player.find().pretty()

//find in query
db.player.find({teams:{$in:["india"]}})

//find or query
db.player.find({$or:[{age:{lte:22}},{_id:"manoj"}]}) 


// find and query
db.player.find({$and:[{_id:manoj},{age:22}]}) 

//find nin query
db.player.find({_id:{$nin:["manoj","dhoni"]}})

//find sort query
db.player.find().sort({numberOfMatches:1})

// find limit query
db.player.find().limit(2)

//find skip query
db.player.find().skip(2)

//find projection query
db.player.find({},{numberOfMatches:1})
db.player.find({},{numberOfMatches:0})