/**
 * Created by Ronald on 25-4-2015.
 */

require('angular/angular');
require('bootstrap');
require('./services.js');

// Create your app
var app = angular.module('Mahjong', ['Mahjong.services'])

        .controller('MainCtrl', function($scope, Games, User){

        $scope.games = Games.all();

        //$scope.$watchCollection('games', function(newGames, oldGames){
        //   $scope.games = newGames;
        //});

        $scope.minPlayers = 1;
        $scope.maxPlayers = 35;
        $scope.layouts = ["ox", "snake", "shanghai", "ram", "dragon", "rooster", "monkey"];

        $scope.addNewGame = function (input) {
            var newGame = {
                "layout": input.layout, // -> 'shanghai'|'snake'|'ox'|'ram'|'dragon'|'rooster'|'monkey'
                "createdOn": new Date(), // date + time
                "startedOn": new Date(), // date + time
                "endedOn": "", // date + time
                "createdBy": User.currentUser(),
                "minPlayers": input.minPlayers, // 35 <= x >= 1, Required number of players to start
                "maxPlayers": input.maxPlayers,  // 35 <= x >= 1
                "players": [User.currentUser()],
                "state": "open" // -> 'open'|'playing'|'finished'
            };
            $scope.games.push(newGame);
        }
});