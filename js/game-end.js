(function ($, window, document, undefined) {
    "use strict";

    var Questions = [
        {
            question: "PATRON SAINT OF SPAIN",
            num: 1,
            answers: [
                { title: "ST JOHN", correct: false },
                { title: "ST JAMES", correct: true },
                { title: "ST PETER", correct: false },
                { title: "ST BENEDICT", correct: false }
            ]
        },
        {
            question: "WORLD’S DEEPEST LAKE",
            num: 1,
            answers: [
                { title: "LAKE BAIKAL", correct: true },
                { title: "LAKE VICTORIA", correct: false },
                { title: "LAKE SUPERIOR", correct: false },
                { title: "CASPIAN SEA", correct: false }
            ]
        },
        {
            question: "5KM IN MILES",
            num: 1,
            answers: [
                { title: "3.1", correct: true },
                { title: "10", correct: false },
                { title: "4", correct: false },
                { title: "6.2", correct: false }
            ]
        },
        {
            question: "THE GRANITE STATE",
            num: 1,
            answers: [
                { title: "NEW HAMPSHIRE", correct: true },
                { title: "MASSACHUSSETTS", correct: false },
                { title: "VERMONT", correct: false },
                { title: "MAINE", correct: false }
            ]
        },
        {
            question: "USE FOR SODIUM THIOPENTAL",
            num: 1,
            answers: [
                { title: "LAUGHING GAS", correct: false },
                { title: "LETHAL INJECTION", correct: true },
                { title: "SMELLING SALTS", correct: false },
                { title: "RUBBING ALCOHOL", correct: false }
            ]
        },
        {
            question: "COLOUR OF ALABASTER",
            num: 1,
            answers: [
                { title: "BROWN", correct: false },
                { title: "WHITE", correct: true },
                { title: "RED", correct: false },
                { title: "BLUE", correct: false }
            ]
        },
        {
            question: "DAUGHTER OF BLYTHE DANNER",
            num: 1,
            answers: [
                { title: "CLAIRE DANES", correct: false },
                { title: "GWYNETH PALTROW", correct: true },
                { title: "KATIE HOLMES", correct: false },
                { title: "NEVE CAMPBELL", correct: false }
            ]
        },
        {
            question: "THE ‘R’ IN MRI",
            num: 1,
            answers: [
                { title: "RESONANCE", correct: true },
                { title: "RADIATION", correct: false },
                { title: "REFLECTIVE", correct: false },
                { title: "REFRACTIVE", correct: false }
            ]
        },
        {
            question: "CAPITAL OF TEXAS",
            num: 2,
            answers: [
                { title: "DALLAS", correct: false },
                { title: "SAN ANTONIO", correct: false },
                { title: "HOUSTON", correct: false },
                { title: "AUSTIN", correct: true }
            ]
        },
        {
            question: "INGREDIENT IN RATATOUILLE",
            num: 2,
            answers: [
                { title: "POTATO", correct: false },
                { title: "OKRA", correct: false },
                { title: "EGGPLANT", correct: true },
                { title: "ASPARAGUS", correct: false }
            ]
        },
        {
            question: "LARGEST ISLAND OF THE WEST INDIES",
            num: 2,
            answers: [
                { title: "TRINIDAD", correct: false },
                { title: "CUBA", correct: true },
                { title: "JAMAICA", correct: false },
                { title: "PUERTO RICO", correct: false }
            ]
        },
        {
            question: "LOCATION OF NATO HEADQUARTERS",
            num: 2,
            answers: [
                { title: "LONDON", correct: false },
                { title: "GENEVA", correct: false },
                { title: "BRUSSELS", correct: true },
                { title: "THE HAGUE", correct: false }
            ]
        },
        {
            question: "SOUTH OF THE EQUATOR",
            num: 2,
            answers: [
                { title: "ETHIOPIA", correct: false },
                { title: "ZAMBIA", correct: true },
                { title: "CHAD", correct: false },
                { title: "NIGERIA", correct: false }
            ]
        },
        {
            question: "CHEMICAL ELEMENT ‘PB’",
            num: 2,
            answers: [
                { title: "GOLD", correct: false },
                { title: "POLONIUM", correct: false },
                { title: "LEAD", correct: true },
                { title: "TIN", correct: false }
            ]
        },
        {
            question: "QUEEN ELIZABETH’S DAUGHTER",
            num: 2,
            answers: [
                { title: "ANNE", correct: true },
                { title: "SARAH", correct: false },
                { title: "CAROLINE", correct: false },
                { title: "MARGARET", correct: false }
            ]
        },
        {
            question: "AUTHOR OF ‘LADY CHATTERLY’S LOVER’",
            num: 2,
            answers: [
                { title: "T.S. ELIOT", correct: false },
                { title: "JAMES JOYCE", correct: false },
                { title: "HENRY MILLER", correct: false },
                { title: "D.H. LAWRENCE", correct: true }
            ]
        },
        {
            question: "NATIONALITY OF CLAUDE DEBUSSY",
            num: 3,
            answers: [
                { title: "FRENCH", correct: true },
                { title: "SWISS", correct: false },
                { title: "BELGIAN", correct: false },
                { title: "SPANISH", correct: false }
            ]
        },
        {
            question: "BULLETPROOF VEST MATERIAL",
            num: 3,
            answers: [
                { title: "LYCRA", correct: false },
                { title: "GORE-TEX", correct: false },
                { title: "KEVLAR", correct: true },
                { title: "POLYSTYRENE", correct: false }
            ]
        },
        {
            question: "SECOND LETTER OF THE GREEK ALPHABET",
            num: 3,
            answers: [
                { title: "GAMMA", correct: false },
                { title: "DELTA", correct: false },
                { title: "BETA", correct: true },
                { title: "ALPHA", correct: false }
            ]
        },
        {
            question: "SPIRIT IN WHITE RUSSIAN",
            num: 3,
            answers: [
                { title: "GIN", correct: false },
                { title: "VODKA", correct: true },
                { title: "TEQUILA", correct: false },
                { title: "RUM", correct: false }
            ]
        },
        {
            question: "SOUTH AMERICAN CAPITAL CITY",
            num: 3,
            answers: [
                { title: "PAPRIKA", correct: false },
                { title: "MUSTARD", correct: false },
                { title: "CAYENNE", correct: true },
                { title: "SAFFRON", correct: false }
            ]
        },
        {
            question: "MALE AUTHOR",
            num: 3,
            answers: [
                { title: "S.E. HINTON", correct: false },
                { title: "J.K. ROWLING", correct: false },
                { title: "P.D. JAMES", correct: false },
                { title: "R.L. STINE", correct: true }
            ]
        },
        {
            question: "CREATOR OF THE SIMPSONS",
            num: 3,
            answers: [
                { title: "MATT STONE", correct: false },
                { title: "MATT GROENING", correct: true },
                { title: "SETH MCFARLANE", correct: false },
                { title: "MIKE JUDGE", correct: false }
            ]
        },
        {
            question: "CONSECUTIVE WIMBLEDON CHAMPION",
            num: 3,
            answers: [
                { title: "JOHN MCENROE", correct: true },
                { title: "JIMMY COLLINS", correct: false },
                { title: "ARTHUR ASHE", correct: false },
                { title: "ANDRE AGASSI", correct: false }
            ]
        },
        {
            question: "DARKEST BEER",
            num: 3,
            answers: [
                { title: "PILSNER", correct: false },
                { title: "STOUT", correct: true },
                { title: "BITTER", correct: false },
                { title: "BEER", correct: false }
            ]
        }
    ];
       

    var questions; // this will be mutated, Questions remains
    var speed1;
    var speed2;
    var speed3;
    var rowsToWin;
    var clock;
    var music = true;
    var question = 0;
    var level = 0;
    var questionsPerLevel = [0, 0, 0];
    var rows = 12;
    var score = 0;
    var stackedAnswers = 0;
    var currentCorrectAnswers = 0;
    var playing = false;
    var paused = false;
    var currentPrize = 0;
    var timeRemaining = 0;
    var cashPrizes = ["£0", "£100", "£200", "£400", "£800", "£1200", "£2400", "£5000", "£10,000", "£20,000", "£50,000", "£100,000"];

    var answerT = "" +
    "<div class=\"bar\">" +
        "<div class=\"inner\">" +
            "<% _.each(answers, function (a, i) { %>" +
                "<div class=\"answer\" data-i=\"<%- i+1 %>\" data-correct=\"<%- a.correct %>\"><%- a.title %></div>" +
            "<% }); %>" +
        "</div>" +
    "</div>";

    var optT = "" +
        "<% _.each(options, function (opt, i) { %>" +
            "<option value=\"<%- i + 1 %>\" <%- (i === (options.length - 1)) ? 'selected' : '' %>>" +
                "<%- i + 1 %>" +
            "</option>" +
        "<% }); %>";

    var tetris = {

        init: function () {
            this.bindUIActions();
            this.setLevels();
            this.setSpeed();
            this.setRowsToWin();
        },

        bindUIActions: function () {
            $(".reset").on("click", function () { tetris.clear(); });
            $(".start").on("click", function () { tetris.start(); });
            $(".speed").on("change", function () { tetris.setSpeed(); });
            $(".rows").on("change", function () { tetris.setRowsToWin(); });
            $(".spreads").on("change", function () { tetris.updateLevels(); });
            $("body").on("click", ".answer", function (e) { tetris.answerClicked(e); });
            $(window).on("keyup", function (e) { tetris.keyHit(e); });
            $(".nuke").on("click", function (e) { tetris.nukeQuestion(e); });
        },

        setLevels: function () {
            var data = {};
            var template = _.template(optT);

            data.options = _.where(Questions, { num: 1 });
            $(".spread-single").prepend(template(data));

            data.options = _.where(Questions, { num: 2 });
            $(".spread-double").prepend(template(data));

            data.options = _.where(Questions, { num: 3 });
            $(".spread-triple").prepend(template(data));

            tetris.updateLevels();
        },

        updateLevels: function () {
            questionsPerLevel[0] = $(".spread-single").val();
            questionsPerLevel[1] = $(".spread-double").val();
            questionsPerLevel[2] = $(".spread-triple").val();

            tetris.getQuestions();
        },

        getQuestions: function () {
            // get questions from master list
            questions = _.shuffle(Questions);

            _.each(questions, function (q) {
                q.level = 2;
            });
            _.each(_.first(questions, parseInt(questionsPerLevel[0], 10)), function (q) {
                q.level = 1;
            });
            _.each(questions, function (q, i) {
                if (i >= (parseInt(questionsPerLevel[0], 10) + parseInt(questionsPerLevel[1], 10))) {
                    q.level = 3;
                }
            });

            var total = (parseInt(questionsPerLevel[0], 10) + parseInt(questionsPerLevel[1], 10)) + parseInt(questionsPerLevel[2], 10);
            questions = _.first(questions, total);
        },

        setSpeed: function (e) {
            speed1 = $(".speed1").val();
            speed2 = $(".speed2").val();
            speed3 = $(".speed3").val();
        },

        setRowsToWin: function (e) {
            rowsToWin = parseInt($(".rows").val(), 10);
            var pos = Math.round((rowsToWin / rows) * 100) + "%";

            $(".marker").css({ bottom: pos });
        },

        clear: function () {
            $(".stage .bar:first").stop();

            score = 0;
            tetris.updateScore();

            question = 0;
            stackedAnswers = 0;

            paused = false;
            playing = false;

            clearInterval(clock);

            questions = _.shuffle(questions);

            $(".question .inner").text("");
            $(".question-sub .inner").text("");
            $(".stage .bar").remove();
            $(".start").text("Play");

            if (music) {
                var sound = $("#bed").get(0);
                sound.pause();
                sound.currentTime = 0;
            }
        },

        start: function () {
            if (playing) {
                // pause
                $(".start").text("Play");
                playing = false;
                paused = true;
                var time = $(".timer").text();
                time = time.split(":");
                timeRemaining = parseInt(time[1], 10);
                clearInterval(clock);
                $(".stage .bar:first").pause();
            } else {
                if (paused) {
                    tetris.timer(timeRemaining);
                    $(".stage .bar:first").resume();
                    paused = false;
                    playing = true;
                    $(".start").text("Pause");
                } else {
                    // play
                    tetris.timer(parseInt($(".time").val(), 10));
                    playing = true;
                    $(".start").text("Pause");
                    tetris.updateScore();
                    tetris.newQuestion();
                    if (music) {
                        $("#bed").get(0).play();
                    }
                }
            }
        },

        timer: function (duration) {
            var timer = duration, minutes, seconds;

            clock = setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                $(".timer").text(minutes + ":" + seconds);

                if (--timer < 0) {
                    timer = duration;
                }

                if (timer === 0) {
                    console.log("out of time");
                    tetris.gameover(true);
                }
            }, 1000);
        },

        newQuestion: function () {
            currentCorrectAnswers = 0;
            var q = questions[question];

            // if there a question left?
            if (q) {
                $(".question .inner").text(q.question);
                $(".question-sub .inner").text(q.num);
                var template = _.template(answerT);
                $(".stage").prepend(template(q));
                tetris.animateBar(q.level);
            } else {
                console.log("no more questions left, questions answered: " + question);
                tetris.gameover(true);
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
            case 32:
                answer = false;
                break;
            default:
                return false;
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
                tetris.correct(answer);
            } else {
                tetris.incorrect();
            }
        },

        incorrect: function () {
            var pos = ((stackedAnswers / rows) * 100) + "%";

            $(".stage .bar:first").stop().addClass("incorrect").animate({ bottom: pos }, 400, function () {
                if (music) {
                    var sound = $("#incorrect").get(0);
                    sound.currentTime = 0;
                    sound.play();
                }

                currentPrize = 0;
                stackedAnswers = 0;

                question++;
                tetris.newQuestion();

                $(".bar.incorrect").fadeOut("fast", function () {
                    $(this).remove();
                });

                $(".bar.winner").fadeOut("fast", function () {
                    $(this).remove();
                });
            });
        },

        correct: function (answer) {
            var pos = ((stackedAnswers / rows) * 100) + "%";

            currentPrize += 1;

            $(".stage .bar:first").stop().addClass("winner").animate({ bottom: pos }, 400, function () {
                $(this).append("<div class=\"amount\">" + cashPrizes[currentPrize] + "</div>");
            });

            if (stackedAnswers === rowsToWin) {
                tetris.gameover(true);
            } else {
                stackedAnswers += 1;
                question++;
                tetris.newQuestion();
            }

            if (music) {
                var sound = $("#correct").get(0);
                sound.currentTime = 0;
                sound.play();
            }
        },

        nukeQuestion: function () {
            $(".stage .bar:first").stop().animate({ left: "100%" }, 400, function () {
                question++;
                tetris.newQuestion();
            });
        },

        gameover: function (completed) {
            clearInterval(clock);

            $(".stage .bar").stop();

            var message = (completed === true) ? "Complete!<br>Winnings: " + cashPrizes[currentPrize] : "Game Over<br>Winnings: " + cashPrizes[currentPrize];

            $("<div>", {
                class: "message",
                html: message
            }).appendTo("body");

            setTimeout(function () {
                $(".message").fadeOut("fast", function () {
                    $(this).remove();
                    tetris.clear();
                });
            }, 5000);
        },

        updateScore: function () {
            $(".score").text(score);
        },

        animateBar: function (level) {
            var speed;

            if (level === 1) { speed = speed1; }
            if (level === 2) { speed = speed2; }
            if (level === 3) { speed = speed3; }

            var bar = $(".stage .bar:first");
            var end = ((stackedAnswers / rows) * 100) + "%";
            var time = (rows - stackedAnswers) * speed;

            $(bar).animate({ bottom: end }, time,  "linear", function () {
                tetris.incorrect();
            });
        }
    };

    // DOM Ready
    $(function () { tetris.init(); });

})(jQuery, window, document);
