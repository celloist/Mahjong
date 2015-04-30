/**
 * Created by Ronald on 25-4-2015.
 */

require('angular/angular');
require('bootstrap');
require('./services.js');

// Create your app
var app = angular.module('Mahjong', ['Mahjong.services'])

        .controller('MainCtrl', function($scope, Games, User, Layouts){

        $scope.games = Games.all();

        //$scope.$watchCollection('games', function(newGames, oldGames){
        //   $scope.games = newGames;
        //});

        $scope.minPlayers = 1;
        $scope.maxPlayers = 35;
        $scope.layouts = Layouts.all();

        $scope.addGame = function(newGame) {
            console.log("test test");
            var newGame = {
                "layout": newGame.layout, // -> 'shanghai'|'snake'|'ox'|'ram'|'dragon'|'rooster'|'monkey'
                "createdOn": new Date(), // date + time
                "startedOn": new Date(), // date + time
                "endedOn": "", // date + time
               "createdBy": User.currentUser(),
               "minPlayers": newGame.minPlayers, // 35 <= x >= 1, Required number of players to start
               "maxPlayers": newGame.maxPlayers,  // 35 <= x >= 1
                "players": [User.currentUser()],
                "state": "open" // -> 'open'|'playing'|'finished'
            };
            $scope.games.push(newGame);
            console.log(newGame);
        };

        $scope.joinGame = function(gameId){

            for(i = 0; i < $scope.games.length; i++){
                if($scope.games[i].id == gameId) {
                    if ($scope.games[i].state != 'finished') {
                        if (!findUserInGame($scope.games[i])) {
                            console.log("User joined");
                            $scope.games[i].players.push(User.currentUser());
                            return;
                        } else {
                            console.log("User not joined");
                            return;
                        }
                    }
                }
            }
        };

        function findUserInGame(game){
            if(game.players.length > 0){
                for(j = 0; j < game.players.length; j++){
                    if(game.players[j].id === User.currentUser().id){
                        console.log("User found");
                        return true;
                    }
                }
                return false;
           }else{
                return false;
            }
        }
});