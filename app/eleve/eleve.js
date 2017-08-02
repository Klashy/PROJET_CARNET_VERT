

var app= angular.module('myApp.eleve', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/eleve', {
    templateUrl: 'eleve/eleve.html',
    controller: 'eleveCtrl'
  });
}])

app.controller('eleveCtrl', ['all', function (all) {

    var self = this;
    self.mes = "test";

    GetElevesAll().then(function (response) {

        self.eleves = response.data;

        console.log('eleves: ' + self.eleves);

    });
}]);


app.service('all', function ($http) {

    self.GetElevesAll = function () {
        var url = "http://localhost:8080/rest/eleves/all";

        return $http({
            method: 'GET',
            url: url
        });
    };

});

