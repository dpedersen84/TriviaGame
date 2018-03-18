$(document).ready(function() {


    //Start Button Loaded On Page
    var startButton = $("<button>");
    startButton.addClass("button button-color")
    startButton.text("START");
    $("#main").append(startButton);

    //Click Function for Start Button
    $(startButton).on("click", function () {
    $(startButton).remove();
    game.loadQuestion();
    });

    $(document).on("click", ".answer-button", function (event) {
        game.clicked(event);
    })

    $(document).on("click", "#newGame", function () {
        game.newGame ();
    })

    //Questions Object
    var questionObject = [
        {
        question: "What year was Terminator 2: Judgment Day released in theaters?",
        answers: [1993, 1995, 1989, 1991],
        correctAnswer: 1991,
        },
        {
        question: "Who directed Terminator 2: Judgment Day?",
        answers: ["Steven Spielberg", "James Cameron", "Ron Howard", "M. Night Shyamalan"],
        correctAnswer: "James Cameron",
        },
        {
        question: "Who is the future leader of the Resistance?",
        answers: ["John Connor", "James Connor", "James Cameron", "Arnold Schwarzenegger"],
        correctAnswer: "John Connor",
        },
        {
        question: "What model is Arnold Schwarzenegger's Terminator?",
        answers: ["T-1000", "T-800", "T-20", "T-809"],
        correctAnswer: "T-800",
        },
        {
        question: "The Artificial Intelligence that holds control of the United States' nuclear arsenal is called?",
        answers: ["Skynet", "Cyberdyne Systems", "Dyson", "CGI"],
        correctAnswer: "Skynet",
        },
        {
        question: "Arnold Schwarzenegger won which Award at the 1992 MTV Movie Awards?",
        answers: ["Best Villain", "Best Breakthrough Performance", "Best Male Performance", "Best Female Performance"],
        correctAnswer: "Best Male Performance",
        }
    ];

    //Game Object
    var game = {
        questions: questionObject,
        currentQuestion: 0,
        counter: 30,
        correct: 0,
        incorrect: 0,
        unanswered: 0,

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
            
            for(var i = 0; i < questionObject[game.currentQuestion].answers.length; i++) {
                
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
            game.unanswered++;
            $("#main").html('<h2>TIME UP!</h2>');
            $("#main").append('<img id="theImg" src="./assets/images/timeup.gif" "</img>')
            $("#main").append('<h3>Correct Answer Is: ' + questionObject[game.currentQuestion].correctAnswer + '</h3>');
            if(game.currentQuestion==questionObject.length-1) {
                setTimeout(game.gameOver, 3*1000);
            }else {
                setTimeout(game.nextQuestion, 3*1000);
            }
        },

        //Game Over Page Displayed
        gameOver: function () {
            clearInterval(timer);
            $("#main").html("<h2>GAME OVER!</h2>");
            $("#main").append('<img id="theImg" src="./assets/images/gameover.gif" "</img>')
            $("#main").append("<h3>Correct Answers: " + game.correct + "</h3>");
            $("#main").append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
            $("#main").append("<h3>Unanswered Questions: " + game.unanswered + "</h3>")
            $("#main").append("<button id='newGame'>New Game</button>");
        },

        //Answer Click Event
        clicked: function (event) {
            clearInterval (timer);
            if ($(event.target).data("name")==questionObject[game.currentQuestion].correctAnswer) {
                game.correctlyAnswered();
            } else {
                game.incorrectlyAnswered();
            }
        },

        //Correct Answer
        correctlyAnswered: function () {
            console.log("RIGHT!");
            clearInterval(timer); //Stop Timer
            game.correct ++;
            $("#main").html('<h2>CORRECT!</h2>');
            $("#main").append('<img id="theImg" src="./assets/images/correct.gif" "</img>')
            if(game.currentQuestion==questionObject.length-1) {
                setTimeout(game.gameOver, 3*1000);
            }else {
                setTimeout(game.nextQuestion, 3*1000);
            }
        },

        //Incorrect Answer
        incorrectlyAnswered: function () {
            console.log("WRONG");
            clearInterval(timer); //Stop Timer
            game.incorrect ++;
            $("#main").html('<h2>INCORRECT!</h2>');
            $("#main").append('<img id="theImg" src="./assets/images/wrong.gif" "</img>')
            $("#main").append('<h3>Correct Answer Is: ' + questionObject[game.currentQuestion]. correctAnswer + '</h3>');
            if(game.currentQuestion==questionObject.length-1) {
                setTimeout(game.gameOver, 3*1000);
            }else {
                setTimeout(game.nextQuestion, 3*1000);
            }
        },

        //Resets Game
        newGame: function () {
            game.currentQuestion = 0;
            game.counter = 30;
            game.correct = 0;
            game.incorrect = 0;
            game.unanswered = 0;
            game.loadQuestion();
        },

    };

})//END