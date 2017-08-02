'use strict';

var app= angular.module('myApp.classe', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/classe', {
    templateUrl: 'classe/classe.html',
    controller: 'classeCtrl'
  });
}])


app.controller('classeCtrl', ['ServiceClasse', function (ServiceClasse) {

    var self = this;
    self.mes = "test";

    GetClassesAll().then(function (response) {

        self.classes = response.data;

        console.log('eleves: ' + self.classes);

    });
}]);



app.service('ServiceClasse', function ($http) {

    self.GetClassesAll = function () {
        var url = "http://localhost:8080/rest/classes/all";

        return $http({
            method: 'GET',
            url: url
        });
    };

});

