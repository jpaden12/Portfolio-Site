/**
 * Created by Jamal12 on 7/12/2016.
 */
var app = angular.module('app', ['ngRoute']);

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

app.config(function($routeProvider) {
    $routeProvider
        .when("/",
            {
            templateUrl: "../views/Landing%20Page.html",
            controller: "landingPage"
            })
        .when("/portfolio",
            {
            templateUrl: "../views/Portfolio%20Page.html",
            controller: "Portfolio"
            })
        .when("/contact",
            {
                templateUrl: "ContactMe.html",
                controller: "contactPage"
            })
        .when("/about",
            {
                templateUrl: "../views/aboutPage.html",
                controller: "aboutPage"
            })
        .otherwise({
            redirectTo: "/"
        });

});

