$(document).ready(function() {
    "use strict";

    // Anchor Smooth Scroll
    $('body').on('click', '.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 80)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // Video Lightbox
    $('.swipebox-video').swipebox();

    // Scrollspy
    $('body').scrollspy({
        target: ".navbar",
        offset: 105
    })

    // Stellar
    $.stellar({
        horizontalOffset: 50,
        verticalOffset: 50,
        responsive: true
    });

    // Fixed Header
    $(window).scroll(function() {
        var value = $(this).scrollTop();
        if (value > 100)
            $(".navbar-inverse").css("background", "#d8d8d8");
        else
            $(".navbar-inverse").css("background", "transparent");
    });

    // Product Feature
    $('.hl-point1 .trigger').on('click', function() {
        $('.hl-point1 .h1-point-info').toggleClass('active');
        $('.hl-point2 .h1-point-info').removeClass('active');
        $('.hl-point3 .h1-point-info').removeClass('active');
    });

    $('.hl-point2 .trigger').on('click', function() {
        $('.hl-point2 .h1-point-info').toggleClass('active');
        $('.hl-point1 .h1-point-info').removeClass('active');
        $('.hl-point3 .h1-point-info').removeClass('active');
    });

    $('.hl-point3 .trigger').on('click', function() {
        $('.hl-point3 .h1-point-info').toggleClass('active');
        $('.hl-point2 .h1-point-info').removeClass('active');
        $('.hl-point1 .h1-point-info').removeClass('active');
    });

});

// Product Filter
$(window).load(function() {
    "use strict";
    var $container = $('.portfolio-grid');
    $container.isotope({
        layoutMode: "masonry",
        masonry: {
            columnWidth: 5
        },
        itemSelector: '.portfolio-item',
        transitionDuration: '0.8s'
    });
    var $optionSets = $('.portfolio-filter'),
        $optionLinks = $optionSets.find('a');
    $optionLinks.click(function() {
        var $this = $(this);
        // don't proceed if already selected
        if ($this.hasClass('active')) {
            return false;
        }
        var $optionSet = $this.parents('.portfolio-filter');
        $optionSet.find('.active').removeClass('active');
        $this.addClass('active');
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');

        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            changeLayoutMode($this, options);
        } else {
            // otherwise, apply new options
            $container.isotope(options);
        }
        return false;
    });
});

// SETTINGS PANEL
$('.btn-settings').on('click', function() {
    $(this).parent().toggleClass('active');
});

$('.switch-handle').on('click', function() {
    $(this).toggleClass('active');
    $('body').toggleClass('boxed');
});

$('.color-list div').on('click', function() {
    if ($(this).hasClass('active')) return false;
    $('link.color-scheme-link').remove();
    $(this).addClass('active').siblings().removeClass('active');
    var src = $(this).attr('data-src'),
        colorScheme = $('<link class="color-scheme-link" rel="stylesheet" />');
    colorScheme
        .attr('href', src)
        .appendTo('head');
});


$('.count').each(function() {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now));
        }
    });
});

$(function() {
    $('.btn-circle').on('click', function() {
        $('.btn-circle.btn-info').removeClass('btn-info').addClass('btn-default');
        $(this).addClass('btn-info').removeClass('btn-default').blur();
    });
});

$(document).ready(function() {

    $(".ai-list1").hover(function(e) {
        $(".ai-slide-img-inner").addClass("ai-slide1-active");
        $(".ai-slide-img-inner").removeClass("ai-slide2-active");
        $(".ai-slide-img-inner").removeClass("ai-slide3-active");
    });

    $(".ai-list2").hover(function(e) {
        $(".ai-slide-img-inner").addClass("ai-slide2-active");
        $(".ai-slide-img-inner").removeClass("ai-slide1-active");
        $(".ai-slide-img-inner").removeClass("ai-slide3-active");
    });

    $(".ai-list3").hover(function(e) {
        $(".ai-slide-img-inner").addClass("ai-slide3-active");
        $(".ai-slide-img-inner").removeClass("ai-slide1-active");
        $(".ai-slide-img-inner").removeClass("ai-slide2-active");
    });

});