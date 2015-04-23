/**
 * Created by Ronald on 23-4-2015.
 */

angular.module('myApp.services', [])

.factory('Games', ['$http', function($http){

        var games = [
            {name: "game 1"},
            {name: "game 2"},
            {name: "game 3"},
            {name: "game 4"},
            {name: "game 5"}];

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
