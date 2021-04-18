const team = { //Create an empty team object.
    _players: [{ //  Add _players property and a _games property that are both initialized to empty arrays.
        firstName: 'Pablo', //Populate the empty array that corresponds to the _players key in your team object with three actual players. 
        lastName: 'Sanchez',
        age: 27
      },
      {
        firstName: 'Jordi',
        lastName: 'Alba',
        age: 39
      },
      {
        firstName: 'Neto',
        lastName: 'Murara',
        age: 31
      }], 
    _games: [{ //Populate the empty array that corresponds to the _games key in your object with three actual games. 
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
    },
    {
        opponent: 'Panathinaikos',
        teamPoints: 43,
        opponentPoints: 21
    },
    {
        opponent: 'Alba Berlin',
        teamPoints: 37,
        opponentPoints: 19
    }],
    get players() { //Create getter methods for your _players without setters
        return this._players;
    },
    get games() { //Create getter methods for your _games without setters
        return this._games;
    },
    addPlayer(firstName, lastName, age) { //Add a method addPlayer to your team object. This method should take in three parameters: firstName, lastName, and age. It should create a player object, and add them to the team‘s players array.
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
         this.players.push(player);
    },
    addGame(opponentName, teamPoints, opponentPoints) { //Add a similar method for recording game results called addGame 
        let game = {
            opponentName: opponentName,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
            };
     this.games.push(game);
        }
};
team.addPlayer( 'Steph', 'Curry', 28); 
team.addPlayer( 'Lisa', 'Leslie', 44);
team.addPlayer( 'Bugs', 'Bunny', 76);

team.addGame('Juventus', 5, 3);
team.addGame('Real Madrid', 1, 4);
team.addGame('Bayern', 3, 2); 
console.log(team._games);
console.log(team._players);