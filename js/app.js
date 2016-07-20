/**
 * Created by Jamal12 on 7/12/2016.
 */
var app = angular.module("app", ['ngRoute']);

app.directive('project', function() {
    var directive = {
        restrict: 'E',
        templateUrl: "../js/project.html",
        scope: {
            student: "= title"
        }
    };

    directive.compile = function(element, attributes) {};

    return directive; 
});

