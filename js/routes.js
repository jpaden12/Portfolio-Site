/**
 * Created by Jamal12 on 7/19/2016.
 */
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/",
            {
            templateUrl: "../views/Landing%20Page.html",
            controller: "landingPage"
            })
        .when("/portfolio",
            {
            templateUrl: "../views/Portfolio%20Page.html",
            controller: "controller"
            })
        .when("/resume",
            {
                templateUrl: "../Jamals_Resume.pdf",
                controller: "resume"
            })
        .when("/contact",
            {
                templateUrl: "../views/ContactMe.html",
                controller: "contactPage"
            })
        .otherwise({
            redirectTo: "/"
        });

    $locationProvider.html5Mode(true);

});




