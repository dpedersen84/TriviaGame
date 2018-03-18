$(document).ready(function() {


    //Start Button Loaded On Page
    var startButton = $("<button>");
    startButton.addClass("button button-color")
    startButton.text("START");
    $("#main").append(startButton);

    //Click Function for Start Button
    $(startButton).on("click", function () {
    console.log("I WORK");
    $(startButton).remove();
    game.loadQuestion();
    });

    //Questions Object
    var questionObject = [
        {
        question: "What year was Terminator 2: Judgment Day released in theaters?",
        answers: [1993, 1995, 1989, 1991],
        correctAnswer: 1991,
        image: "./assets/images/correct.gif"
        },
        {
        question: "Who directed Terminator 2: Judgment Day?",
        answers: ["Steven Spielberg", "James Cameron", "Ron Howard", "M. Night Shyamalan"],
        correctAnswer: "James Cameron",
        image: "./assets/images/correct.gif"
        },
        {
        question: "Who is the future leader of the Resistance?",
        answers: ["John Connor", "James Connor", "James Cameron", "Arnold Schwarzenegger"],
        correctAnswer: "John Connor",
        image: "./assets/images/correct.gif"
        },
        {
        question: "What model is Arnold Schwarzenegger's Terminator?",
        answers: ["T-1000", "T-800", "T-20", "T-809"],
        correctAnswer: "T-800",
        image: "./assets/images/correct.gif"
        },
        {
        question: "The Artificial Intelligence that holds control of the United States' nuclear arsenal is called?",
        answers: ["Skynet", "Cyberdyne Systems", "Dyson", "CGI"],
        correctAnswer: "Skynet",
        image: "./assets/images/correct.gif"
        },
        {
        question: "Arnold Schwarzenegger won which Award at the 1992 MTV Movie Awards?",
        answers: ["Best Villain", "Best Breakthrough Performance", "Best Male Performance", "Best Female Performance"],
        correctAnswer: "Best Male Performance",
        image: "./assets/images/correct.gif"
        }
    ];

    //Game Object
    var game = {
        questions: questionObject,
        currentQuestion: 0,
        counter: 30,
        correct: 0,
        incorrect: 0,

        //Timer
        timer: function () {
            game.counter --;
            $("#timer").html(game.counter);
            if (game.counter <= 0) {
                console.log("TIME UP!");
                game.timeUp();
            }
        },

        //Load Question On Page
        loadQuestion: function () {
            timer = setInterval(game.timer,1000);
            $("#main").html('<h2>'+questionObject[game.currentQuestion].question+'</h2>');
            for(var i = 0; i < questionObject[game.currentQuestion].answers.length; i++){
                $("#main").append('<button class="answer-button" id= "button-'+i+'"data-name="'+questionObject[game.
                currentQuestion].answers[i]+'">'+questionObject[game.
                currentQuestion].answers[i]+'</button>');
            }
        },

        //Next Question Loads On Page
        nextQuestion: function () {
            game.counter = 30;
            $("#timer").html(game.counter);
            game.currentQuestion ++
            game.loadQuestion ();
        },

        //TimeUp Page Displayed
        timeUp: function () {
            clearInterval(timer); //Stop Timer
            $("#main").html('<h2>TIME UP!</h2>');
            $("#main").append('<h3>Correct Answer Is: ' + questions[game.currentQuestion]. correctAnswer + '</h3>');
        },

        //Game Over Page Displayed
        gameOver: function () {
            $("#main").html(game.correct);
            $("#main").append(game.incorrect);
        },

        clicked: function () {

        },

        //Correct Answer
        correctAnswer: function () {
            console.log("RIGHT!");
            clearInterval(timer); //Stop Timer
            game.correct ++;
        },

        //Incorrect Answer
        incorrectAnswer: function () {
            console.log("WRONG");
            clearInterval(timer); //Stop Timer
            game.incorrect ++;
        },

        //Resets Game
        newGame: function () {

        },

    };

})//END