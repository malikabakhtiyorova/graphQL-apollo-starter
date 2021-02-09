const users = [
    {id: 1, username: 'aisha', age: 5},
    {id: 2, username: 'osiyo', age: null},
    {id: 3, username: 'asmo', age: null},
    {id: 4, username: 'rumayniso', age: null},
    {id: 5, username: 'hafiza', age: null},
]

const tweets = [
    {id: 1, message: 'hello',date: '03:00 05.02.21', from:1, to: 2},
    {id: 2, message: 'hi', date: '23:40 02.02.21', from:1, to: 2},
    {id: 3, message: 'message',date: '12:00 15.02.21', from:2, to: 1},
    {id: 4, message: 'apple',date: '03:30 10.02.21',  from:2, to: 1},
    {id: 5, message: 'banana',date: '05:00 8.02.21',  from:2, to: 1}
]

const followers = [
    {id: 1, fw:5, fin: 3},
    {id: 2, fw:4, fin: 5},
    {id: 3, fw:1, fin: 4},
    {id: 4, fw:3, fin: 2},
    {id: 5, fw:2, fin: 1}
]

module.exports = {
    users,
    tweets,
    followers,
}