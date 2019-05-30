// Uses https://github.com/websockets/ws

const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8080 })

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data)
    }
  })
}

let game1 =
 { "homeTeamName": "Nuggets",
   "homeTeamScore": 0,
   "awayTeamName": "Spurs",
   "awayTeamScore": 0
 }

let game2 =
  { "homeTeamName": "Warriors",
    "homeTeamScore": 0,
    "awayTeamName": "Rockets",
    "awayTeamScore": 0
  }

let game3 =
  { "homeTeamName": "Cavs",
    "homeTeamScore": 0,
    "awayTeamName": "Mavericks",
    "awayTeamScore": 0
  }

let games = [ game1, game2, game3 ]
let points = [ 1, 2, 3 ]

let randomIndex = function (list) {
  return Math.floor((Math.random()*list.length))
} 

let updateScores = function() {
  let randomGameIndex = randomIndex(games)
  let randomPoints    = points[randomIndex(points)]

  if (Math.floor(Math.random() * 2) == 0) {
    games[randomGameIndex].homeTeamScore += randomPoints
  } else {
    games[randomGameIndex].awayTeamScore += randomPoints
  }

  wss.broadcast(JSON.stringify(games))
}

setInterval(updateScores, 1000)
