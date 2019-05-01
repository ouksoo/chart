'use strict';

var PJT = {
    /**
     * Intro & login
     */
    loginInit: function loginInit() {
        this.introAnimationStart();
    },
    introAnimationStart: function introAnimationStart() {
        var sequenceStart = void 0;
        var position = 250;
        var interval = 25;
        var diff = 250;
        var sequencesize = 2500;
        sequenceStart = setInterval(function () {
            document.getElementById('sequenceArea').style.backgroundPosition = '-' + position + 'px 0px';
            if (position < sequencesize) {
                position = position + diff;
            } else {
                position = 250;
                clearInterval(sequenceStart);
                $('#sequenceArea').on('click', function () {
                    PJT.loadImageRandom();
                    $('.intro-bg').fadeOut('slow');
                });
            }
        }, interval);
    },
    loadImageRandom: function loadImageRandom() {
        var imageClass = ['type-1', 'type-2', 'type-3'];
        $('.image-bg').addClass(imageClass[Math.floor(Math.random() * imageClass.length)]).addClass('on');
        $('.login-wrap').fadeIn(1500, function () {
            $('header, footer').addClass('on');
            $('.login-wrap input#userId').focus();
            PJT.loginKeyCheck();
        });
    },
    loginKeyCheck: function loginKeyCheck() {
        $('.login-wrap input').on('keyup', function (e) {
            if ($('#userId').val() !== '' && $('#passWd').val() !== '') {
                $('.login-wrap .form-wrap, a.login-button').addClass('on');
            } else {
                $('.login-wrap .form-wrap, a.login-button').removeClass('on');
            }
        });
    },
    scrollPlugIn: function scrollPlugIn() {},
    utilsAliveLinks: function utilsAliveLinks() {
        // header monitoring link
        $('a.header-monitor, header .product-btn').on('mouseenter', function () {
            $('header .product-btn').addClass('on');
        });
        $('a.header-monitor, header .product-btn').on('mouseleave', function () {
            $('header .product-btn').removeClass('on');
        });

        // profile show hide
        $('a.profile-show-hide, div.personal-list-wrap').on('mouseenter', function () {
            $('div.personal-list-wrap').stop().fadeIn('fast');
        });
        $('a.profile-show-hide, div.personal-list-wrap').on('mouseleave', function () {
            $('div.personal-list-wrap').stop().fadeOut('fast');
        });

        // notice show hide
        $('a.notice-show-hide, div.notice-list-wrap').on('mouseenter', function () {
            $('div.notice-list-wrap').stop().fadeIn('fast');
        });
        $('a.notice-show-hide, div.notice-list-wrap').on('mouseleave', function () {
            $('div.notice-list-wrap').stop().fadeOut('fast');
        });
    },

    /**
     * global
     */
    siteResizeResponse: function siteResizeResponse() {
        var winWidth = $(window).width();
        var winHeight = $(window).height();
        $('.content-wrap').css('width', winWidth - 385);
        $('.device-list').css('height', winHeight - 169);

        $(window).on('resize', function () {
            var winWidth = $(window).width();
            var winHeight = $(window).height();
            var realSize = winWidth - 385;
            $('.content-wrap').css('width', realSize);
            $('.device-list').css('height', winHeight - 169);
        });
    }

    // after loaded execute
};window.onload = function () {
    PJT.siteResizeResponse();
    PJT.utilsAliveLinks();
    PJT.scrollPlugIn();
};