(function ($, window, document, undefined) {
    "use strict";

    var questions = [
        {
            question: "What is Bruce Waynes alter-ego?",
            num: 1,
            answers: [
                { title: "Batman", correct: true },
                { title: "Spiderman", correct: false },
                { title: "He-Man", correct: false },
                { title: "Bananaman", correct: false }
            ]
        }
    ];


    var speed;
    var rowsToFail;
    var question = 0;
    var rows = 10;
    var score = 0;
    var incorrectAnswers = 0;
    var tetris = {

        init: function () {
            this.bindUIActions();
            this.setSpeed();
            this.setRowsToFail();
        },

        bindUIActions: function () {
            $(".reset").on("click", function () { tetris.clear(); });
            $(".start").on("click", function () { tetris.start(); });
            $(".speed").on("change", function () { tetris.setSpeed(); });
            $(".rows").on("change", function () { tetris.setRowsToFail(); });
            $(".answer").on("click", function (e) { tetris.answerClicked(e); });
            $(window).on("keyup", function (e) { tetris.keyHit(e); });
        },

        setSpeed: function (e) {
            speed = $(".speed").val();
        },

        setRowsToFail: function (e) {
            rowsToFail = $(".rows").val();
        },

        clear: function () {
            score = 0;
            tetris.updateScore();
        },

        start: function () {
            tetris.newQuestion();
        },

        newQuestion: function () {
            var q = questions[question];

            // if there a question left?
            if (q) {

            } else {
                tetris.gameover();
            }
        },

        keyHit: function (e) {
            var answer;
            tetris.answerChosen(answer);
        },

        answerClicked: function (e) {
            var answer;
            tetris.answerChosen(answer);
        },

        answerChosen: function (a) {

        },

        incorrect: function () {
            incorrectAnswers++;

            if (incorrectAnswers === rowsToFail) {
                tetris.gameover();
            }
        },

        correct: function () {

            score++;
            tetris.updateScore();

            tetris.newQuestion;
        },

        gameover: function () {

        },

        updateScore: function () {
            $(".score").text(score);
        }
    };

    // DOM Ready
    $(function () { tetris.init(); });

})(jQuery, window, document);
