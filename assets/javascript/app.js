$(document).ready(function() {


    //start button
    var startButton = $("<button>");
    startButton.addClass("button button-color")
    startButton.text("START");
    $("#main").append(startButton);

    $(startButton).on("click", function () {
    console.log("I WORK");
    $(startButton).remove();
    });

    //Questions Object
    var questions = [
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
        questions: questions,
        currentQuestion: 0,
        counter: 30,
        correct: 0,
        incorrect: 0,

        timer: function () {

        },

        loadQuestion: function () {

        },

        nextQuestion: function () {

        },

        timeUp: function () {

        },

        gameOver: function () {

        },

        clicked: function () {

        },

        correctAnswers: function () {

        },

        incorrectAnswers: function () {

        },

        newGame: function () {

        },

    };

//1 question at a time
    //30 second timer per question
    //multiple choice
        //highlights question selected
        //incorrect or correct page / time out page with video? image?
            //moves to next question in 3-5 seconds


//game over screen
    //correct / incorrect total
    //new game button
        //no need to refresh page


})//END