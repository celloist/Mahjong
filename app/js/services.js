/**
 * Created by Ronald on 25-4-2015.
 */

angular.module('Mahjong.services', [])

    .factory('User', function () {
        var currentUser = {
            "id": "rduren", // Avans username
            "name": "Ronald van Duren", // fullname
            "email": "rduren@avans.nl", // avans e-mail
            "nickname": "Default" // maybe filled later?
        };

        return {
            currentUser: function(){
                return currentUser;
            }
        }
    })

    .factory('Games', ['$http', function($http){

        var games = [
            {
                "id" : 1,
                "layout": "shangai", // -> 'shanghai'|'snake'|'ox'|'ram'|'dragon'|'rooster'|'monkey'
                "createdOn": "Sat Apr 20 2015 16:43:27 GMT+0200", // date + time
                "startedOn": "Sat Apr 25 2015 16:43:27 GMT+0200", // date + time
                "endedOn": "Sat Apr 27 2015 16:43:27 GMT+0200", // date + time
                "createdBy": {
                    "id": "rduren", // Avans username
                    "name": "Ronald van Duren", // fullname
                    "email": "rduren@avans.nl", // avans e-mail
                    "nickname": "Default" // maybe filled later?
                },
                "minPlayers": 2, // 35 <= x >= 1, Required number of players to start
                "maxPlayers": 22,  // 35 <= x >= 1
                "players": [
                    {
                    "id": "koosboos", // Avans username
                    "name": "Koos van Boos", // fullname
                    "email": "rduren@avans.nl", // avans e-mail
                    "nickname": "Default" // maybe filled later?
                    // Properties like score and isWinner maybe filled later
                    },
                    {
                        "id": "blabla", // Avans username
                        "name": "Blabla van Blala", // fullname
                        "email": "rduren@avans.nl", // avans e-mail
                        "nickname": "Default" // maybe filled later?
                        // Properties like score and isWinner maybe filled later
                    },
                    {
                        "id": "ssssddddd", // Avans username
                        "name": "ss van dddd", // fullname
                        "email": "rduren@avans.nl", // avans e-mail
                        "nickname": "Default" // maybe filled later?
                        // Properties like score and isWinner maybe filled later
                    }],
                "state": "open" // -> 'open'|'playing'|'finished'
            },
            {
                "id" : 2,
                "layout": "snake", // -> 'shanghai'|'snake'|'ox'|'ram'|'dragon'|'rooster'|'monkey'
                "createdOn": "Sat Apr 18 2015 16:43:27 GMT+0200", // date + time
                "startedOn": "Sat Apr 25 2015 16:43:27 GMT+0200", // date + time
                "endedOn": "Sat Apr 27 2015 16:43:27 GMT+0200", // date + time
                "createdBy": {
                    "id": "rduren", // Avans username
                    "name": "Ronald van Duren", // fullname
                    "email": "rduren@avans.nl", // avans e-mail
                    "nickname": "Default" // maybe filled later?
                },
                "minPlayers": 2, // 35 <= x >= 1, Required number of players to start
                "maxPlayers": 22,  // 35 <= x >= 1
                "players": [{
                    "id": "rduren", // Avans username
                    "name": "Ronald van Duren", // fullname
                    "email": "rduren@avans.nl", // avans e-mail
                    "nickname": "Default" // maybe filled later?
                    // Properties like score and isWinner maybe filled later
                }],
                "state": "open" // -> 'open'|'playing'|'finished'
            },
            {
                "id" : 3,
                "layout": "ox", // -> 'shanghai'|'snake'|'ox'|'ram'|'dragon'|'rooster'|'monkey'
                "createdOn": "Sat Apr 14 2015 16:43:27 GMT+0200", // date + time
                "startedOn": "Sat Apr 18 2015 16:43:27 GMT+0200", // date + time
                "endedOn": "Sat Apr 20 2015 16:43:27 GMT+0200", // date + time
                "createdBy": {
                    "id": "rduren", // Avans username
                    "name": "Ronald van Duren", // fullname
                    "email": "rduren@avans.nl", // avans e-mail
                    "nickname": "Default" // maybe filled later?
                },
                "minPlayers": 2, // 35 <= x >= 1, Required number of players to start
                "maxPlayers": 22,  // 35 <= x >= 1
                "players": [{
                    "id": "rduren", // Avans username
                    "name": "Ronald van Duren", // fullname
                    "email": "rduren@avans.nl", // avans e-mail
                    "nickname": "Default" // maybe filled later?
                    // Properties like score and isWinner maybe filled later
                }],
                "state": "finished" // -> 'open'|'playing'|'finished'
            }];

        return {
            all: function () {
                return games;
            },
            get: function(index) {
                return games[index];
            },
            insert: function(game){
                games.push(game);
            },
            remove: function(index){
                games.splice(games.indexOf(index), 1);
            },
            update: function(game, index){
                games[index] = game;
            }
        }
    }])



