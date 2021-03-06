/**
 * Created by Jamal12 on 7/12/2016.
 */
var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when("/",
            {
            templateUrl: "../views/aboutPage.html",
            controller: "aboutPage"
            })
        .when("/portfolio",
            {
            templateUrl: "../views/Portfolio%20Page.html",
            controller: "Portfolio"
            })
        .when("/contact",
            {
                templateUrl: "../views/ContactMe.html",
                controller: "contactPage"
            })
        .otherwise({
            redirectTo: "/"
        });

});

