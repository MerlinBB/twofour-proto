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
        },
        {
            question: "Letters",
            num: 2,
            answers: [
                { title: "A", correct: true },
                { title: "2", correct: false },
                { title: "C", correct: true },
                { title: "7", correct: false }
            ]
        },
        {
            question: "Numbers",
            num: 3,
            answers: [
                { title: "9", correct: true },
                { title: "2", correct: true },
                { title: "C", correct: false },
                { title: "7", correct: true }
            ]
        }
    ];



    var speed;
    var rowsToFail;
    var question = 0;
    var rows = 10;
    var score = 0;
    var incorrectAnswers = 0;
    var currentCorrectAnswers = 0;

    var answerT = "" +
    "<div class=\"bar\">" +
        "<div class=\"inner\">" +
            "<% _.each(answers, function (a, i) { %>" +
                "<div class=\"answer\" data-i=\"<%- i+1 %>\" data-correct=\"<%- a.correct %>\"><%- a.title %></div>" +
            "<% }); %>" +
        "</div>" +
    "</div>";

    var tetris = {

        init: function () {
            questions = _.shuffle(questions);
            this.bindUIActions();
            this.setSpeed();
            this.setRowsToFail();
        },

        bindUIActions: function () {
            $(".reset").on("click", function () { tetris.clear(); });
            $(".start").on("click", function () { tetris.start(); });
            $(".speed").on("change", function () { tetris.setSpeed(); });
            $(".rows").on("change", function () { tetris.setRowsToFail(); });
            $("body").on("click", ".answer", function (e) { tetris.answerClicked(e); });
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

            question = 0;
            incorrectAnswers = 0;

            questions = _.shuffle(questions);

            $(".question .inner").text("");
            $(".question-sub .inner").text("");
            $(".stage").empty();
        },

        start: function () {
            tetris.updateScore();
            tetris.newQuestion();
        },

        newQuestion: function () {
            var q = questions[question];

            // if there a question left?
            if (q) {
                $(".question .inner").text(q.question);
                $(".question-sub .inner").text(q.num);
                var template = _.template(answerT);
                $(".stage").prepend(template(q));
                tetris.animateBar();
            } else {
                tetris.gameover();
            }
        },

        keyHit: function (e) {
            var answer;

            switch (e.keyCode) {
            case 49: // 1
            case 65: // a
                answer = 1;
                break;

            case 50: // 2
            case 83: // s
                answer = 2;
                break;

            case 51: // 3
            case 68: // d
                answer = 3;
                break;

            case 52: // 4
            case 70: // f
                answer = 4;
                break;
            }

            if (answer) {
                tetris.answerChosen(answer);
            }
        },

        answerClicked: function (e) {
            var answer = $(e.currentTarget).data("i");
            tetris.answerChosen(answer);
        },

        answerChosen: function (i) {
            var answer = $(".answer:nth-child(" + i + ")");
            if ($(answer).data("correct")) {
                $(answer).addClass("correct");
                tetris.correct();
            } else {
                tetris.incorrect();
            }
        },

        incorrect: function () {
            if (incorrectAnswers === rowsToFail) {
                tetris.gameover();
            } else {
                var pos = (incorrectAnswers * 10) + "%";
                $(".stage .bar:first").stop().animate({ bottom: pos }, 400).addClass("incorrect");

                incorrectAnswers += 1;

                question++;
                tetris.newQuestion();
            }
        },

        correct: function () {
            var q = questions[question];

            currentCorrectAnswers += 1;

            if (currentCorrectAnswers === q.num) {
                // all answers given - next
                score++;
                tetris.updateScore();

                $(".stage .bar:first").stop().animate({ left: "100%"}, 400, function () {
                    $(this).remove();
                    question++;
                    tetris.newQuestion();
                });
            } else {
                // there's still more to be done
            }
        },

        gameover: function () {

        },

        updateScore: function () {
            $(".score").text(score);
        },

        animateBar: function () {
            var bar = $(".stage .bar:first");
            var end = (incorrectAnswers * 10) + "%";
            var time = (rows - incorrectAnswers) * speed;

            console.log(end);

            $(bar).animate({ bottom: end }, time,  "linear", function () {
                tetris.incorrect();
            });
        }
    };

    // DOM Ready
    $(function () { tetris.init(); });

})(jQuery, window, document);
