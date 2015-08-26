(function ($, window, document, undefined) {
    "use strict";

    var starter = {

        init: function () {
            this.bindUIActions();
        },

        bindUIActions: function () {
            $(".btn").on("click", function (e) { starter.sayHello(e); });
        },

        windowLoaded: function () {
            console.log("Loaded");
        },

        windowResized: function () {
            console.log("Resized");
        },

        windowScrolled: function () {
            console.log("Scrolled");
        },

        sayHello: function (e) {
            var button = $(e.currentTarget);
            alert("Hello from " + button);
        }

    };

    // DOM Ready
    $(function () { starter.init(); });
    // Images Loaded
    $(window).load(function () { starter.windowLoaded(); });
    // Window Resized (smart debounced event)
    $(window).resize(_.debounce(function () { starter.windowResized(); }, 200));
    // Window Scrolled
    $(window).on("scroll", function () { starter.windowScrolled(); });

})(jQuery, window, document);
