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

//update query
db.player.updateOne({_id:"dhoni"},{$set:{age:99}})
//update or query
db.player.updateMany({$or:[{_id:"manoj"},{_id:"sai"},{_id:"nattu"}]},{$set:{batsmanType:"left"}})
//update and query
db.player.updateMany({$and:[{age:{$gte:22}},{teams:{$in:["india"]}}]},{$set:{numberOfSixs:10}})

// update and or 
db.player.updateMany({$or:[{$and:[{shirtNumber:{$gt:10}},{teams:"india"}]},{$and:[{shirtNumber:{$lt:10}},{teams:"ap"}]}]},{$set:{numberOfSixs:0}})

//find sort query
db.player.find().sort({numberOfMatches:1})

// find limit query
db.player.find().limit(2)

//find skip query
db.player.find().skip(2)

//find projection query
db.player.find({},{numberOfMatches:1})
db.player.find({},{numberOfMatches:0})


db.student.insertMany([{_id:2,name:"giri",gendar:"male",department:"ece",place:"tpt",age:27,hobbies:"books"},
{_id:3,name:"swetha",gendar:"female",department:"ece",place:"nlr",age:21,hobbies:"chatting"},
{_id:4,name:"vikram",gendar:"male",department:"cse",place:"chennai",age:23,hobbies:"runing"},
{_id:5,name:"suma",gendar:"female",department:"ece",place:"nlr",age:22,hobbies:"reading"},
{_id:6,name:"vishnu",gendar:"male",department:"ece",place:"hyd",age:24,hobbies:"flirting"},
{_id:7,name:"harshitha",gendar:"female",department:"cse",place:"tpt",age:25,hobbies:"walking"},
{_id:8,name:"ruchitha",gendar:"female",department:"cse",place:"nyp",age:21,hobbies:"cooking"},
{_id:9,name:"ravi",gendar:"male",department:"mech",place:"bnglr",age:25,hobbies:"bloging"},
{_id:10,name:"nani",gendar:"male",department:"eee",place:"nlr",age:24,hobbies:"acting"},
{_id:11,name:"sireesha",gendar:"female",department:"it",place:"chennai",age:30,hobbies:"roming"},
{_id:12,name:"vandana",gendar:"female",department:"civil",place:"nyp",age:22,hobbies:"cricket"},
{_id:13,name:"jayanth",gendar:"male",department:"cse",place:"tpt",age:26,hobbies:"cheating"},
{_id:14,name:"lakshmi",gendar:"female",department:"cse",place:"nyp",age:28,hobbies:"chatting"},
{_id:15,name:"bhargav",gendar:"male",department:"cse",place:"nyp",age:25,hobbies:"drinking"},
{_id:16,name:"reddy",gendar:"male",department:"ece",place:"tpt",age:27,hobbies:"flirting"},
{_id:17,name:"gopi",gendar:"male",department:"mech",place:"nyp",age:22,hobbies:"runing"},
{_id:18,name:"bhavana",gendar:"female",department:"cse",place:"hyd",age:21,hobbies:"coding"},
{_id:19,name:"revanth",gendar:"male",department:"ece",place:"tpt",age:28,hobbies:"books"},
{_id:20,name:"yamini",gendar:"female",department:"cse",place:"nlr",age:19,hobbies:"drinking"},
{_id:21,name:"suhash",gendar:"male",department:"ece",place:"tpt",age:24,hobbies:"cooking"},])