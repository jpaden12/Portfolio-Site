/**
 * Created by Jamal12 on 7/19/2016.
 */
app.config(['$routeProvider',
    function config($routeProvider) {

        $routeProvider
            .when('/', {
            templateUrl: '../views/Landing%20Page.html'
            })
            .when('/resume', {
            templateUrl: '../Jamals_Resume.pdf'
            })
            .when('/portfolio', {
            templateUrl: '../views/Portfolio%20Page.html'
            })
            .when('/about', {
            templateUrl: '../views/About%20Page.html'
            })
            .when('/contact', {
            templateUrl: '../views/Contact.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
]);
