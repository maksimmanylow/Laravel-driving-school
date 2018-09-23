require("./bootstrap");

(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 48
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function() {
        $(".navbar-collapse").collapse("hide");
    });

    // Collapse the navbar when page is scrolled
    $(window).scroll(function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    });

    // Animate On Scroll
    AOS.init({
        duration: 1200
    });

    // Scroll reveal calls
    // window.sr = ScrollReveal();
    sr.reveal(
        ".sr-mh",
        {
            duration: 2000
        },
        50
    );

    sr.reveal(
        ".sr-icons",
        {
            duration: 600,
            scale: 0.3,
            distance: "0px"
        },
        200
    );
    sr.reveal(".sr-button", {
        duration: 1000,
        delay: 200
    });
    sr.reveal(
        ".sr-contact",
        {
            duration: 600,
            scale: 0.3,
            distance: "0px"
        },
        300
    );
    sr.reveal(".sr-left", {
        duration: 1000,
        delay: 200
    });
    sr.reveal(".sr-right", {
        duration: 1000,
        delay: 200
    });
    sr.reveal(".sr-bottom", {
        duration: 1000,
        delay: 200
    });

    // Magnific popup calls
    var mp_config = {
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    };

    if (window.innerWidth >= 960) {
        $(".popup-gallery-room").magnificPopup(mp_config);
        $(".popup-gallery-ploshadka").magnificPopup(mp_config);
        $(".popup-gallery-cars").magnificPopup(mp_config);
    } else {
        $(".popup-gallery-cars")
            .find("a")
            .click(function(e) {
                e.preventDefault();
            });
        $(".popup-gallery-ploshadka")
            .find("a")
            .click(function(e) {
                e.preventDefault();
            });
        $(".popup-gallery-cars")
            .find("a")
            .click(function(e) {
                e.preventDefault();
            });
    }

    $(".input-phone").inputmask({ mask: "8 (999) 999-9999" });
    //email mask
    $(".input-email").inputmask({
        mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
        greedy: false,
        onBeforePaste: function(pastedValue, opts) {
            pastedValue = pastedValue.toLowerCase();
            return pastedValue.replace("mailto:", "");
        },
        definitions: {
            "*": {
                validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
                cardinality: 1,
                casing: "lower"
            }
        }
    });

    $(".no-cut-copy-paste").bind("cut copy paste", function(e) {
        e.preventDefault();
    });
})(jQuery); // End of use strict
