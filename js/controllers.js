/**
 * Created by Jamal12 on 7/15/2016.
 */
app.controller('Portfolio', function($scope) {
    

        $scope.projects = [
            
            {
                picture: null,
                title: "MATLAB Motion Detector", 
                description: "This is a motion detector that was created using an Arduino Uno and programmed using MATLAB." +
                    "The attatched photoresistor detected light at certain time intervals, and an algorithm detected whether motion occurred."
                    + "This was a final project for my Computing for Engineers class.",
                date: "March 2015 - May 2015",
                site: "https://github.com/jpaden12/MATLAB-Motion-Detector"

            },
            {
                picture: null,
                title: "Project Wind Waker",
                description: "A level from The Legend of Zelda: Wind Waker recreated on Oculus Rift and " +
                    "controlled with two Myo armbands." +
                    "I helped to script the behavior of enemies in C# and also modeled some of the envornmental assets" +
                    "using Blender. This project won 'Best Hardware Hack' at RevolutionUC.",
                date: "May 2015",
                site: "link"
            },
            {
                picture: null,
                title: "Voter Participation Twitter Bot", 
                description: "A Twitter bot that seeks out users tweeting about politicl topics and replies to them " +
                "telling them how to register to vote. ",
                date: "October 2015 - November 2015",
                site: "link"
            },
            {
                picture: null,
                title: "Rock Paper Scissors",
                description: "A basic Rock, Paper, Scissors game created in Python. The EasyGUI module was utilized to create " +
                "a simple user interface",
                date: "July 2015-October 2015", 
                site: "link"
            }, 
            {
                picture: null, 
                title: "Java Address Book", 
                description: "An address book programmed in Java as a final project for my Computer Science II class.", 
                date: "April 2016-May 2016", 
                site: "link"
            }
        ]
    });

app.controller('landingPage', function($scope) {

});

app.controller('aboutPage', function($scope) {
    
});

app.controller('contactPage', function($scope) {

    $scope.message = "The routing still works!";
});