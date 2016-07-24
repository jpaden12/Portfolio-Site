/**
 * Created by Jamal12 on 7/15/2016.
 */
app.controller('controller', function($scope) {

        $scope.matlab = {
            title: "MATLAB Motion Detector",
            description: "link",
            date: "something"
        };

        $scope.projects = [
            
            {
                picture: null,
                title: "MATLAB Motion Detector", 
                description: "A Motion detector created with an Arduino Uno and Programmed with " +
                'MATLAB. ',
                date: "March 2015 - May 2015",
                link: "link"

            },
            {
                picture: null,
                title: "Project Wind Waker",
                description: "A level from The Legend of Zelda: Wind Waker recreated on Oculus Rift and " +
                    "controlled with two Myo armbands. This project won Best Hardware Hack at RevolutionUC",
                date: "May 2015",
                link: "link"
            },
            {
                picture: null,
                title: "Voter Participation Twitter Bot", 
                description: "A Twitter bot that seeks out users tweeting about politicl topics and replies to them " +
                "telling them how to register to vote. ",
                date: "October 2015 - November 2015",
                link: "link"
            },
            {
                picture: null,
                title: "Rock Paper Scissors",
                description: "A basic Rock, Paper, Scissors game created in Python. The EasyGUI module was utilized to create " +
                "a simple user interface",
                date: "July 2015-October 2015", 
                link: "link"
            }, 
            {
                picture: null, 
                title: "Java Address Book", 
                description: "An address book programmed in Java as a final project for my Computer Science II class.", 
                date: "April 2016-May 2016", 
                link: "link"
            }
        ]
    });

app.controller('landingPage', function($scope) {

});

app.controller('resume', function($scope) {

});

app.controller('contactPage', function($scope) {

    $scope.message = "The routing still works!";
});